$(function(){
    $('.range input').on('mousemove', function(){
        var getValRange = $(this).val();
        $('.range span').text(getValRange);
        
        if (getValRange >= 2000) {
            $('path').not('#US, #CA, #MX, #BR, #GF, #ZA, #CD, #ET, #NG, #ES, #GB, #FR, #IT, #DE, #RU, #TR, #KZ, #IN, #CN, #KR, #ID, #AU, #JP').css('fill', '');
            $('path').css('stroke-width', '0.5');
            $('path').css('stroke', '');

            $('#US').css('fill', '#081d58');
            $('#CA').css('fill', '#d6604d');
            $('#MX').css('fill', '#cc503e');
            $('#BR').css('fill', '#33a02c');
            $('#GF').css('fill', '#023858');
            $('#ZA').css('fill', '#8c510a');
            $('#CD').css('fill', '#5f4690');
            $('#ET').css('fill', '#fdb462');
            $('#NG').css('fill', '#b2df8a');
            $('#ES').css('fill', '#bd3200');
            $('#GB').css('fill', '#b2182b');
            $('#FR').css('fill', '#023858');
            $('#IT').css('fill', '#00441b');
            $('#RU').css('fill', '#ffffff');
            $('#TR').css('fill', '#edad08');
            $('#KZ').css('fill', '#986ba1');
            $('#IN').css('fill', '#e17c05');
            $('#CN').css('fill', '#7f0000');
            $('#KR').css('fill', '#cab2d6');
            $('#ID').css('fill', '#fb8072');
            $('#AU').css('fill', '#3264c8');
            $('#JP').css('fill', '#aa1f4b');
        } 
        else if (getValRange >= 1990) {
            $('path').not('#US, #CA, #MX, #BR, #GF, #ZA, #CD, #ET, #ER, #NG, #ES, #GB, #FR, #IT, #DE, #RU, #UZ, #TM, #KZ, #GE, #AZ, #ME, #AM, #UA, #BY, #LV, #EE, #KG, #TJ, #TR, #IN, #CN, #ID, #AU, #JP, #DZ').css('fill', '');
            $('path').not('#DE').css('stroke-width', '0.5');
            $('path').not('#DE').css('stroke', '');
            
            $('#US').css('fill', '#081d58');
            $('#CA').css('fill', '#d6604d');
            $('#MX').css('fill', '#cc503e');
            $('#BR').css('fill', '#33a02c');
            $('#GF').css('fill', '#023858');
            $('#ZA').css('fill', '#8c510a');
            $('#CD').css('fill', '#5f4690');
            $('#ET, #ER').css('fill', '#fdb462');
            $('#NG').css('fill', '#b2df8a');
            $('#ES').css('fill', '#bd3200');
            $('#GB').css('fill', '#b2182b');
            $('#FR').css('fill', '#023858');
            $('#IT').css('fill', '#00441b');

            $('#DE').css('fill', '#000000');
            $('#DE').css('stroke-width', '2.5');
            $('#DE').css('stroke', '#a03500');
            $('path').not('#DE').css('stroke-width', '0.5');
            $('path').not('#DE').css('stroke', '');

            $('#RU, #UZ, #TM, #KZ, #GE, #AZ, #ME, #AM, #UA, #BY, #LV, #EE, #KG, #TJ').css('fill', '#ffffff');
            $('#TR').css('fill', '#edad08');
            $('#IN').css('fill', '#e17c05');
            $('#CN').css('fill', '#7f0000');
            $('#ID').css('fill', '#fb8072');
            $('#AU').css('fill', '#3264c8');
            $('#JP').css('fill', '#aa1f4b');
            $('#DZ').css('fill', '#0f8554'); 
        } 
        else if (getValRange >= 1980) {
            $('path').not('#US, #CA, #MX, #BR, #GF, #ZA, #NA, #CD, #ET, #ER, #NG, #ES, #GB, #BZ, #FR, #IT, #DE, #RU, #UZ, #TM, #KZ, #GE, #AZ, #ME, #AM, #UA, #BY, #LV, #EE, #KG, #TJ, #LT, #TR, #IN, #CN, #ID, #AU, #JP, #DZ').css('fill', '');
            $('path').not('#DE').css('stroke-width', '0.5');
            $('path').not('#DE').css('stroke', '');
            
            $('#US').css('fill', '#081d58');
            $('#CA').css('fill', '#d6604d');
            $('#MX').css('fill', '#cc503e');
            $('#BR').css('fill', '#33a02c');
            $('#GF').css('fill', '#023858');
            $('#ZA, #NA').css('fill', '#8c510a');
            $('#CD').css('fill', '#5f4690');
            $('#ET, #ER').css('fill', '#fdb462');
            $('#NG').css('fill', '#b2df8a');
            $('#ES').css('fill', '#bd3200');
            $('#GB, #BZ').css('fill', '#b2182b');
            $('#FR').css('fill', '#023858');
            $('#IT').css('fill', '#00441b');

            $('#DE').css('fill', '#000000');
            $('#DE').css('stroke-width', '2.5');
            $('#DE').css('stroke', '#a03500');
            $('path').not('#DE').css('stroke-width', '0.5');
            $('path').not('#DE').css('stroke', '');

            $('#RU, #UZ, #TM, #KZ, #GE, #AZ, #ME, #AM, #UA, #BY, #LV, #EE, #KG, #TJ, #LT').css('fill', '#ffffff');
            $('#TR').css('fill', '#edad08');
            $('#IN').css('fill', '#e17c05');
            $('#CN').css('fill', '#7f0000');
            $('#ID').css('fill', '#fb8072');
            $('#AU').css('fill', '#3264c8');
            $('#JP').css('fill', '#aa1f4b');
            $('#DZ').css('fill', '#0f8554'); 
        } 
        else if (getValRange >= 1970) {
            $('path').not('#US, #CA, #MX, #BR, #GF, #ZA, #NA, #CD, #NG, #ES, #GB, #BZ, #FR, #IT, #DE, #RU, #UZ, #TM, #KZ, #GE, #AZ, #ME, #AM, #UA, #BY, #LV, #EE, #KG, #TJ, #LT, #IN, #CN, #ID, #AU, #PG #JP, #DZ, #AR, #EH, #OM, #AE').css('fill', '');
            $('path').not('#DE').css('stroke-width', '0.5');
            $('path').not('#DE').css('stroke', '');
            
            $('#US').css('fill', '#081d58');
            $('#CA').css('fill', '#d6604d');
            $('#MX').css('fill', '#cc503e');
            $('#BR').css('fill', '#33a02c');
            $('#GF').css('fill', '#023858');
            $('#ZA, #NA').css('fill', '#8c510a');
            $('#CD').css('fill', '#5f4690');
            $('#NG').css('fill', '#b2df8a');
            $('#ES').css('fill', '#bd3200');
            $('#GB, #BZ').css('fill', '#b2182b');
            $('#FR').css('fill', '#023858');
            $('#IT').css('fill', '#00441b');

            $('#DE').css('fill', '#000000');
            $('#DE').css('stroke-width', '2.5');
            $('#DE').css('stroke', '#a03500');
            $('path').not('#DE').css('stroke-width', '0.5');
            $('path').not('#DE').css('stroke', '');

            $('#RU, #UZ, #TM, #KZ, #GE, #AZ, #ME, #AM, #UA, #BY, #LV, #EE, #KG, #TJ, #LT').css('fill', '#ffffff');
            $('#IN').css('fill', '#e17c05');
            $('#CN').css('fill', '#7f0000');
            $('#ID').css('fill', '#fb8072');
            $('#AU, #PG').css('fill', '#3264c8');
            $('#JP').css('fill', '#aa1f4b');
            $('#DZ').css('fill', '#0f8554'); 
            $('#AR').css('fill', '#4575b4'); 
            $('#EH').css('fill', '#bd3200'); 
            $('#OM, #AE').css('fill', '#b2182b'); 
        } 
        else if (getValRange >= 1960) {
            $('path').not('#US, #CA, #MX, #BR, #GF, #NG, #GB, #BZ, #GY, #JM, #SL, #FK, #YE, #LS, #SZ, #BW, #ZW, #ZM, #MW, #TZ, #KE, #UG, #FR, #DZ, #MR, #NE, #TD, #CF, #CG, #GA, #CI, #BF, #NE, #BJ, #IT, #DE, #RU, #UZ, #TM, #KZ, #GE, #AZ, #ME, #AM, #UA, #BY, #LV, #EE, #KG, #TJ, #LT, #IN, #CN, #ID, #JP, #DZ, #AR, #OM, #AE').css('fill', '');
            $('path').not('#DE').css('stroke-width', '0.5');
            $('path').not('#DE').css('stroke', '');
            
            $('#US').css('fill', '#081d58');
            $('#CA').css('fill', '#d6604d');
            $('#MX').css('fill', '#cc503e');
            $('#BR').css('fill', '#33a02c');
            $('#GF').css('fill', '#023858');
            $('#NG').css('fill', '#b2182b');
            $('#GB, #BZ, #GY, #JM, #SL, #FK, #YE, #LS, #SZ, #BW, #ZW, #ZM, #MW, #TZ, #KE, #UG').css('fill', '#b2182b');
            $('#FR, #DZ, #MR, #NE, #TD, #CF, #CG, #GA, #CI, #BF, #NE, #BJ').css('fill', '#023858');
            $('#IT').css('fill', '#00441b');

            $('#DE').css('fill', '#000000');
            $('#DE').css('stroke-width', '2.5');
            $('#DE').css('stroke', '#a03500');
            $('path').not('#DE').css('stroke-width', '0.5');
            $('path').not('#DE').css('stroke', '');

            $('#RU, #UZ, #TM, #KZ, #GE, #AZ, #ME, #AM, #UA, #BY, #LV, #EE, #KG, #TJ, #LT').css('fill', '#ffffff');
            $('#IN').css('fill', '#e17c05');
            $('#CN').css('fill', '#7f0000');
            $('#ID').css('fill', '#fb8072');
            $('#JP').css('fill', '#aa1f4b');
            $('#AR').css('fill', '#4575b4'); 
            $('#OM, #AE').css('fill', '#b2182b'); 
        }
        else {
            $('path').css('fill', '');
            $('path').css('stroke-width', '0.5');
            $('path').css('stroke', '');
        }
    });
});