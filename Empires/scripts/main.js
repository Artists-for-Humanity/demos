$(function(){
    var currentSVGContent = '';

    $('.range input').on('mousemove', function(){
        var getValRange = $(this).val();
        $('.range span').text(getValRange);

        const svgContainer = $('#svgContainer');
        var newSVGContent = '';

        if(getValRange >= 2000){
            newSVGContent = svgContent;
        } 
        else if(getValRange >= 1990){
            newSVGContent = svgContent1;
        }

        if (newSVGContent !== currentSVGContent) {
            currentSVGContent = newSVGContent;
            if (newSVGContent !== '') {
                svgContainer.fadeOut(100, function() {
                    svgContainer.html(newSVGContent).fadeIn(100); 
                });
            } else {
                svgContainer.fadeOut(100);
            }
        }
    });
});
