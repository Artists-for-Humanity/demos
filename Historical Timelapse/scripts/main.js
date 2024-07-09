function updateEventListeners(svgElement, storedZoom, storedTranslateX, storedTranslateY) {
    let scale = storedZoom;
    let translateX = storedTranslateX;
    let translateY = storedTranslateY;
    let isDragging = false;
    let startX, startY;

    const minScale = 0.1;

    svgElement.addEventListener('wheel', (event) => {
        event.preventDefault();
    
        const rect = svgElement.getBoundingClientRect();
        const offsetX = event.clientX - rect.left;
        const offsetY = event.clientY - rect.top;
    
        const delta = Math.sign(event.deltaY) * 0.1;
        const newScale = Math.max(1, scale - delta);
    
        const containerCenterX = rect.width / 2;
        const containerCenterY = rect.height / 2;
    
        const contentCenterX = (offsetX - translateX) / scale;
        const contentCenterY = (offsetY - translateY) / scale;
    
        translateX += (containerCenterX - contentCenterX) * (1 - newScale / scale);
        translateY += (containerCenterY - contentCenterY) * (1 - newScale / scale);
    
        svgElement.style.transform = `scale(${newScale}) translate(${translateX}px, ${translateY}px)`;
    
        scale = newScale;
    });
    

    svgElement.addEventListener('mousedown', (event) => {
        isDragging = true;
        startX = event.clientX;
        startY = event.clientY;
        svgElement.classList.add('grabbing');
    });

    window.addEventListener('mousemove', (event) => {
        if (isDragging) {
            const dx = event.clientX - startX;
            const dy = event.clientY - startY;

            translateX += dx / scale;
            translateY += dy / scale;

            svgElement.style.transform = `scale(${scale}) translate(${translateX}px, ${translateY}px)`;

            startX = event.clientX;
            startY = event.clientY;
        }
    });

    window.addEventListener('mouseup', () => {
        if (isDragging) {
            isDragging = false;
            svgElement.classList.remove('grabbing');
        }
    });
}

$(function(){
    var currentMap = year2020;
    var storedZoom = 1; 
    var storedTranslateX = 0; 
    var storedTranslateY = 0; 

    $('.range input').on('input', function(){
        var getValRange = $(this).val();
        $('.range span').text(getValRange);
        const svgContainer = $('#svgContainer');
        var newMap = '';
        if(getValRange >= 2010){
            newMap = year2020;
        } else if(getValRange >= 2000){
            newMap = year2000;
        } else if(getValRange >= 1990){
            newMap = year1990;
        } else if(getValRange >= 1980){
            newMap = year1980;
        } else if(getValRange >= 1970){
            newMap = year1970;
        } else if(getValRange >= 1960){
            newMap = year1960;
        } else if(getValRange >= 1950){
            newMap = year1950;
        } else if(getValRange >= 1941){
            newMap = year1940;
        } else if(getValRange == 1940){
            let colors = ['#7f0000', '#aa1f4b'];
            let colorIndex = 0;
            newMap = EXACT_1940;
            setInterval(function() {
                document.getElementById("china_1940").style.fill = colors[colorIndex];
                colorIndex = (colorIndex + 1) % colors.length;
            }, 250);
        } else if(getValRange >= 1930){
            newMap = year1930;
        } else if(getValRange >= 1921){
            newMap = year1920;
        } else if(getValRange == 1920){
            let colors = ['#7f0000', '#e5d8bd'];
            let colorIndex = 0;
            newMap = EXACT_1920;
            setInterval(function() {
                document.getElementById("china_1920").style.fill = colors[colorIndex];
                colorIndex = (colorIndex + 1) % colors.length;
            }, 250);
        } else if(getValRange >= 1910){
            newMap = year1910;
        } else if(getValRange >= 1900){
            newMap = year1900;
        } else if(getValRange >= 1890){
            newMap = year1890;
        } else if(getValRange >= 1880){
            newMap = year1880;
        } else if(getValRange >= 1870){
            newMap = year1870;
        } else if(getValRange >= 1850){
            newMap = year1850;
        } else if(getValRange >= 1830){
            newMap = year1830;
        } else if(getValRange >= 1820){
            newMap = year1820;
        } else if(getValRange >= 1800){
            newMap = year1800;
        } else if(getValRange >= 1750){
            newMap = year1750;
        } else if(getValRange >= 1700){
            newMap = year1700;
        } else if(getValRange >= 1650){
            newMap = year1650;
        } else if(getValRange >= 1600){
            newMap = year1600;
        } else if(getValRange >= 1550){
            newMap = year1550;
        } else if(getValRange >= 1500){
            newMap = year1500;
        } else {
            newMap = '';
        }

        if (newMap !== currentMap) {
            storedZoom = scale;
            storedTranslateX = translateX;
            storedTranslateY = translateY;

            currentMap = newMap;
            if (newMap !== '') {
                svgContainer.fadeOut(0, function() {
                    svgContainer.html(newMap).fadeIn(0, function() {
                        const newSvg = svgContainer.find('svg')[0];
                        newSvg.style.transform = `scale(${storedZoom}) translate(${storedTranslateX}px, ${storedTranslateY}px)`;
                        newSvg.style.width = '100%'; 
                        newSvg.style.height = 'auto';

                        updateEventListeners(newSvg, storedZoom, storedTranslateX, storedTranslateY);
                    }); 
                });
            } else {
                svgContainer.fadeOut(0);
            }
        }
    });
});
