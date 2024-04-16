$(function(){
    var currentMap = year2020;
    $('.range input').on('mousemove', function(){
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
        } else {
            newMap = '';
        }

        if (newMap !== currentMap) {
            currentMap = newMap;
            if (newMap !== '') {
                svgContainer.fadeOut(0, function() {
                    svgContainer.html(newMap).fadeIn(0); 
                });
            } else {
                svgContainer.fadeOut(0);
            }
        }
    });
});