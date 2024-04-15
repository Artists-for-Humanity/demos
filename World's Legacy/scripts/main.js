$(function(){
    var currentMap = '';
    $('.range input').on('mousemove', function(){
        var getValRange = $(this).val();
        $('.range span').text(getValRange);
        const svgContainer = $('#svgContainer');
        var newMap = '';

        if(getValRange >= 2000){
            newMap = svgContent;
        } else if(getValRange >= 1990){
            newMap = svgContent1;
        } else {
            newMap = '';
        }

        if (newMap !== currentMap) {
            currentMap = newMap;
            if (newMap !== '') {
                svgContainer.fadeOut(200, function() {
                    svgContainer.html(newMap).fadeIn(200); 
                });
            } else {
                svgContainer.fadeOut(200);
            }
        }
    });
});
