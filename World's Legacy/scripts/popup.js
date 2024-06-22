function formatNumber(numberString) {
    const number = parseFloat(numberString.replace(/,/g, ''));
    if (number >= 1e12) {
        return (number / 1e12).toFixed(3).replace(/\.?0+$/, '') + 'T';
    } else if (number >= 1e9) {
        return (number / 1e9).toFixed(3).replace(/\.?0+$/, '') + 'B';
    } else if (number >= 1e6) {
        return (number / 1e6).toFixed(3).replace(/\.?0+$/, '') + 'M';
    } else if (number >= 1e3) {
        return (number / 1e3).toFixed(3).replace(/\.?0+$/, '') + 'K';
    } else {
        return number.toFixed(0);
    }
}

let currentYear = 2020;
function updateCurrentYear() {
    currentYear = parseInt($('.range input').val());
    data.style.display = "none";
}
$(function(){
    updateCurrentYear();
    $('.range input').on('mousemove', updateCurrentYear);
});

const data = document.getElementById("data");
const text = document.createElement("div");
text.id = "text";
data.appendChild(text);

const China = "#7f0000";
const USA = "#081d58";
const India = "#e17c05";
const Japan = "#aa1f4b";
const Germany = "#000000";
const Russia = "#ffffff";
const Indonesia = "#fb8072";
const Brazil = "#33a02c";
const France = "#023858"
const United_Kingdom = "#b2182b";
const Turkey = "#edad08";
const Italy = "#00441b";
const Mexico = "#cc503e";
const South_Korea = "#cab2d6";
const Canada = "#d6604d";
const Nigeria = "#b2df8a";
const South_Africa = "#8c510a";
const Ethiopia = "#fdb462"; 
const DR_Congo = "#5f4690"; 
const Australia = "#3264c8"; 
const Kazakhstan = "#986ba1";
const Spain = "#bd3200";
const East_Germany = "#a03500";
const Algeria = "#0f8554";
const Argentina = "#4575b4";
const Dutch_Empire = "#b9a087"; 
const Sweden = "#4c91bf";
const Poland = "#f781bf";
const Belgium = "#762a83";
const Czechoslovakia = "#35978f";
const Austria_Hungary = "#ca562c";
const Bavaria = "#045a8d";
const Two_Sicilies = "#5aae61";
const Papacy = "#e88471";
const Sikh = "#39b185";
const Bukhara = "#a6cee3";
const Portuguese = "#005251";
const Durrani = "#252525";
const Mughal = "#a65628";
const Bengal = "#800026";
const Mysore = "#806000";
const Persia = "#72b38e";
const Ming = "#ffff33";
const Golconda = "#38a6a5";
const Saadi = "#e41a1c";
const Ahmadnagar = "#274e13";
const Gujarat = "#7a3d00";
const Merina = "#3b761e";
const Iroquois = "#0000ff";
const Timurid = "#525252";
const Mamluk = "#bd8e00";
const Mali = "#cc3333";
const Mutapa = "#0bceaf";
const Inca = "#b3de69";

document.addEventListener("click", function(event) {
    if (event.target.tagName === "path") {
        const fillColor = event.target.getAttribute("fill");
        const mouseX = event.clientX;
        const mouseY = event.clientY;
        
        if (fillColor === China) {
            data.style.display = "flex";
            if(currentYear >= 2022){
                text.innerHTML = 
                "NAME: China" + 
                "<br>POPULATION: " + formatNumber("1,434,071,371") +
                "<br>GDP: $" + formatNumber("28,779,528,000,000");
            } else if(currentYear >= 2020){
                text.innerHTML = 
                "NAME: China" + 
                "<br>POPULATION: " + formatNumber("1,419,936,007") +
                "<br>GDP: $" + formatNumber("25,466,031,330,345");
            } else if(currentYear >= 2010){
                text.innerHTML = 
                "NAME: China" + 
                "<br>POPULATION: " + formatNumber("1,339,724,852") +
                "<br>GDP: $" + formatNumber("16,387,244,811,847");
            } else if(currentYear >= 2000){
                text.innerHTML = 
                "NAME: China" + 
                "<br>POPULATION: " + formatNumber("1,269,751,500") +
                "<br>GDP: $" + formatNumber("7,673,176,625,788");
            } else if(currentYear >= 1990){
                text.innerHTML = 
                "NAME: China" + 
                "<br>POPULATION: " + formatNumber("1,135,185,000") +
                "<br>GDP: $" + formatNumber("4,195,025,697,589");
            } else if(currentYear >= 1980){
                text.innerHTML = 
                "NAME: China" + 
                "<br>POPULATION: " + formatNumber("981,235,000") +
                "<br>GDP: $" + formatNumber("2,347,261,441,755");
            } else if(currentYear >= 1970){
                text.innerHTML = 
                "NAME: China" + 
                "<br>POPULATION: " + formatNumber("818,315,000") +
                "<br>GDP: $" + formatNumber("1,417,943,115,464");
            } else if(currentYear >= 1960){
                text.innerHTML = 
                "NAME: China" + 
                "<br>POPULATION: " + formatNumber("667,070,000") +
                "<br>GDP: $" + formatNumber("873,931,758,610");
            } else if(currentYear >= 1950){
                text.innerHTML = 
                "NAME: China" + 
                "<br>POPULATION: " + formatNumber("546,815,000") +
                "<br>GDP: $" + formatNumber("541,524,766,362");
            } else if(currentYear >= 1940){
                text.innerHTML = 
                "NAME: Nationalist China" + 
                "<br>POPULATION: " + formatNumber("282,533,500") +
                "<br>GDP: $" + formatNumber("481,729,267,600");
            } else if(currentYear >= 1930){
                text.innerHTML = 
                "NAME: Nationalist China" + 
                "<br>POPULATION: " + formatNumber("407,500,000") +
                "<br>GDP: $" + formatNumber("511,139,272,336");
            } else if(currentYear >= 1920){
                text.innerHTML = 
                "NAME: Beiyang China" + 
                "<br>POPULATION: " + formatNumber("196,666,667") +
                "<br>GDP: $" + formatNumber("242,571,245,021");
            } else if(currentYear >= 1910){
                text.innerHTML = 
                "NAME: Qing China" + 
                "<br>POPULATION: " + formatNumber("427,194,857") +
                "<br>GDP: $" + formatNumber("478,164,237,475");
            } else if(currentYear >= 1900){
                text.innerHTML = 
                "NAME: Qing China" + 
                "<br>POPULATION: " + formatNumber("400,000,000") +
                "<br>GDP: $" + formatNumber("482,331,900,697");
            } else if(currentYear >= 1890){
                text.innerHTML = 
                "NAME: Qing China" + 
                "<br>POPULATION: " + formatNumber("389,838,000") +
                "<br>GDP: $" + formatNumber("474,689,675,112");
            } else if(currentYear >= 1880){
                text.innerHTML = 
                "NAME: Qing China" + 
                "<br>POPULATION: " + formatNumber("368,000,000") +
                "<br>GDP: $" + formatNumber("425,570,509,701");
            } else if(currentYear >= 1870){
                text.innerHTML = 
                "NAME: Qing China" + 
                "<br>POPULATION: " + formatNumber("358,000,000") +
                "<br>GDP: $" + formatNumber("422,485,572,987");
            } else if(currentYear >= 1850){
                text.innerHTML = 
                "NAME: Qing China" + 
                "<br>POPULATION: " + formatNumber("436,100,000") +
                "<br>GDP: $" + formatNumber("441,136,619,373");
            } else if(currentYear >= 1830){
                text.innerHTML = 
                "NAME: Qing China" + 
                "<br>POPULATION: " + formatNumber("409,000,000") +
                "<br>GDP: $" + formatNumber("431,764,485,286");
            } else if(currentYear >= 1820){
                text.innerHTML = 
                "NAME: Qing China" + 
                "<br>POPULATION: " + formatNumber("353,377,700") +
                "<br>GDP: $" + formatNumber("419,332,620,136");
            } else if(currentYear >= 1800){
                text.innerHTML = 
                "NAME: Qing China" + 
                "<br>POPULATION: " + formatNumber("353,377,700") +
                "<br>GDP: $" + formatNumber("393,223,436,333");
            } else if(currentYear >= 1750){
                text.innerHTML = 
                "NAME: Qing China" + 
                "<br>POPULATION: " + formatNumber("330,000,000") +
                "<br>GDP: $" + formatNumber("316,818,059,260");
            } else if(currentYear >= 1750){
                data.style.display = "flex";
                text.innerHTML = 
                "NAME: Qing China" + 
                "<br>POPULATION: " + formatNumber("225,000,000") +
                "<br>GDP: $" + formatNumber("316,818,059,260");
            } else if(currentYear >= 1700){
                text.innerHTML = 
                "NAME: Qing China" + 
                "<br>POPULATION: " + formatNumber("122,474,487") +
                "<br>GDP: $" + formatNumber("265,881,644,432");
            } else if(currentYear >= 1650){
                text.innerHTML = 
                "NAME: Qing China" + 
                "<br>POPULATION: " + formatNumber("140,000,000") +
                "<br>GDP: $" + formatNumber("177,440,300,336");
            } else {
                text.innerHTML = 
                "Not Enough Data";
            }
        } else if(fillColor === USA) {
            data.style.display = "flex";
            if(currentYear >= 2022){
                text.innerHTML = 
                "NAME: United States" + 
                "<br>POPULATION: " + formatNumber("338,289,857") +
                "<br>GDP: $" + formatNumber("24,003,704,000,000");
            } else if(currentYear >= 2020){
                text.innerHTML = 
                "NAME: United States" + 
                "<br>POPULATION: " + formatNumber("331,002,651") +
                "<br>GDP: $" + formatNumber("20,936,600,000,000");
            } else if(currentYear >= 2010){
                text.innerHTML = 
                "NAME: United States" + 
                "<br>POPULATION: " + formatNumber("309,349,689") +
                "<br>GDP: $" + formatNumber("18,927,301,116,874");
            } else if(currentYear >= 2000){
                text.innerHTML = 
                "NAME: United States" + 
                "<br>POPULATION: " + formatNumber("285,218,906") +
                "<br>GDP: $" + formatNumber("16,209,738,317,694");
            } else if(currentYear >= 1990){
                text.innerHTML = 
                "NAME: United States" + 
                "<br>POPULATION: " + formatNumber("252,227,873") +
                "<br>GDP: $" + formatNumber("11,539,087,366,010");
            } else if(currentYear >= 1980){
                text.innerHTML = 
                "NAME: United States" + 
                "<br>POPULATION: " + formatNumber("229,733,805") +
                "<br>GDP: $" + formatNumber("8,409,774,841,642");
            } else if(currentYear >= 1970){
                text.innerHTML = 
                "NAME: United States" + 
                "<br>POPULATION: " + formatNumber("206,102,031") +
                "<br>GDP: $" + formatNumber("6,123,128,816,104");
            } else if(currentYear >= 1960){
                text.innerHTML = 
                "NAME: United States" + 
                "<br>POPULATION: " + formatNumber("181,679,175") +
                "<br>GDP: $" + formatNumber("4,059,503,209,561");
            } else if(currentYear >= 1950){
                text.innerHTML = 
                "NAME: United States" + 
                "<br>POPULATION: " + formatNumber("240,020,870") +
                "<br>GDP: $" + formatNumber("3,216,436,613,395");
            } else if(currentYear >= 1940){
                text.innerHTML = 
                "NAME: United States" + 
                "<br>POPULATION: " + formatNumber("150,629,569") +
                "<br>GDP: $" + formatNumber("1,985,303,951,116");
            } else if(currentYear >= 1930){
                text.innerHTML = 
                "NAME: United States" + 
                "<br>POPULATION: " + formatNumber("140,370,264") +
                "<br>GDP: $" + formatNumber("1,654,455,614,975");
            } else if(currentYear >= 1920){
                text.innerHTML = 
                "NAME: United States" + 
                "<br>POPULATION: " + formatNumber("121,061,537") +
                "<br>GDP: $" + formatNumber("1,358,129,886,447");
            } else if(currentYear >= 1910){
                text.innerHTML = 
                "NAME: United States" + 
                "<br>POPULATION: " + formatNumber("102,215,496") +
                "<br>GDP: $" + formatNumber("1,113,758,691,964");
            } else if(currentYear >= 1900){
                text.innerHTML = 
                "NAME: United States" + 
                "<br>POPULATION: " + formatNumber("78,816,167") +
                "<br>GDP: $" + formatNumber("764,540,107,351");
            } else if(currentYear >= 1890){
                text.innerHTML = 
                "NAME: United States" + 
                "<br>POPULATION: " + formatNumber("62,979,766") +
                "<br>GDP: $" + formatNumber("522,936,204,264");
            } else if(currentYear >= 1880){
                text.innerHTML = 
                "NAME: United States" + 
                "<br>POPULATION: " + formatNumber("50,189,209") +
                "<br>GDP: $" + formatNumber("391,253,195,294");
            } else if(currentYear >= 1870){
                text.innerHTML = 
                "NAME: United States" + 
                "<br>POPULATION: " + formatNumber("38,558,371") +
                "<br>GDP: $" + formatNumber("239,558,991,468");
            } else if(currentYear >= 1850){
                text.innerHTML = 
                "NAME: United States" + 
                "<br>POPULATION: " + formatNumber("23,191,876") +
                "<br>GDP: $" + formatNumber("98,890,664,634");
            } else if(currentYear >= 1830){
                text.innerHTML = 
                "NAME: United States" + 
                "<br>POPULATION: " + formatNumber("13,185,070") +
                "<br>GDP: $" + formatNumber("46,561,361,604");
            } else if(currentYear >= 1820){
                text.innerHTML = 
                "NAME: United States" + 
                "<br>POPULATION: " + formatNumber("9,638,453") +
                "<br>GDP: $" + formatNumber("30,251,570,664");
            } else if(currentYear >= 1800){
                text.innerHTML = 
                "NAME: United States" + 
                "<br>POPULATION: " + formatNumber("5,308,483") +
                "<br>GDP: $" + formatNumber("15,865,673,443");
            } else {
                text.innerHTML = 
                "Not Enough Data";
            }
        } else if(fillColor === India) {
            data.style.display = "flex"; 
            if(currentYear >= 2022){
                text.innerHTML =
                "NAME: India" + 
                "<br>POPULATION: " + formatNumber("1,417,173,173") +
                "<br>GDP: $" + formatNumber("11,619,550,000,000");
            } else if(currentYear >= 2020){
                text.innerHTML =
                "NAME: India" + 
                "<br>POPULATION: " + formatNumber("1,380,000,000") +
                "<br>GDP: $" + formatNumber("9,907,028,000,000");
            } else if(currentYear >= 2010){
                text.innerHTML =
                "NAME: India" + 
                "<br>POPULATION: " + formatNumber("1,182,105,564") +
                "<br>GDP: $" + formatNumber("6,587,478,152,426");
            } else if(currentYear >= 2000){
                text.innerHTML =
                "NAME: India" + 
                "<br>POPULATION: " + formatNumber("1,059,634,000") +
                "<br>GDP: $" + formatNumber("3,437,165,798,451");
            } else if(currentYear >= 1990){
                text.innerHTML =
                "NAME: India" + 
                "<br>POPULATION: " + formatNumber("870,452,000") +
                "<br>GDP: $" + formatNumber("2,170,278,833,441");
            } else if(currentYear >= 1980){
                text.innerHTML =
                "NAME: India" + 
                "<br>POPULATION: " + formatNumber("696,828,000") +
                "<br>GDP: $" + formatNumber("1,258,178,013,973");
            } else if(currentYear >= 1970){
                text.innerHTML =
                "NAME: India" + 
                "<br>POPULATION: " + formatNumber("557,501,000") +
                "<br>GDP: $" + formatNumber("928,035,266,198");
            } else if(currentYear >= 1960){
                text.innerHTML =
                "NAME: India" + 
                "<br>POPULATION: " + formatNumber("445,955,000") +
                "<br>GDP: $" + formatNumber("645,508,700,752");
            } else if(currentYear >= 1950){
                text.innerHTML =
                "NAME: India" + 
                "<br>POPULATION: " + formatNumber("357,021,000") +
                "<br>GDP: $" + formatNumber("439,180,173,701");
            } else if(currentYear >= 1800 && currentYear <= 1820){
                text.innerHTML =
                "NAME: Maratha Empire" + 
                "<br>POPULATION: " + formatNumber("116,187,500") +
                "<br>GDP: $" + formatNumber("145,004,046,446");
            } else if(currentYear >= 1750 && currentYear <= 1799){
                text.innerHTML =
                "NAME: Maratha Empire" + 
                "<br>POPULATION: " + formatNumber("67,293,917") +
                "<br>GDP: $" + formatNumber("86,671,296,758");
            } else if(currentYear >= 1650 && currentYear <= 1699){
                text.innerHTML =
                "NAME: Bijapur Sultanate" + 
                "<br>POPULATION: " + formatNumber("4,182,839") +
                "<br>GDP: $" + formatNumber("16,972,075,647");
            } else {
                text.innerHTML = 
                "Not Enough Data"
            }
        } else if(fillColor === Japan) {
            data.style.display = "flex"; 
            if(currentYear >= 2022){
                text.innerHTML =
                "NAME: Japan" + 
                "<br>POPULATION: " + formatNumber("123,951,692") +
                "<br>GDP: $" + formatNumber("5,856,478,000,000");
            } else if(currentYear >= 2020){
                text.innerHTML =
                "NAME: Japan" + 
                "<br>POPULATION: " + formatNumber("126,476,461") +
                "<br>GDP: $" + formatNumber("5,312,296,000,000");
            } else if(currentYear >= 2010){
                text.innerHTML =
                "NAME: Japan" + 
                "<br>POPULATION: " + formatNumber("128,056,000") +
                "<br>GDP: $" + formatNumber("5,534,069,317,027");
            } else if(currentYear >= 2000){
                text.innerHTML =
                "NAME: Japan" + 
                "<br>POPULATION: " + formatNumber("126,925,843") +
                "<br>GDP: $" + formatNumber("5,225,015,968,149");
            } else if(currentYear >= 1990){
                text.innerHTML =
                "NAME: Japan" + 
                "<br>POPULATION: " + formatNumber("123,611,167") +
                "<br>GDP: $" + formatNumber("4,585,751,337,016");
            } else if(currentYear >= 1980){
                text.innerHTML =
                "NAME: Japan" + 
                "<br>POPULATION: " + formatNumber("117,060,396") +
                "<br>GDP: $" + formatNumber("3,098,809,916,756");
            } else if(currentYear >= 1970){
                text.innerHTML =
                "NAME: Japan" + 
                "<br>POPULATION: " + formatNumber("103,720,060") +
                "<br>GDP: $" + formatNumber("2,002,561,815,867");
            } else if(currentYear >= 1960){
                text.innerHTML =
                "NAME: Japan" + 
                "<br>POPULATION: " + formatNumber("93,418,501") +
                "<br>GDP: $" + formatNumber("741,021,886,483");
            } else if(currentYear >= 1940 && currentYear <= 1950){
                text.innerHTML =
                "NAME: Empire of Japan" + 
                "<br>POPULATION: " + formatNumber("300,769,228") +
                "<br>GDP: $" + formatNumber("670,631,171,923");
            } else if(currentYear >= 1930){
                text.innerHTML =
                "NAME: Empire of Japan" + 
                "<br>POPULATION: " + formatNumber("91,793,680") +
                "<br>GDP: $" + formatNumber("319,914,078,158");
            } else if(currentYear >= 1920){
                text.innerHTML =
                "NAME: Empire of Japan" + 
                "<br>POPULATION: " + formatNumber("78,208,378") +
                "<br>GDP: $" + formatNumber("244,137,113,796");
            } else if(currentYear >= 1910){
                text.innerHTML =
                "NAME: Empire of Japan" + 
                "<br>POPULATION: " + formatNumber("69,794,000") +
                "<br>GDP: $" + formatNumber("181,846,022,074");
            } else if(currentYear >= 1900){
                text.innerHTML =
                "NAME: Empire of Japan" + 
                "<br>POPULATION: " + formatNumber("46,605,000") +
                "<br>GDP: $" + formatNumber("129,949,489,652");
            } else if(currentYear >= 1890){
                text.innerHTML =
                "NAME: Empire of Japan" + 
                "<br>POPULATION: " + formatNumber("40,077,000") +
                "<br>GDP: $" + formatNumber("92,095,001,496");
            } else if(currentYear >= 1880){
                text.innerHTML =
                "NAME: Empire of Japan" + 
                "<br>POPULATION: " + formatNumber("36,807,000") +
                "<br>GDP: $" + formatNumber("76,348,245,029");
            } else if(currentYear >= 1870){
                text.innerHTML =
                "NAME: Empire of Japan" + 
                "<br>POPULATION: " + formatNumber("34,437,000") +
                "<br>GDP: $" + formatNumber("67,439,372,776");
            } else if(currentYear >= 1850){
                text.innerHTML =
                "NAME: Tokugawa Japan" + 
                "<br>POPULATION: " + formatNumber("32,200,000") +
                "<br>GDP: $" + formatNumber("56,955,483,520");
            } else if(currentYear >= 1830){
                text.innerHTML =
                "NAME: Tokugawa Japan" + 
                "<br>POPULATION: " + formatNumber("31,330,000") +
                "<br>GDP: $" + formatNumber("52,919,269,323");
            } else if(currentYear >= 1820){
                text.innerHTML =
                "NAME: Tokugawa Japan" + 
                "<br>POPULATION: " + formatNumber("31,000,000") +
                "<br>GDP: $" + formatNumber("50,603,271,363");
            } else if(currentYear >= 1800){
                text.innerHTML =
                "NAME: Tokugawa Japan" + 
                "<br>POPULATION: " + formatNumber("29,000,000") +
                "<br>GDP: $" + formatNumber("49,515,028,968");
            } else if(currentYear >= 1750){
                text.innerHTML =
                "NAME: Tokugawa Japan" + 
                "<br>POPULATION: " + formatNumber("28,667,000") +
                "<br>GDP: $" + formatNumber("33,861,112,453");
            } else if(currentYear >= 1700){
                text.innerHTML =
                "NAME: Tokugawa Japan" + 
                "<br>POPULATION: " + formatNumber("27,000,000") +
                "<br>GDP: $" + formatNumber("35,908,280,663");
            } else if(currentYear >= 1650){
                text.innerHTML =
                "NAME: Tokugawa Japan" + 
                "<br>POPULATION: " + formatNumber("20,915,246") +
                "<br>GDP: $" + formatNumber("30,116,575,312");
            } else if(currentYear >= 1600){
                text.innerHTML =
                "NAME: Azuchi-Momoyama Japan" + 
                "<br>POPULATION: " + formatNumber("12,000,000") +
                "<br>GDP: $" + formatNumber("24,328,662,697");
            } else if(currentYear >= 1550){
                text.innerHTML =
                "NAME: Ashikaga Japan" + 
                "<br>POPULATION: " + formatNumber("10,900,000") +
                "<br>GDP: $" + formatNumber("20,981,790,783");
            } else if(currentYear >= 1500){
                text.innerHTML =
                "NAME: Ashikaga Japan" + 
                "<br>POPULATION: " + formatNumber("9,800,000") +
                "<br>GDP: $" + formatNumber("17,783,301,976");
            } else {
                text.innerHTML = 
                "Not Enough Data"
            }
        } else if(fillColor === Germany) {
            data.style.display = "flex"; 
            if(currentYear >= 2022){
                text.innerHTML =
                "NAME: Germany" + 
                "<br>POPULATION: " + formatNumber("83,369,843") +
                "<br>GDP: $" + formatNumber("5,017,163,000,000");
            } else if(currentYear >= 2020){
                text.innerHTML =
                "NAME: Germany" + 
                "<br>POPULATION: " + formatNumber("83,783,942") +
                "<br>GDP: $" + formatNumber("4,469,546,000,000");
            } else if(currentYear >= 2010){
                text.innerHTML =
                "NAME: Germany" + 
                "<br>POPULATION: " + formatNumber("81,802,257") +
                "<br>GDP: $" + formatNumber("4,160,651,925,465");
            } else if(currentYear >= 2000){
                text.innerHTML =
                "NAME: Germany" + 
                "<br>POPULATION: " + formatNumber("82,000,000") +
                "<br>GDP: $" + formatNumber("3,397,761,246,582");
            } else if(currentYear >= 1990){
                text.innerHTML =
                "NAME: West Germany" + 
                "<br>POPULATION: " + formatNumber("63,254,000") +
                "<br>GDP: $" + formatNumber("1,544,852,527,649");
            } else if(currentYear >= 1980){
                text.innerHTML =
                "NAME: West Germany" + 
                "<br>POPULATION: " + formatNumber("61,658,000") +
                "<br>GDP: $" + formatNumber("1,350,116,997,388");
            } else if(currentYear >= 1970){
                text.innerHTML =
                "NAME: West Germany" + 
                "<br>POPULATION: " + formatNumber("60,650,584") +
                "<br>GDP: $" + formatNumber("1,030,028,283,998");
            } else if(currentYear >= 1960){
                text.innerHTML =
                "NAME: West Germany" + 
                "<br>POPULATION: " + formatNumber("55,958,000") +
                "<br>GDP: $" + formatNumber("682,322,036,033");
            } else if(currentYear >= 1950){
                text.innerHTML =
                "NAME: West Germany" + 
                "<br>POPULATION: " + formatNumber("49,842,624") +
                "<br>GDP: $" + formatNumber("324,192,812,967");
                
            } else if(currentYear >= 1940){
                text.innerHTML =
                "NAME: Nazi Germany" + 
                "<br>POPULATION: " + formatNumber("137,328,719") +
                "<br>GDP: $" + formatNumber("1,239,496,851,920");
                
            } else if(currentYear >= 1930){
                text.innerHTML =
                "NAME: Weimar Germany" + 
                "<br>POPULATION: " + formatNumber("65,130,000") +
                "<br>GDP: $" + formatNumber("510,875,233,632");
            } else if(currentYear >= 1920){
                text.innerHTML =
                "NAME: Weimar Germany" + 
                "<br>POPULATION: " + formatNumber("61,794,000") +
                "<br>GDP: $" + formatNumber("336,394,016,154"); 
            } else if(currentYear >= 1910){
                text.innerHTML =
                "NAME: German Empire" + 
                "<br>POPULATION: " + formatNumber("75,649,923") +
                "<br>GDP: $" + formatNumber("467,776,682,686"); 
            } else if(currentYear >= 1900){
                text.innerHTML =
                "NAME: German Empire" + 
                "<br>POPULATION: " + formatNumber("67,606,178") +
                "<br>GDP: $" + formatNumber("368,708,059,523"); 
            } else if(currentYear >= 1890){
                text.innerHTML =
                "NAME: German Empire" + 
                "<br>POPULATION: " + formatNumber("56,647,395") +
                "<br>GDP: $" + formatNumber("264,245,485,362"); 
            } else if(currentYear >= 1880){
                text.innerHTML =
                "NAME: German Empire" + 
                "<br>POPULATION: " + formatNumber("44,398,320") +
                "<br>GDP: $" + formatNumber("194,342,378,042"); 
            } else if(currentYear >= 1870){
                text.innerHTML =
                "NAME: North German Confederation" + 
                "<br>POPULATION: " + formatNumber("32,037,643") +
                "<br>GDP: $" + formatNumber("123,351,572,999"); 
            } else if(currentYear >= 1850){
                text.innerHTML =
                "NAME: Prussia" + 
                "<br>POPULATION: " + formatNumber("16,600,667") +
                "<br>GDP: $" + formatNumber("55,534,382,729"); 
            } else if(currentYear >= 1830){
                text.innerHTML =
                "NAME: Prussia" + 
                "<br>POPULATION: " + formatNumber("12,987,333") +
                "<br>GDP: $" + formatNumber("37,987,774,714"); 
            } else if(currentYear >= 1820){
                text.innerHTML =
                "NAME: Prussia" + 
                "<br>POPULATION: " + formatNumber("11,141,354") +
                "<br>GDP: $" + formatNumber("29,548,091,367"); 
            } else if(currentYear >= 1800){
                text.innerHTML =
                "NAME: Prussia" + 
                "<br>POPULATION: " + formatNumber("10,700,000") +
                "<br>GDP: $" + formatNumber("28,070,712,251"); 
            } else if(currentYear >= 1750){
                text.innerHTML =
                "NAME: Prussia" + 
                "<br>POPULATION: " + formatNumber("3,750,000") +
                "<br>GDP: $" + formatNumber("19,842,908,644"); 
            } else {
                text.innerHTML = 
                "Not Enough Data"
            }
        } else if(fillColor === Russia) {
            data.style.display = "flex"; 
            if(currentYear >= 2022){
                text.innerHTML =
                "NAME: Russia" + 
                "<br>POPULATION: " + formatNumber("146,424,729") +
                "<br>GDP: $" + formatNumber("4,592,088,000,000");
            } else if(currentYear >= 2020){
                text.innerHTML =
                "NAME: Russia" + 
                "<br>POPULATION: " + formatNumber("146,170,015") +
                "<br>GDP: $" + formatNumber("4,133,084,000,000");
            } else if(currentYear >= 2010){
                text.innerHTML =
                "NAME: Russia" + 
                "<br>POPULATION: " + formatNumber("142,849,472") +
                "<br>GDP: $" + formatNumber("3,841,533,017,375");
            } else if(currentYear >= 2000){
                text.innerHTML =
                "NAME: Russia" + 
                "<br>POPULATION: " + formatNumber("146,597,000") +
                "<br>GDP: $" + formatNumber("1,909,376,166,193");
            } else if(currentYear >= 1990){
                text.innerHTML =
                "NAME: Soviet Russia" + 
                "<br>POPULATION: " + formatNumber("284,572,329") +
                "<br>GDP: $" + formatNumber("3,864,344,745,781");
            } else if(currentYear >= 1980){
                text.innerHTML =
                "NAME: Soviet Russia" + 
                "<br>POPULATION: " + formatNumber("265,926,000") +
                "<br>GDP: $" + formatNumber("3,376,788,722,191");
            } else if(currentYear >= 1970){
                text.innerHTML =
                "NAME: Soviet Russia" + 
                "<br>POPULATION: " + formatNumber("241,720,134") +
                "<br>GDP: $" + formatNumber("2,670,605,721,145");
            } else if(currentYear >= 1960){
                text.innerHTML =
                "NAME: Soviet Russia" + 
                "<br>POPULATION: " + formatNumber("213,780,000") +
                "<br>GDP: $" + formatNumber("1,666,137,083,514");
            } else if(currentYear >= 1950){
                text.innerHTML =
                "NAME: Soviet Russia" + 
                "<br>POPULATION: " + formatNumber("181,304,750") +
                "<br>GDP: $" + formatNumber("989,441,960,131");
            } else if(currentYear >= 1940){
                text.innerHTML =
                "NAME: Soviet Russia" + 
                "<br>POPULATION: " + formatNumber("188,581,000") +
                "<br>GDP: $" + formatNumber("829,976,309,668");
            } else if(currentYear >= 1930){
                text.innerHTML =
                "NAME: Soviet Russia" + 
                "<br>POPULATION: " + formatNumber("168,832,000") +
                "<br>GDP: $" + formatNumber("498,362,087,131");
            } else if(currentYear >= 1920){
                text.innerHTML =
                "NAME: Soviet Russia" + 
                "<br>POPULATION: " + formatNumber("137,727,000") +
                "<br>GDP: $" + formatNumber("175,723,406,510");
            } else if(currentYear >= 1910){
                text.innerHTML =
                "NAME: Russian Empire" + 
                "<br>POPULATION: " + formatNumber("160,700,000") +
                "<br>GDP: $" + formatNumber("452,063,803,335");
            } else if(currentYear >= 1900){
                text.innerHTML =
                "NAME: Russian Empire" + 
                "<br>POPULATION: " + formatNumber("132,900,000") +
                "<br>GDP: $" + formatNumber("344,252,980,380");
            } else if(currentYear >= 1890){
                text.innerHTML =
                "NAME: Russian Empire" + 
                "<br>POPULATION: " + formatNumber("117,800,000") +
                "<br>GDP: $" + formatNumber("226,950,090,790");
            } else if(currentYear >= 1880){
                text.innerHTML =
                "NAME: Russian Empire" + 
                "<br>POPULATION: " + formatNumber("97,700,000") +
                "<br>GDP: $" + formatNumber("180,282,752,749");
            } else if(currentYear >= 1870){
                text.innerHTML =
                "NAME: Russian Empire" + 
                "<br>POPULATION: " + formatNumber("84,500,000") +
                "<br>GDP: $" + formatNumber("124,052,074,195");
            } else if(currentYear >= 1850){
                text.innerHTML =
                "NAME: Russian Empire" + 
                "<br>POPULATION: " + formatNumber("68,500,000") +
                "<br>GDP: $" + formatNumber("89,829,479,578");
            } else if(currentYear >= 1830){
                text.innerHTML =
                "NAME: Russian Empire" + 
                "<br>POPULATION: " + formatNumber("56,100,000") +
                "<br>GDP: $" + formatNumber("59,187,056,820");
            } else if(currentYear >= 1820){
                text.innerHTML =
                "NAME: Russian Empire" + 
                "<br>POPULATION: " + formatNumber("48,600,000") +
                "<br>GDP: $" + formatNumber("47,847,473,857");
            } else if(currentYear >= 1800){
                text.innerHTML =
                "NAME: Russian Empire" + 
                "<br>POPULATION: " + formatNumber("35,005,000") +
                "<br>GDP: $" + formatNumber("40,687,714,424");
            } else if(currentYear >= 1750){
                text.innerHTML =
                "NAME: Russian Empire" + 
                "<br>POPULATION: " + formatNumber("34,000,000") +
                "<br>GDP: $" + formatNumber("25,573,026,090");
            } else if(currentYear >= 1700){
                text.innerHTML =
                "NAME: Tsardom of Russia" + 
                "<br>POPULATION: " + formatNumber("13,616,000") +
                "<br>GDP: $" + formatNumber("22,211,525,717");
            } else if(currentYear >= 1650){
                text.innerHTML =
                "NAME: Tsardom of Russia" + 
                "<br>POPULATION: " + formatNumber("15,000,000") +
                "<br>GDP: $" + formatNumber("12,494,343,046");
            } else {
                text.innerHTML = 
                "Not Enough Data"
            }
        } else if(fillColor === Indonesia) {
            data.style.display = "flex"; 
            if(currentYear >= 2022){
                text.innerHTML =
                "NAME: Indonesia" + 
                "<br>POPULATION: " + formatNumber("275,501,339") +
                "<br>GDP: $" + formatNumber("3,794,845,000,000");
            } else if(currentYear >= 2020){
                text.innerHTML =
                "NAME: Indonesia" + 
                "<br>POPULATION: " + formatNumber("273,523,615") +
                "<br>GDP: $" + formatNumber("3,302,377,000,000");
            } else if(currentYear >= 2010){
                text.innerHTML =
                "NAME: Indonesia" + 
                "<br>POPULATION: " + formatNumber("237,641,326") +
                "<br>GDP: $" + formatNumber("2,498,445,382,605");
            } else if(currentYear >= 2000){
                text.innerHTML =
                "NAME: Indonesia" + 
                "<br>POPULATION: " + formatNumber("214,072,000") +
                "<br>GDP: $" + formatNumber("1,410,774,476,098");
            } else if(currentYear >= 1990){
                text.innerHTML =
                "NAME: Indonesia" + 
                "<br>POPULATION: " + formatNumber("182,918,000") +
                "<br>GDP: $" + formatNumber("890,607,735,939");
            } else if(currentYear >= 1980){
                text.innerHTML =
                "NAME: Indonesia" + 
                "<br>POPULATION: " + formatNumber("148,819,000") +
                "<br>GDP: $" + formatNumber("544,948,769,844");
            } else if(currentYear >= 1970){
                text.innerHTML =
                "NAME: Indonesia" + 
                "<br>POPULATION: " + formatNumber("115,228,000") +
                "<br>GDP: $" + formatNumber("273,709,219,021");
            } else if(currentYear >= 1960){
                text.innerHTML =
                "NAME: Indonesia" + 
                "<br>POPULATION: " + formatNumber("88,383,000") +
                "<br>GDP: $" + formatNumber("191,849,316,970");
            } else if(currentYear >= 1950){
                text.innerHTML =
                "NAME: Indonesia" + 
                "<br>POPULATION: " + formatNumber("69,543,321") +
                "<br>GDP: $" + formatNumber("131,064,245,251");
            } else if(currentYear >= 1500 && currentYear <= 1550){
                text.innerHTML =
                "NAME: Majapahit Empire" + 
                "<br>POPULATION: " + formatNumber("3,999,999") +
                "<br>GDP: $" + formatNumber("10,069,646,015");
            } else {
                text.innerHTML = 
                "Not Enough Data"
            }
        } else if(fillColor === Brazil) {
            data.style.display = "flex"; 
            if(currentYear >= 2022){
                text.innerHTML =
                "NAME: Brazil" + 
                "<br>POPULATION: " + formatNumber("215,313,498") +
                "<br>GDP: $" + formatNumber("3,491,092,000,000");
            } else if(currentYear >= 2020){
                text.innerHTML =
                "NAME: Brazil" + 
                "<br>POPULATION: " + formatNumber("212,559,417") +
                "<br>GDP: $" + formatNumber("3,153,597,000,000");
            } else if(currentYear >= 2010){
                text.innerHTML =
                "NAME: Brazil" + 
                "<br>POPULATION: " + formatNumber("193,252,604") +
                "<br>GDP: $" + formatNumber("3,491,283,227,609");
            } else if(currentYear >= 2000){
                text.innerHTML =
                "NAME: Brazil" + 
                "<br>POPULATION: " + formatNumber("169,544,443") +
                "<br>GDP: $" + formatNumber("2,149,728,337,631");
            } else if(currentYear >= 1990){
                text.innerHTML =
                "NAME: Brazil" + 
                "<br>POPULATION: " + formatNumber("151,170,000") +
                "<br>GDP: $" + formatNumber("146,934,431,1435");
            } else if(currentYear >= 1980){
                text.innerHTML =
                "NAME: Brazil" + 
                "<br>POPULATION: " + formatNumber("119,070,865") +
                "<br>GDP: $" + formatNumber("1,257,790,039,446");
            } else if(currentYear >= 1970){
                text.innerHTML =
                "NAME: Brazil" + 
                "<br>POPULATION: " + formatNumber("93,139,037") +
                "<br>GDP: $" + formatNumber("549,692,973,719");
            } else if(currentYear >= 1960){
                text.innerHTML =
                "NAME: Brazil" + 
                "<br>POPULATION: " + formatNumber("70,119,071") +
                "<br>GDP: $" + formatNumber("301,956,761,811");
            } else if(currentYear >= 1950){
                text.innerHTML =
                "NAME: Brazil" + 
                "<br>POPULATION: " + formatNumber("53,974,727") +
                "<br>GDP: $" + formatNumber("148,113,670,304");
            }  else if(currentYear >= 1940){
                text.innerHTML =
                "NAME: Brazil" + 
                "<br>POPULATION: " + formatNumber("41,165,289") +
                "<br>GDP: $" + formatNumber("82,044,245,088");
            }  else if(currentYear >= 1930){
                text.innerHTML =
                "NAME: Brazil" + 
                "<br>POPULATION: " + formatNumber("33,568,000") +
                "<br>GDP: $" + formatNumber("56,168,360,928");
            } else {
                text.innerHTML = 
                "Not Enough Data"
            }
        } else if(fillColor === France) {
            data.style.display = "flex"; 
            if(currentYear >= 2022){
                text.innerHTML =
                "NAME: France" + 
                "<br>POPULATION: " + formatNumber("67,651,021") +
                "<br>GDP: $" + formatNumber("3,444,471,000,000");
            } else if(currentYear >= 2020){
                text.innerHTML =
                "NAME: France" + 
                "<br>POPULATION: " + formatNumber("65,273,511") +
                "<br>GDP: $" + formatNumber("3,115,307,000,000");
            } else if(currentYear >= 2010){
                text.innerHTML =
                "NAME: France" + 
                "<br>POPULATION: " + formatNumber("62,791,013") +
                "<br>GDP: $" + formatNumber("2,901,968,845,554");
            } else if(currentYear >= 2000){
                text.innerHTML =
                "NAME: France" + 
                "<br>POPULATION: " + formatNumber("60,910,000") +
                "<br>GDP: $" + formatNumber("2,518,528,534,081");
            } else if(currentYear >= 1990){
                text.innerHTML =
                "NAME: France" + 
                "<br>POPULATION: " + formatNumber("58,240,000") +
                "<br>GDP: $" + formatNumber("2,028,007,466,423");
            } else if(currentYear >= 1980){
                text.innerHTML =
                "NAME: France" + 
                "<br>POPULATION: " + formatNumber("55,806,000") +
                "<br>GDP: $" + formatNumber("1,607,728,251,037");
            } else if(currentYear >= 1970){
                text.innerHTML =
                "NAME: France" + 
                "<br>POPULATION: " + formatNumber("52,555,000") +
                "<br>GDP: $" + formatNumber("1,170,617,166,979");
            } else if(currentYear >= 1960){
                text.innerHTML =
                "NAME: French Colonial Empire" + 
                "<br>POPULATION: " + formatNumber("100,324,000") +
                "<br>GDP: $" + formatNumber("772,361,923,886");
            } else if(currentYear >= 1950){
                text.innerHTML =
                "NAME: French Colonial Empire" + 
                "<br>POPULATION: " + formatNumber("136,541,842") +
                "<br>GDP: $" + formatNumber("592,805,412,735");
            } else if(currentYear >= 1940){
                text.innerHTML =
                "NAME: French Colonial Empire" + 
                "<br>POPULATION: " + formatNumber("118,643,771") +
                "<br>GDP: $" + formatNumber("467,589,996,359");
            } else if(currentYear >= 1930){
                text.innerHTML =
                "NAME: French Colonial Empire" + 
                "<br>POPULATION: " + formatNumber("108,392,503") +
                "<br>GDP: $" + formatNumber("489,068,617,947");
            } else if(currentYear >= 1920){
                text.innerHTML =
                "NAME: French Colonial Empire" + 
                "<br>POPULATION: " + formatNumber("95,822,892") +
                "<br>GDP: $" + formatNumber("342,252,761,963");
            } else if(currentYear >= 1910){
                text.innerHTML =
                "NAME: French Colonial Empire" + 
                "<br>POPULATION: " + formatNumber("84,694,614") +
                "<br>GDP: $" + formatNumber("301,936,785,879");
            } else if(currentYear >= 1900){
                text.innerHTML =
                "NAME: French Colonial Empire" + 
                "<br>POPULATION: " + formatNumber("76,185,004") +
                "<br>GDP: $" + formatNumber("281,158,278,682");
            } else if(currentYear >= 1890){
                text.innerHTML =
                "NAME: French Colonial Empire" + 
                "<br>POPULATION: " + formatNumber("66,939,690") +
                "<br>GDP: $" + formatNumber("221,205,708,010");
            } else if(currentYear >= 1880){
                text.innerHTML =
                "NAME: French Colonial Empire" + 
                "<br>POPULATION: " + formatNumber("47,800,592") +
                "<br>GDP: $" + formatNumber("181,436,823,708");
            } else if(currentYear >= 1870){
                text.innerHTML =
                "NAME: French Colonial Empire" + 
                "<br>POPULATION: " + formatNumber("46,511,720") +
                "<br>GDP: $" + formatNumber("156,639,151,773");
            } else if(currentYear >= 1850){
                text.innerHTML =
                "NAME: French Colonial Empire" + 
                "<br>POPULATION: " + formatNumber("41,269,057") +
                "<br>GDP: $" + formatNumber("120,434,690,437");
            } else if(currentYear >= 1830){
                text.innerHTML =
                "NAME: Kingdom of France" + 
                "<br>POPULATION: " + formatNumber("34,332,421") +
                "<br>GDP: $" + formatNumber("79,693,683,756");
            } else if(currentYear >= 1820){
                text.innerHTML =
                "NAME: Kingdom of France" + 
                "<br>POPULATION: " + formatNumber("32,706,624") +
                "<br>GDP: $" + formatNumber("71,387,202,648");
            } else if(currentYear >= 1800){
                text.innerHTML =
                "NAME: Revolutionary France" + 
                "<br>POPULATION: " + formatNumber("42,789,622") +
                "<br>GDP: $" + formatNumber("81,791,749,010");
            } else if(currentYear >= 1750){
                text.innerHTML =
                "NAME: Kingdom of France" +  
                "<br>POPULATION: " + formatNumber("47,830,251") +
                "<br>GDP: $" + formatNumber("83,481,804,177");
            } else if(currentYear >= 1700){
                text.innerHTML =
                "NAME: Kingdom of France" + 
                "<br>POPULATION: " + formatNumber("23,525,586") +
                "<br>GDP: $" + formatNumber("46,859,493,089");
            } else if(currentYear >= 1650){
                text.innerHTML =
                "NAME: Kingdom of France" + 
                "<br>POPULATION: " + formatNumber("20,211,025") +
                "<br>GDP: $" + formatNumber("41,401,232,299");
            } else if(currentYear >= 1600){
                text.innerHTML =
                "NAME: Kingdom of France" + 
                "<br>POPULATION: " + formatNumber("18,500,000") +
                "<br>GDP: $" + formatNumber("36,917,197,872");
            } else if(currentYear >= 1550){
                text.innerHTML =
                "NAME: Kingdom of France" + 
                "<br>POPULATION: " + formatNumber("16,000,000") +
                "<br>GDP: $" + formatNumber("30,933,723,884");
            } else if(currentYear >= 1500){
                text.innerHTML =
                "NAME: Kingdom of France" + 
                "<br>POPULATION: " + formatNumber("16,250,000") +
                "<br>GDP: $" + formatNumber("31,494,577,738");
            } else {
                text.innerHTML = 
                "Not Enough Data"
            }
        } else if(fillColor === United_Kingdom) {
            data.style.display = "flex"; 
            if(currentYear >= 2022){
                text.innerHTML =
                "NAME: United Kingdom" + 
                "<br>POPULATION: " + formatNumber("67,508,936") +
                "<br>GDP: $" + formatNumber("3,411,255,000,000");
            } else if(currentYear >= 2020){
                text.innerHTML =
                "NAME: United Kingdom" + 
                "<br>POPULATION: " + formatNumber("67,886,011") +
                "<br>GDP: $" + formatNumber("3,019,057,000,000");
            } else if(currentYear >= 2010){
                text.innerHTML =
                "NAME: United Kingdom" + 
                "<br>POPULATION: " + formatNumber("62,026,962") +
                "<br>GDP: $" + formatNumber("2,715,342,195,952");
            } else if(currentYear >= 2000){
                text.innerHTML =
                "NAME: United Kingdom" + 
                "<br>POPULATION: " + formatNumber("59,071,743") +
                "<br>GDP: $" + formatNumber("2,341,885,449,957");
            } else if(currentYear >= 1990){
                text.innerHTML =
                "NAME: United Kingdom" + 
                "<br>POPULATION: " + formatNumber("63,002,995") +
                "<br>GDP: $" + formatNumber("2,063,348,057,633");
            } else if(currentYear >= 1980){
                text.innerHTML =
                "NAME: United Kingdom" + 
                "<br>POPULATION: " + formatNumber("69,297,000") +
                "<br>GDP: $" + formatNumber("1,541,083,825,696");
            } else if(currentYear >= 1970){
                text.innerHTML =
                "NAME: United Kingdom" + 
                "<br>POPULATION: " + formatNumber("69,590,000") +
                "<br>GDP: $" + formatNumber("1,254,817,532,612");
            } else if(currentYear >= 1960){
                text.innerHTML =
                "NAME: British Empire" + 
                "<br>POPULATION: " + formatNumber("153,062,000") +
                "<br>GDP: $" + formatNumber("1097811490226");
            } else if(currentYear >= 1950){
                text.innerHTML =
                "NAME: British Empire" + 
                "<br>POPULATION: " + formatNumber("175,679,658") +
                "<br>GDP: $" + formatNumber("909,079,070,699");
            } else if(currentYear >= 1940){
                text.innerHTML =
                "NAME: British Empire" + 
                "<br>POPULATION: " + formatNumber("551,828,046") +
                "<br>GDP: $" + formatNumber("1,486,944,123,444");
            } else if(currentYear >= 1930){
                text.innerHTML =
                "NAME: British Empire" + 
                "<br>POPULATION: " + formatNumber("512,633,209") +
                "<br>GDP: $" + formatNumber("1,360,292,099,986");
            } else if(currentYear >= 1920){
                text.innerHTML =
                "NAME: British Empire" + 
                "<br>POPULATION: " + formatNumber("464,703,484") +
                "<br>GDP: $" + formatNumber("1,076,157,864,833");
            } else if(currentYear >= 1910){
                text.innerHTML =
                "NAME: British Empire" + 
                "<br>POPULATION: " + formatNumber("442,161,984") +
                "<br>GDP: $" + formatNumber("1,092,263,501,655");
            } else if(currentYear >= 1900){
                text.innerHTML =
                "NAME: British Empire" + 
                "<br>POPULATION: " + formatNumber("413,683,519") +
                "<br>GDP: $" + formatNumber("908,465,698,102");
            } else if(currentYear >= 1890){
                text.innerHTML =
                "NAME: British Empire" + 
                "<br>POPULATION: " + formatNumber("377,516,956") +
                "<br>GDP: $" + formatNumber("775,843,946,871");
            } else if(currentYear >= 1880){
                text.innerHTML =
                "NAME: British Empire" + 
                "<br>POPULATION: " + formatNumber("319,861,942") +
                "<br>GDP: $" + formatNumber("617,900,322,270");
            } else if(currentYear >= 1870){
                text.innerHTML =
                "NAME: British Empire" + 
                "<br>POPULATION: " + formatNumber("306,552,299") +
                "<br>GDP: $" + formatNumber("552,827,062,957");
            } else if(currentYear >= 1850){
                text.innerHTML =
                "NAME: British Empire" + 
                "<br>POPULATION: " + formatNumber("283,409,415") +
                "<br>GDP: $" + formatNumber("460,878,519,858");
            } else if(currentYear >= 1830){
                text.innerHTML =
                "NAME: British Empire" + 
                "<br>POPULATION: " + formatNumber("241,859,528") +
                "<br>GDP: $" + formatNumber("366,106,701,410");
            } else if(currentYear >= 1820){
                text.innerHTML =
                "NAME: British Empire" + 
                "<br>POPULATION: " + formatNumber("230,000,000") +
                "<br>GDP: $" + formatNumber("330,034,264,150");
            } else if(currentYear >= 1800){
                text.innerHTML =
                "NAME: British Empire" + 
                "<br>POPULATION: " + formatNumber("92,153,548") +
                "<br>GDP: $" + formatNumber("186,553,369,083");
            } else if(currentYear >= 1750){
                text.innerHTML =
                "NAME: British Empire" + 
                "<br>POPULATION: " + formatNumber("18,799,260") +
                "<br>GDP: $" + formatNumber("59,744,490,018");
            } else if(currentYear >= 1700){
                text.innerHTML =
                "NAME: England" + 
                "<br>POPULATION: " + formatNumber("9,302,239") +
                "<br>GDP: $" + formatNumber("31,334,145,846");
            } else if(currentYear >= 1650){
                text.innerHTML =
                "NAME: England" + 
                "<br>POPULATION: " + formatNumber("8,525,118") +
                "<br>GDP: $" + formatNumber("18,790,945,199");
            } else if(currentYear >= 1600){
                text.innerHTML =
                "NAME: England" + 
                "<br>POPULATION: " + formatNumber("5,600,000") +
                "<br>GDP: $" + formatNumber("17,519,186,331");
            } else if(currentYear >= 1550){
                text.innerHTML =
                "NAME: England" + 
                "<br>POPULATION: " + formatNumber("4,200,000") +
                "<br>GDP: $" + formatNumber("14,203,579,261");
            } else if(currentYear >= 1500){
                text.innerHTML =
                "NAME: England" + 
                "<br>POPULATION: " + formatNumber("2,750,000") +
                "<br>GDP: $" + formatNumber("8,291,432,837");
            } else {
                text.innerHTML = 
                "Not Enough Data"
            }
        } else if(fillColor === Turkey) {
            data.style.display = "flex"; 
            if(currentYear >= 2022){
                text.innerHTML =
                "NAME: Turkey" + 
                "<br>POPULATION: " + formatNumber("85,341,241") +
                "<br>GDP: $" + formatNumber("2,910,183,000,000");
            } else if(currentYear >= 2020){
                text.innerHTML =
                "NAME: Turkey" + 
                "<br>POPULATION: " + formatNumber("84,339,067") +
                "<br>GDP: $" + formatNumber("2,371,568,000,000");
            } else if(currentYear >= 2010){
                text.innerHTML =
                "NAME: Turkey" + 
                "<br>POPULATION: " + formatNumber("73,722,988") +
                "<br>GDP: $" + formatNumber("1,581,703,157,265");
            } else if(currentYear >= 2000){
                text.innerHTML =
                "NAME: Turkey" + 
                "<br>POPULATION: " + formatNumber("67,803,927") +
                "<br>GDP: $" + formatNumber("1,000,929,480,007");
            } else if(currentYear >= 1990){
                text.innerHTML =
                "NAME: Turkey" + 
                "<br>POPULATION: " + formatNumber("56,473,035") +
                "<br>GDP: $" + formatNumber("603,322,533,152");
            } else if(currentYear >= 1980){
                text.innerHTML =
                "NAME: Turkey" + 
                "<br>POPULATION: " + formatNumber("44,736,957") +
                "<br>GDP: $" + formatNumber("338,918,542,676");
            } else if(currentYear >= 1910 && currentYear <= 1919){
                text.innerHTML =
                "NAME: Ottoman Empire" + 
                "<br>POPULATION: " + formatNumber("20,891,662") +
                "<br>GDP: $" + formatNumber("46,544,886,678");
            } else if(currentYear >= 1900){
                text.innerHTML =
                "NAME: Ottoman Empire" + 
                "<br>POPULATION: " + formatNumber("19,413,491") +
                "<br>GDP: $" + formatNumber("41,612,155,717");
            } else if(currentYear >= 1890){
                text.innerHTML =
                "NAME: Ottoman Empire" + 
                "<br>POPULATION: " + formatNumber("15,948,170") +
                "<br>GDP: $" + formatNumber("38,965,734,406");
            } else if(currentYear >= 1880){
                text.innerHTML =
                "NAME: Ottoman Empire" + 
                "<br>POPULATION: " + formatNumber("18,604,531") +
                "<br>GDP: $" + formatNumber("36,100,266,184");
            } else if(currentYear >= 1870){
                text.innerHTML =
                "NAME: Ottoman Empire" + 
                "<br>POPULATION: " + formatNumber("25,334,882") +
                "<br>GDP: $" + formatNumber("37,358,358,049");
            } else if(currentYear >= 1850){
                text.innerHTML =
                "NAME: Ottoman Empire" + 
                "<br>POPULATION: " + formatNumber("29,038,013") +
                "<br>GDP: $" + formatNumber("49,283,733,673");
            } else if(currentYear >= 1830){
                text.innerHTML =
                "NAME: Ottoman Empire" + 
                "<br>POPULATION: " + formatNumber("28,270,270") +
                "<br>GDP: $" + formatNumber("36,869,258,429");
            } else if(currentYear >= 1820){
                text.innerHTML =
                "NAME: Ottoman Empire" + 
                "<br>POPULATION: " + formatNumber("29,418,355") +
                "<br>GDP: $" + formatNumber("37,653,112,080");
            } else if(currentYear >= 1800){
                text.innerHTML =
                "NAME: Ottoman Empire" + 
                "<br>POPULATION: " + formatNumber("26,000,000") +
                "<br>GDP: $" + formatNumber("36,083,523,604");
            } else if(currentYear >= 1750){
                text.innerHTML =
                "NAME: Ottoman Empire" + 
                "<br>POPULATION: " + formatNumber("34,556,183") +
                "<br>GDP: $" + formatNumber("38,463,814,740");
            } else if(currentYear >= 1700){
                text.innerHTML =
                "NAME: Ottoman Empire" + 
                "<br>POPULATION: " + formatNumber("27,519,000") +
                "<br>GDP: $" + formatNumber("33,021,118,042");
            } else if(currentYear >= 1650){
                text.innerHTML =
                "NAME: Ottoman Empire" + 
                "<br>POPULATION: " + formatNumber("30,379,242") +
                "<br>GDP: $" + formatNumber("34,686,158,596");
            } else if(currentYear >= 1600){
                text.innerHTML =
                "NAME: Ottoman Empire" + 
                "<br>POPULATION: " + formatNumber("29,644,500") +
                "<br>GDP: $" + formatNumber("34,619,798,176");
            } else if(currentYear >= 1550){
                text.innerHTML =
                "NAME: Ottoman Empire" + 
                "<br>POPULATION: " + formatNumber("26,948,500") +
                "<br>GDP: $" + formatNumber("29,427,328,955");
            } else if(currentYear >= 1500){
                text.innerHTML =
                "NAME: Ottoman Empire" + 
                "<br>POPULATION: " + formatNumber("12,640,000") +
                "<br>GDP: $" + formatNumber("338,918,542,676");
            } else {
                text.innerHTML = 
                "Not Enough Data"
            }
        } else if(fillColor === Italy) {
            data.style.display = "flex"; 
            if(currentYear >= 2022){
                text.innerHTML =
                "NAME: Italy" + 
                "<br>POPULATION: " + formatNumber("59,037,474") +
                "<br>GDP: $" + formatNumber("2,765,866,000,000");
            } else if(currentYear >= 2020){
                text.innerHTML =
                "NAME: Italy" + 
                "<br>POPULATION: " + formatNumber("60,461,826") +
                "<br>GDP: $" + formatNumber("2,491,740,000,000");
            } else if(currentYear >= 2010){
                text.innerHTML =
                "NAME: Italy" + 
                "<br>POPULATION: " + formatNumber("60,340,328") +
                "<br>GDP: $" + formatNumber("2,555,378,233,657");
            } else if(currentYear >= 2000){
                text.innerHTML =
                "NAME: Italy" + 
                "<br>POPULATION: " + formatNumber("56,940,000") +
                "<br>GDP: $" + formatNumber("2,310,044,384,765");
            } else if(currentYear >= 1990){
                text.innerHTML =
                "NAME: Italy" + 
                "<br>POPULATION: " + formatNumber("56,720,000") +
                "<br>GDP: $" + formatNumber("1,828,802,783,558");
            } else if(currentYear >= 1980){
                text.innerHTML =
                "NAME: Italy" + 
                "<br>POPULATION: " + formatNumber("56,430,000") +
                "<br>GDP: $" + formatNumber("1,466,470,470,259");
            } else if(currentYear >= 1970){
                text.innerHTML =
                "NAME: Italy" + 
                "<br>POPULATION: " + formatNumber("53,820,000") +
                "<br>GDP: $" + formatNumber("1,030,379,892,324");
            } else if(currentYear >= 1960){
                text.innerHTML =
                "NAME: Italy" + 
                "<br>POPULATION: " + formatNumber("49,699,946") +
                "<br>GDP: $" + formatNumber("586,717,756,375");
            } else if(currentYear >= 1950){
                text.innerHTML =
                "NAME: Italy" + 
                "<br>POPULATION: " + formatNumber("48,503,933") +
                "<br>GDP: $" + formatNumber("325,902,705,034");
            } else if(currentYear >= 1940){
                text.innerHTML =
                "NAME: Kingdom of Italy" + 
                "<br>POPULATION: " + formatNumber("65,391,132") +
                "<br>GDP: $" + formatNumber("298,071,393,255");
            } else if(currentYear >= 1930){
                text.innerHTML =
                "NAME: Kingdom of Italy" + 
                "<br>POPULATION: " + formatNumber("44,490,120") +
                "<br>GDP: $" + formatNumber("239,821,863,175");
            } else if(currentYear >= 1920){
                text.innerHTML =
                "NAME: Kingdom of Italy" + 
                "<br>POPULATION: " + formatNumber("38,680,800") +
                "<br>GDP: $" + formatNumber("179,725,677,056");
            } else if(currentYear >= 1910){
                text.innerHTML =
                "NAME: Kingdom of Italy" + 
                "<br>POPULATION: " + formatNumber("35,432,895") +
                "<br>GDP: $" + formatNumber("173,566,218,811");
            } else if(currentYear >= 1900){
                text.innerHTML =
                "NAME: Kingdom of Italy" + 
                "<br>POPULATION: " + formatNumber("35,189,616") +
                "<br>GDP: $" + formatNumber("136,222,920,708");
            } else if(currentYear >= 1890){
                text.innerHTML =
                "NAME: Kingdom of Italy" + 
                "<br>POPULATION: " + formatNumber("33,188,957") +
                "<br>GDP: $" + formatNumber("116,858,081,137");
            } else if(currentYear >= 1880){
                text.innerHTML =
                "NAME: Kingdom of Italy" + 
                "<br>POPULATION: " + formatNumber("29,534,000") +
                "<br>GDP: $" + formatNumber("102,350,639,967");
            } else if(currentYear >= 1870){
                text.innerHTML =
                "NAME: Kingdom of Italy" + 
                "<br>POPULATION: " + formatNumber("25,504,197") +
                "<br>GDP: $" + formatNumber("91,292,872,976");
            } else if(currentYear >= 1850){
                text.innerHTML =
                "NAME: Sardinia Piedmont" + 
                "<br>POPULATION: " + formatNumber("4,320,000") +
                "<br>GDP: $" + formatNumber("18,494,844,337");
            } else if(currentYear >= 1830){
                text.innerHTML =
                "NAME: Sardinia Piedmont" + 
                "<br>POPULATION: " + formatNumber("3,692,308") +
                "<br>GDP: $" + formatNumber("16,553,120,918");
            } else if(currentYear >= 1820){
                text.innerHTML =
                "NAME: Sardinia Piedmont" + 
                "<br>POPULATION: " + formatNumber("3,819,600") +
                "<br>GDP: $" + formatNumber("15,571,112,357");
            } else {
                text.innerHTML = 
                "Not Enough Data"
            }
        } else if(fillColor === Mexico) {
            data.style.display = "flex"; 
            if(currentYear >= 2022){
                text.innerHTML =
                "NAME: Mexico" + 
                "<br>POPULATION: " + formatNumber("127,504,126") +
                "<br>GDP: $" + formatNumber("2,753,202,000,000");
            } else if(currentYear >= 2020){
                text.innerHTML =
                "NAME: Mexico" + 
                "<br>POPULATION: " + formatNumber("128,932,753") +
                "<br>GDP: $" + formatNumber("2,428,201,000,000");
            } else if(currentYear >= 2010){
                text.innerHTML =
                "NAME: Mexico" + 
                "<br>POPULATION: " + formatNumber("112,336,538") +
                "<br>GDP: $" + formatNumber("2,029,895,317,848");
            } else if(currentYear >= 2000){
                text.innerHTML =
                "NAME: Mexico" + 
                "<br>POPULATION: " + formatNumber("97,483,412") +
                "<br>GDP: $" + formatNumber("1,538,359,576,947");
            } else if(currentYear >= 1990){
                text.innerHTML =
                "NAME: Mexico" + 
                "<br>POPULATION: " + formatNumber("81,249,645") +
                "<br>GDP: $" + formatNumber("1,020,792,295,864");
            } else if(currentYear >= 1980){
                text.innerHTML =
                "NAME: Mexico" + 
                "<br>POPULATION: " + formatNumber("66,846,833") +
                "<br>GDP: $" + formatNumber("841,116,383,061");
            } else if(currentYear >= 1970){
                text.innerHTML =
                "NAME: Mexico" + 
                "<br>POPULATION: " + formatNumber("48,225,238") +
                "<br>GDP: $" + formatNumber("449,578,683,029");
            } else if(currentYear >= 1960){
                text.innerHTML =
                "NAME: Mexico" + 
                "<br>POPULATION: " + formatNumber("34,923,129") +
                "<br>GDP: $" + formatNumber("225,839,569,173");
            } else if(currentYear >= 1950){
                text.innerHTML =
                "NAME: Mexico" + 
                "<br>POPULATION: " + formatNumber("25,791,017") +
                "<br>GDP: $" + formatNumber("123,923,726,664");
            } else if(currentYear >= 1940){
                text.innerHTML =
                "NAME: Mexico" + 
                "<br>POPULATION: " + formatNumber("19,763,000") +
                "<br>GDP: $" + formatNumber("64,707,140,692");
            } else if(currentYear >= 1920 && currentYear <= 1930){
                text.innerHTML =
                "NAME: Mexico" + 
                "<br>POPULATION: " + formatNumber("15,000,000") +
                "<br>GDP: $" + formatNumber("47,130,067,673,O18");
            } else if(currentYear >= 1910){
                text.innerHTML =
                "NAME: Mexico" + 
                "<br>POPULATION: " + formatNumber("13,607,272") +
                "<br>GDP: $" + formatNumber("41,645,722,629");
            } else if(currentYear >= 1900){
                text.innerHTML =
                "NAME: Mexico" + 
                "<br>POPULATION: " + formatNumber("11,729,000") +
                "<br>GDP: $" + formatNumber("30,728,536,888");
            } else if(currentYear >= 1890){
                text.innerHTML =
                "NAME: Mexico" + 
                "<br>POPULATION: " + formatNumber("10,399,000") +
                "<br>GDP: $" + formatNumber("22,794,925,100");
            } else if(currentYear >= 1880){
                text.innerHTML =
                "NAME: Mexico" + 
                "<br>POPULATION: " + formatNumber("9,219,000") +
                "<br>GDP: $" + formatNumber("16,846,057,964");
            } else if(currentYear >= 1870){
                text.innerHTML =
                "NAME: Mexico" + 
                "<br>POPULATION: " + formatNumber("9,219,000") +
                "<br>GDP: $" + formatNumber("11,952,166,223");
            } else if(currentYear >= 1500 && currentYear <= 1549){
                text.innerHTML =
                "NAME: Aztec Empire" + 
                "<br>POPULATION: " + formatNumber("6,000,000") +
                "<br>GDP: $" + formatNumber("5,486,150,415");
            } else {
                text.innerHTML = 
                "Not Enough Data"
            }
        } else if(fillColor === South_Korea) {
            data.style.display = "flex"; 
            if(currentYear >= 2022){
                text.innerHTML =
                "NAME: South Korea" + 
                "<br>POPULATION: " + formatNumber("51,628,117") +
                "<br>GDP: $" + formatNumber("2,561,887,000,000");
            } else if(currentYear >= 2020){
                text.innerHTML =
                "NAME: South Korea" + 
                "<br>POPULATION: " + formatNumber("51,836,239") +
                "<br>GDP: $" + formatNumber("2,233,001,000,000");
            } else if(currentYear >= 2010){
                text.innerHTML =
                "NAME: South Korea" + 
                "<br>POPULATION: " + formatNumber("49,410,366") +
                "<br>GDP: $" + formatNumber("1,937,064,090,625");
            } else if(currentYear >= 2000){
                text.innerHTML =
                "NAME: South Korea" + 
                "<br>POPULATION: " + formatNumber("47,258,111") +
                "<br>GDP: $" + formatNumber("1,346,372,578,722");
            } else if(currentYear >= 1700 && currentYear <= 1750){
                text.innerHTML =
                "NAME: Joseon Korea" + 
                "<br>POPULATION: " + formatNumber("12,200,000") +
                "<br>GDP: $" + formatNumber("10,577,751,441");
            } else if(currentYear >= 1600 && currentYear <= 1650){
                text.innerHTML =
                "NAME: Joseon Korea" + 
                "<br>POPULATION: " + formatNumber("11,000,000") +
                "<br>GDP: $" + formatNumber("9,142,837,058");
            } else if(currentYear >= 1550){
                text.innerHTML =
                "NAME: Joseon Korea" + 
                "<br>POPULATION: " + formatNumber("9,500,000") +
                "<br>GDP: $" + formatNumber("8,443,604,545");
            } else if(currentYear >= 1500){
                text.innerHTML =
                "NAME: Joseon Korea" + 
                "<br>POPULATION: " + formatNumber("8,000,000") +
                "<br>GDP: $" + formatNumber("7,744,372,031");
            } else {
                text.innerHTML = 
                "Not Enough Data"
            }
        } else if(fillColor === Canada) {
            data.style.display = "flex"; 
            if(currentYear >= 2022){
                text.innerHTML =
                "NAME: Canada" + 
                "<br>POPULATION: " + formatNumber("38,939,056") +
                "<br>GDP: $" + formatNumber("2,117,759,000,000");
            } else if(currentYear >= 2020){
                text.innerHTML =
                "NAME: Canada" + 
                "<br>POPULATION: " + formatNumber("38,028,638") +
                "<br>GDP: $" + formatNumber("1,827,010,000,000");
            } else if(currentYear >= 2010){
                text.innerHTML =
                "NAME: Canada" + 
                "<br>POPULATION: " + formatNumber("34,005,905") +
                "<br>GDP: $" + formatNumber("1,744,424,023,018");
            } else if(currentYear >= 2000){
                text.innerHTML =
                "NAME: Canada" + 
                "<br>POPULATION: " + formatNumber("30,685,730") +
                "<br>GDP: $" + formatNumber("1,411,361,255,654");
            } else if(currentYear >= 1990){
                text.innerHTML =
                "NAME: Canada" + 
                "<br>POPULATION: " + formatNumber("27,691,138") +
                "<br>GDP: $" + formatNumber("1,036,196,225,666");
            } else if(currentYear >= 1980){
                text.innerHTML =
                "NAME: Canada" + 
                "<br>POPULATION: " + formatNumber("24,515,667") +
                "<br>GDP: $" + formatNumber("785,946,396,687");
            } else if(currentYear >= 1970){
                text.innerHTML =
                "NAME: Canada" + 
                "<br>POPULATION: " + formatNumber("21,324,000") +
                "<br>GDP: $" + formatNumber("517,785,545,572");
            } else if(currentYear >= 1960){
                text.innerHTML =
                "NAME: Canada" + 
                "<br>POPULATION: " + formatNumber("17,909,000") +
                "<br>GDP: $" + formatNumber("315,889,231,482");
            } else if(currentYear >= 1950){
                text.innerHTML =
                "NAME: Canada" + 
                "<br>POPULATION: " + formatNumber("13,733,398") +
                "<br>GDP: $" + formatNumber("201,827,866,370");
            } else if(currentYear >= 1940){
                text.innerHTML =
                "NAME: Canada" + 
                "<br>POPULATION: " + formatNumber("11,382,000") +
                "<br>GDP: $" + formatNumber("123,963,223,170");
            } else {
                text.innerHTML = 
                "Not Enough Data"
            }
        } else if(fillColor === Nigeria) {
            data.style.display = "flex"; 
            if(currentYear >= 2022){
                text.innerHTML =
                "NAME: Nigeria" + 
                "<br>POPULATION: " + formatNumber("218,541,212") +
                "<br>GDP: $" + formatNumber("1,199,211,000,000");
            } else if(currentYear >= 2020){
                text.innerHTML =
                "NAME: Nigeria" + 
                "<br>POPULATION: " + formatNumber("206,139,589") +
                "<br>GDP: $" + formatNumber("1,069,189,000,000");
            } else if(currentYear >= 2010){
                text.innerHTML =
                "NAME: Nigeria" + 
                "<br>POPULATION: " + formatNumber("158,258,917") +
                "<br>GDP: $" + formatNumber("1,004,071,158,955");
            } else if(currentYear >= 2000){
                text.innerHTML =
                "NAME: Nigeria" + 
                "<br>POPULATION: " + formatNumber("121,235,000") +
                "<br>GDP: $" + formatNumber("332,366,369,077");
            } else if(currentYear >= 1990){
                text.innerHTML =
                "NAME: Nigeria" + 
                "<br>POPULATION: " + formatNumber("93,963,000") +
                "<br>GDP: $" + formatNumber("212,292,655,609");
            } else if(currentYear >= 1980){
                text.innerHTML =
                "NAME: Nigeria" + 
                "<br>POPULATION: " + formatNumber("71,828,000") +
                "<br>GDP: $" + formatNumber("192,893,666,509");
            } else if(currentYear >= 1970){
                text.innerHTML =
                "NAME: Nigeria" + 
                "<br>POPULATION: " + formatNumber("54,945,000") +
                "<br>GDP: $" + formatNumber("120,155,326,690");
            } else {
                text.innerHTML = 
                "Not Enough Data"
            }
        } else if(fillColor === South_Africa) {
            data.style.display = "flex"; 
            if(currentYear >= 2022){
                text.innerHTML =
                "NAME: South Africa" + 
                "<br>POPULATION: " + formatNumber("59,893,886") +
                "<br>GDP: $" + formatNumber("952,603,000,000");
            } else if(currentYear >= 2020){
                text.innerHTML =
                "NAME: South Africa" + 
                "<br>POPULATION: " + formatNumber("59,308,690") +
                "<br>GDP: $" + formatNumber("798,957,000,000");
            } else if(currentYear >= 2010){
                text.innerHTML =
                "NAME: South Africa" + 
                "<br>POPULATION: " + formatNumber("49,991,300") +
                "<br>GDP: $" + formatNumber("716,720,101,390");
            } else if(currentYear >= 2000){
                text.innerHTML =
                "NAME: South Africa" + 
                "<br>POPULATION: " + formatNumber("44,968,000") +
                "<br>GDP: $" + formatNumber("421,836,720,793");
            } else if(currentYear >= 1990){
                text.innerHTML =
                "NAME: South Africa" + 
                "<br>POPULATION: " + formatNumber("36,793,490") +
                "<br>GDP: $" + formatNumber("291,429,374,843");
            } else if(currentYear >= 1980){
                text.innerHTML =
                "NAME: South Africa" + 
                "<br>POPULATION: " + formatNumber("30,090,143") +
                "<br>GDP: $" + formatNumber("261,975,752,336");
            } else if(currentYear >= 1970){
                text.innerHTML =
                "NAME: South Africa" + 
                "<br>POPULATION: " + formatNumber("23,263,512") +
                "<br>GDP: $" + formatNumber("187,582,969,255");
            } else {
                text.innerHTML = 
                "Not Enough Data"
            }
        } else if(fillColor === Ethiopia) {
            data.style.display = "flex"; 
            if(currentYear >= 2022){
                text.innerHTML =
                "NAME: Ethiopia" + 
                "<br>POPULATION: " + formatNumber("23,263,512") +
                "<br>GDP: $" + formatNumber("346,893,000,000");
            } else if(currentYear >= 2020){
                text.innerHTML =
                "NAME: Ethiopia" + 
                "<br>POPULATION: " + formatNumber("114,963,588") +
                "<br>GDP: $" + formatNumber("282,904,000,000");
            } else if(currentYear >= 2010){
                text.innerHTML =
                "NAME: Ethiopia" + 
                "<br>POPULATION: " + formatNumber("83,483,000") +
                "<br>GDP: $" + formatNumber("116,652,861,923");
            } else if(currentYear >= 2000){
                text.innerHTML =
                "NAME: Ethiopia" + 
                "<br>POPULATION: " + formatNumber("67,032,000") +
                "<br>GDP: $" + formatNumber("62,399,714,809");
            } else if(currentYear >= 1990){
                text.innerHTML =
                "NAME: Ethiopia" + 
                "<br>POPULATION: " + formatNumber("51,666,622") +
                "<br>GDP: $" + formatNumber("55,813,709,019");
            } else if(currentYear >= 1980){
                text.innerHTML =
                "NAME: Ethiopia" + 
                "<br>POPULATION: " + formatNumber("36,602,982") +
                "<br>GDP: $" + formatNumber("47,201,680,964");
            } else if(currentYear >= 1880 && currentYear <= 1890){
                text.innerHTML =
                "NAME: Ethiopian Empire" + 
                "<br>POPULATION: " + formatNumber("6,830,000") +
                "<br>GDP: $" + formatNumber("3,133,870,326");
            } else if(currentYear >= 1870){
                text.innerHTML =
                "NAME: Ethiopian Empire" + 
                "<br>POPULATION: " + formatNumber("5,960,000") +
                "<br>GDP: $" + formatNumber("2,852,574,759");
            } else if(currentYear >= 1850){
                text.innerHTML =
                "NAME: Ethiopian Empire" + 
                "<br>POPULATION: " + formatNumber("4,520,000") +
                "<br>GDP: $" + formatNumber("2,648,819,419");
            } else if(currentYear >= 1830){
                text.innerHTML =
                "NAME: Ethiopian Empire" + 
                "<br>POPULATION: " + formatNumber("3,410,000") +
                "<br>GDP: $" + formatNumber("2,512,982,526");
            } else if(currentYear >= 1820){
                text.innerHTML =
                "NAME: Ethiopian Empire" + 
                "<br>POPULATION: " + formatNumber("3,154,000") +
                "<br>GDP: $" + formatNumber("2,445,064,079");
            } else if(currentYear >= 1800){
                text.innerHTML =
                "NAME: Ethiopian Empire" + 
                "<br>POPULATION: " + formatNumber("2,950,000") +
                "<br>GDP: $" + formatNumber("2,373,509,239");
            } else if(currentYear >= 1750){
                text.innerHTML =
                "NAME: Ethiopian Empire" + 
                "<br>POPULATION: " + formatNumber("2,644,000") +
                "<br>GDP: $" + formatNumber("2,194,622,139");
            } else if(currentYear >= 1700){
                text.innerHTML =
                "NAME: Ethiopian Empire" + 
                "<br>POPULATION: " + formatNumber("2,338,000") +
                "<br>GDP: $" + formatNumber("2,015,735,038");
            } else if(currentYear >= 1650){
                text.innerHTML =
                "NAME: Ethiopian Empire" + 
                "<br>POPULATION: " + formatNumber("2,221,000") +
                "<br>GDP: $" + formatNumber("1,925,685,422");
            } else if(currentYear >= 1600){
                text.innerHTML =
                "NAME: Ethiopian Empire" + 
                "<br>POPULATION: " + formatNumber("2,104,000") +
                "<br>GDP: $" + formatNumber("1,835,635,807");
            } else if(currentYear >= 1550){
                text.innerHTML =
                "NAME: Ethiopian Empire" + 
                "<br>POPULATION: " + formatNumber("1,987,000") +
                "<br>GDP: $" + formatNumber("1,675,712,694");
            } else if(currentYear >= 1500){
                text.innerHTML =
                "NAME: Ethiopian Empire" + 
                "<br>POPULATION: " + formatNumber("1,870,000") +
                "<br>GDP: $" + formatNumber("1,515,789,581");
            } else {
                text.innerHTML = 
                "Not Enough Data"
            }
        } else if(fillColor === DR_Congo) {
            data.style.display = "flex"; 
            if(currentYear >= 2022){
                text.innerHTML =
                "NAME: DR Congo" + 
                "<br>POPULATION: " + formatNumber("99,010,212") +
                "<br>GDP: $" + formatNumber("120,533,000,000");
            } else if(currentYear >= 2020){
                text.innerHTML =
                "NAME: DR Congo" + 
                "<br>POPULATION: " + formatNumber("89,561,403") +
                "<br>GDP: $" + formatNumber("101,302,000,000");
            } else if(currentYear >= 2010){
                text.innerHTML =
                "NAME: DR Congo" + 
                "<br>POPULATION: " + formatNumber("67,827,496") +
                "<br>GDP: $" + formatNumber("57,280,654,809");
            } else if(currentYear >= 2000){
                text.innerHTML =
                "NAME: DR Congo" + 
                "<br>POPULATION: " + formatNumber("48,616,317") +
                "<br>GDP: $" + formatNumber("27,084,280,838");
            } else if(currentYear >= 1990){
                text.innerHTML =
                "NAME: Zaire" + 
                "<br>POPULATION: " + formatNumber("35,987,541") +
                "<br>GDP: $" + formatNumber("39,346,793,218");
            } else if(currentYear >= 1980){
                text.innerHTML =
                "NAME: Zaire" + 
                "<br>POPULATION: " + formatNumber("26,708,686") +
                "<br>GDP: $" + formatNumber("34,270,201,939");
            } else if(currentYear >= 1970){
                text.innerHTML =
                "NAME: DR Congo" + 
                "<br>POPULATION: " + formatNumber("20,151,733") +
                "<br>GDP: $" + formatNumber("33,043,828,367");
            } else if(currentYear >= 1750){
                text.innerHTML =
                "NAME: Kongo" + 
                "<br>POPULATION: " + formatNumber("3,430,000") +
                "<br>GDP: $" + formatNumber("950,598,224");
            } else if(currentYear >= 1700){
                text.innerHTML =
                "NAME: Kongo" + 
                "<br>POPULATION: " + formatNumber("3,310,000") +
                "<br>GDP: $" + formatNumber("873,113,469");
            } else if(currentYear >= 1650){
                text.innerHTML =
                "NAME: Kongo" + 
                "<br>POPULATION: " + formatNumber("790,000") +
                "<br>GDP: $" + formatNumber("834,108,574");
            } else if(currentYear >= 1600){
                text.innerHTML =
                "NAME: Kongo" + 
                "<br>POPULATION: " + formatNumber("767,919") +
                "<br>GDP: $" + formatNumber("795,103,680");
            } else if(currentYear >= 1550){
                text.innerHTML =
                "NAME: Kongo" + 
                "<br>POPULATION: " + formatNumber("12,587") +
                "<br>GDP: $" + formatNumber("725,833,155");
            } else if(currentYear >= 1500){
                text.innerHTML =
                "NAME: Kongo" + 
                "<br>POPULATION: " + formatNumber("12,204") +
                "<br>GDP: $" + formatNumber("656,562,631");
            } else {
                text.innerHTML = 
                "Not Enough Data"
            }
        } else if(fillColor === Australia) {
            data.style.display = "flex"; 
            if(currentYear >= 2022){
                text.innerHTML =
                "NAME: Australia" + 
                "<br>POPULATION: " + formatNumber("26,268,359") +
                "<br>GDP: $" + formatNumber("1,527,230,000,000");
            } else if(currentYear >= 2020){
                text.innerHTML =
                "NAME: Australia" + 
                "<br>POPULATION: " + formatNumber("25,694,400") +
                "<br>GDP: $" + formatNumber("1,349,040,000,000");
            } else if(currentYear >= 2010){
                text.innerHTML =
                "NAME: Australia" + 
                "<br>POPULATION: " + formatNumber("22,031,900") +
                "<br>GDP: $" + formatNumber("1,232,116,467,799");
            } else if(currentYear >= 2000){
                text.innerHTML =
                "NAME: Australia" + 
                "<br>POPULATION: " + formatNumber("19,153,400") +
                "<br>GDP: $" + formatNumber("857,542,327,403");
            } else if(currentYear >= 1990){
                text.innerHTML =
                "NAME: Australia" + 
                "<br>POPULATION: " + formatNumber("17,065,100") +
                "<br>GDP: $" + formatNumber("575,276,893,033");
            } else if(currentYear >= 1980){
                text.innerHTML =
                "NAME: Australia" + 
                "<br>POPULATION: " + formatNumber("14,695,400") +
                "<br>GDP: $" + formatNumber("416,158,210,003");
            } else if(currentYear >= 1970){
                text.innerHTML =
                "NAME: Australia" + 
                "<br>POPULATION: " + formatNumber("12,407,000") +
                "<br>GDP: $" + formatNumber("300,743,544,823");
            } else if(currentYear >= 1950 && currentYear <= 1960){
                text.innerHTML =
                "NAME: Australia" + 
                "<br>POPULATION: " + formatNumber("8,045,000") +
                "<br>GDP: $" + formatNumber("121,063,378,207");
            } else {
                text.innerHTML = 
                "Not Enough Data"
            }
        } else if(fillColor === Kazakhstan) {
            data.style.display = "flex"; 
            if(currentYear >= 2022){
                text.innerHTML =
                "NAME: Kazakhstan" + 
                "<br>POPULATION: " + formatNumber("19,765,004") +
                "<br>GDP: $" + formatNumber("604,551,000,000");
            } else if(currentYear >= 2020){
                text.innerHTML =
                "NAME: Kazakhstan" + 
                "<br>POPULATION: " + formatNumber("18,632,000") +
                "<br>GDP: $" + formatNumber("501,798,000,000");
            } else if(currentYear >= 2010){
                text.innerHTML =
                "NAME: Kazakhstan" + 
                "<br>POPULATION: " + formatNumber("16,322,000") +
                "<br>GDP: $" + formatNumber("413,278,597,920");
            } else if(currentYear >= 2000){
                text.innerHTML =
                "NAME: Kazakhstan" + 
                "<br>POPULATION: " + formatNumber("14,915,000") +
                "<br>GDP: $" + formatNumber("176,936,705,060");
            } else {
                text.innerHTML = 
                "Not Enough Data"
            }
        } else if(fillColor === Spain) {
            data.style.display = "flex"; 
            if(currentYear >= 2000){
                text.innerHTML =
                "NAME: Spain" + 
                "<br>POPULATION: " + formatNumber("40,264,000") +
                "<br>GDP: $" + formatNumber("1,374,232,793,741");
            } else if(currentYear >= 1990){
                text.innerHTML =
                "NAME: Spain" + 
                "<br>POPULATION: " + formatNumber("38,851,000") +
                "<br>GDP: $" + formatNumber("937,189,225,331");
            } else if(currentYear >= 1980){
                text.innerHTML =
                "NAME: Spain" + 
                "<br>POPULATION: " + formatNumber("37,527,000") +
                "<br>GDP: $" + formatNumber("650,877,905,289");
            } else if(currentYear >= 1970){
                text.innerHTML =
                "NAME: Francoist Spain" + 
                "<br>POPULATION: " + formatNumber("34,032,921") +
                "<br>GDP: $" + formatNumber("399,346,084,627");
            } else if(currentYear >= 1940){
                text.innerHTML =
                "NAME: Francoist Spain" + 
                "<br>POPULATION: " + formatNumber("27,379,420") +
                "<br>GDP: $" + formatNumber("101,677,950,775");
            } else if(currentYear >= 1930){
                text.innerHTML =
                "NAME: Spain" + 
                "<br>POPULATION: " + formatNumber("24,843,165") +
                "<br>GDP: $" + formatNumber("114,374,201,852");
            } else if(currentYear >= 1920){
                text.innerHTML =
                "NAME: Spain" + 
                "<br>POPULATION: " + formatNumber("22,331,231") +
                "<br>GDP: $" + formatNumber("85,653,951,933");
            } else if(currentYear >= 1910){
                text.innerHTML =
                "NAME: Spain" + 
                "<br>POPULATION: " + formatNumber("20,330,559") +
                "<br>GDP: $" + formatNumber("69,715,653,705");
            } else if(currentYear >= 1900){
                text.innerHTML =
                "NAME: Spain" + 
                "<br>POPULATION: " + formatNumber("18,815,630") +
                "<br>GDP: $" + formatNumber("61,787,853,621");
            } else if(currentYear >= 1890){
                text.innerHTML =
                "NAME: Spanish Empire" + 
                "<br>POPULATION: " + formatNumber("26,857,900") +
                "<br>GDP: $" + formatNumber("67,365,929,526");
            } else if(currentYear >= 1880){
                text.innerHTML =
                "NAME: Spanish Empire" + 
                "<br>POPULATION: " + formatNumber("24,310,704") +
                "<br>GDP: $" + formatNumber("63,447,944,597");
            } else if(currentYear >= 1870){
                text.innerHTML =
                "NAME: Spanish Empire" + 
                "<br>POPULATION: " + formatNumber("23,386,970") +
                "<br>GDP: $" + formatNumber("45,420,476,309");
            } else if(currentYear >= 1850){
                text.innerHTML =
                "NAME: Spanish Empire" + 
                "<br>POPULATION: " + formatNumber("22,319,372") +
                "<br>GDP: $" + formatNumber("37,794,331,556");
            } else if(currentYear >= 1830){
                text.innerHTML =
                "NAME: Spanish Empire" + 
                "<br>POPULATION: " + formatNumber("16,742,947") +
                "<br>GDP: $" + formatNumber("31,694,563,777");
            } else if(currentYear >= 1820){
                text.innerHTML =
                "NAME: Spanish Empire" + 
                "<br>POPULATION: " + formatNumber("26,815,697") +
                "<br>GDP: $" + formatNumber("39,931,088,068");
            } else if(currentYear >= 1800){
                text.innerHTML =
                "NAME: Spanish Empire" + 
                "<br>POPULATION: " + formatNumber("26,580,300") +
                "<br>GDP: $" + formatNumber("53,646,182,394");
            } else if(currentYear >= 1750){
                text.innerHTML =
                "NAME: Spanish Empire" + 
                "<br>POPULATION: " + formatNumber("22,402,347") +
                "<br>GDP: $" + formatNumber("38,842,843,999");
            } else if(currentYear >= 1700){
                text.innerHTML =
                "NAME: Spanish Empire" + 
                "<br>POPULATION: " + formatNumber("24,530,000") +
                "<br>GDP: $" + formatNumber("56,995,384,657");
            } else if(currentYear >= 1650){
                text.innerHTML =
                "NAME: Spanish Empire" + 
                "<br>POPULATION: " + formatNumber("26,408,500") +
                "<br>GDP: $" + formatNumber("50,690,979,215");
            } else if(currentYear >= 1600){
                text.innerHTML =
                "NAME: Spanish Empire" + 
                "<br>POPULATION: " + formatNumber("33,521,043") +
                "<br>GDP: $" + formatNumber("55,884,941,719");
            } else if(currentYear >= 1550){
                text.innerHTML =
                "NAME: Spanish Empire" + 
                "<br>POPULATION: " + formatNumber("26,510,177") +
                "<br>GDP: $" + formatNumber("39,990,387,586");
            } else if(currentYear >= 1500){
                text.innerHTML =
                "NAME: Castile" + 
                "<br>POPULATION: " + formatNumber("7,294,000") +
                "<br>GDP: $" + formatNumber("12,358,486,896");
            } else {
                text.innerHTML = 
                "Not Enough Data"
            }
        } else if(fillColor === East_Germany) {
            data.style.display = "flex"; 
            if(currentYear >= 1990){
                text.innerHTML =
                "NAME: East Germany" + 
                "<br>POPULATION: " + formatNumber("16,111,000") +
                "<br>GDP: $" + formatNumber("953,317,680,843");
            } else if(currentYear >= 1980){
                text.innerHTML =
                "NAME: East Germany" + 
                "<br>POPULATION: " + formatNumber("16,740,000") +
                "<br>GDP: $" + formatNumber("833,147,748,268");
            } else if(currentYear >= 1970){
                text.innerHTML =
                "NAME: East Germany" + 
                "<br>POPULATION: " + formatNumber("17,068,318") +
                "<br>GDP: $" + formatNumber("635,623,243,856");
            } else if(currentYear >= 1960){
                text.innerHTML =
                "NAME: East Germany" + 
                "<br>POPULATION: " + formatNumber("17,188,000") +
                "<br>GDP: $" + formatNumber("421,056,152,181");
            } else if(currentYear >= 1950){
                text.innerHTML =
                "NAME: East Germany" + 
                "<br>POPULATION: " + formatNumber("18,388,172") +
                "<br>GDP: $" + formatNumber("200,057,115,532");
            } else {
                text.innerHTML = 
                "Not Enough Data"
            }
        } else if(fillColor === Algeria) {
            data.style.display = "flex"; 
            if(currentYear >= 1990){
                text.innerHTML =
                "NAME: Algeria" + 
                "<br>POPULATION: " + formatNumber("25,022,000") +
                "<br>GDP: $" + formatNumber("146,061,257,920");
            } else if(currentYear >= 1980){
                text.innerHTML =
                "NAME: Algeria" + 
                "<br>POPULATION: " + formatNumber("19,475,000") +
                "<br>GDP: $" + formatNumber("117,105,471,603");
            } else if(currentYear >= 1970){
                text.innerHTML =
                "NAME: Algeria" + 
                "<br>POPULATION: " + formatNumber("14,691,000") +
                "<br>GDP: $" + formatNumber("61,906,143,586");
            } else {
                text.innerHTML = 
                "Not Enough Data"
            }
        } else if(fillColor === Argentina) {
            data.style.display = "flex"; 
            if(currentYear >= 1970){
                text.innerHTML =
                "NAME: Argentina" + 
                "<br>POPULATION: " + formatNumber("23,983,000") +
                "<br>GDP: $" + formatNumber("345,676,500,680");
            } else if(currentYear >= 1960){
                text.innerHTML =
                "NAME: Argentina" + 
                "<br>POPULATION: " + formatNumber("20,625,000") +
                "<br>GDP: $" + formatNumber("226,421,814,799");
            } else if(currentYear >= 1950){
                text.innerHTML =
                "NAME: Argentina" + 
                "<br>POPULATION: " + formatNumber("17,150,000") +
                "<br>GDP: $" + formatNumber("168,969,277,185");
            } else if(currentYear >= 1940){
                text.innerHTML =
                "NAME: Argentina" + 
                "<br>POPULATION: " + formatNumber("14,591,000") +
                "<br>GDP: $" + formatNumber("116,487,767,619");
            } else if(currentYear >= 1930){
                text.innerHTML =
                "NAME: Argentina" + 
                "<br>POPULATION: " + formatNumber("12,050,000") +
                "<br>GDP: $" + formatNumber("95,883,931,819");
            } else if(currentYear >= 1920){
                text.innerHTML =
                "NAME: Argentina" + 
                "<br>POPULATION: " + formatNumber("8,970,000") +
                "<br>GDP: $" + formatNumber("60,800,890,897");
            } else if(currentYear >= 1910 && currentYear <= 1919){
                text.innerHTML =
                "NAME: Argentina" + 
                "<br>POPULATION: " + formatNumber("6,800,000") +
                "<br>GDP: $" + formatNumber("51,617,037,323");
            } else {
                text.innerHTML = 
                "Not Enough Data"
            }
        } else if(fillColor === Dutch_Empire) {
            data.style.display = "flex"; 
            if(currentYear >= 1940){
                text.innerHTML =
                "NAME: Dutch Empire" + 
                "<br>POPULATION: " + formatNumber("61,800,000") +
                "<br>GDP: $" + formatNumber("162,800,090,542");
            } else if(currentYear >= 1930){
                text.innerHTML =
                "NAME: Dutch Empire" + 
                "<br>POPULATION: " + formatNumber("68,823,600") +
                "<br>GDP: $" + formatNumber("217,806,787,261");
            } else if(currentYear >= 1920){
                text.innerHTML =
                "NAME: Dutch Empire" + 
                "<br>POPULATION: " + formatNumber("59,804,000") +
                "<br>GDP: $" + formatNumber("153,136,816,616");
            } else if(currentYear >= 1910){
                text.innerHTML =
                "NAME: Dutch Empire" + 
                "<br>POPULATION: " + formatNumber("53,327,000") +
                "<br>GDP: $" + formatNumber("122,647,441,437");
            } else if(currentYear >= 1900){
                text.innerHTML =
                "NAME: Dutch Empire" + 
                "<br>POPULATION: " + formatNumber("50,333,900") +
                "<br>GDP: $" + formatNumber("98,156,925,587");
            } else if(currentYear >= 1890){
                text.innerHTML =
                "NAME: Dutch Empire" + 
                "<br>POPULATION: " + formatNumber("45,145,855") +
                "<br>GDP: $" + formatNumber("80,287,859,065");
            } else if(currentYear >= 1880){
                text.innerHTML =
                "NAME: Dutch Empire" + 
                "<br>POPULATION: " + formatNumber("40,321,750") +
                "<br>GDP: $" + formatNumber("70,093,669,105");
            } else if(currentYear >= 1870){
                text.innerHTML =
                "NAME: Dutch Empire" + 
                "<br>POPULATION: " + formatNumber("36,407,600") +
                "<br>GDP: $" + formatNumber("52,658,599,325");
            } else if(currentYear >= 1850){
                text.innerHTML =
                "NAME: Dutch Empire" + 
                "<br>POPULATION: " + formatNumber("26,137,987") +
                "<br>GDP: $" + formatNumber("35,129,518,045");
            } else if(currentYear >= 1830){
                text.innerHTML =
                "NAME: Dutch Empire" + 
                "<br>POPULATION: " + formatNumber("26,962,232") +
                "<br>GDP: $" + formatNumber("41,325,483,421");
            } else if(currentYear >= 1820){
                text.innerHTML =
                "NAME: Dutch Empire" + 
                "<br>POPULATION: " + formatNumber("24,575,730") +
                "<br>GDP: $" + formatNumber("37,495,774,708");
            } else if(currentYear >= 1800){
                text.innerHTML =
                "NAME: Dutch Empire" + 
                "<br>POPULATION: " + formatNumber("10,411,728") +
                "<br>GDP: $" + formatNumber("38,385,301,146");
            } else if(currentYear >= 1750){
                text.innerHTML =
                "NAME: Dutch Empire" + 
                "<br>POPULATION: " + formatNumber("12,359,544") +
                "<br>GDP: $" + formatNumber("22,917,053,106");
            } else if(currentYear >= 1700){
                text.innerHTML =
                "NAME: Dutch Empire" + 
                "<br>POPULATION: " + formatNumber("10,811,411") +
                "<br>GDP: $" + formatNumber("19,525,694,013");
            } else if(currentYear >= 1650){
                text.innerHTML =
                "NAME: Dutch Empire" + 
                "<br>POPULATION: " + formatNumber("8,859,500") +
                "<br>GDP: $" + formatNumber("17,494,833,100");
            } else {
                text.innerHTML = 
                "Not Enough Data"
            }
        } else if(fillColor === Sweden) {
            data.style.display = "flex"; 
            if(currentYear >= 1940 && currentYear <= 1950){
                text.innerHTML =
                "NAME: Sweden" + 
                "<br>POPULATION: " + formatNumber("6,356,000") +
                "<br>GDP: $" + formatNumber("60,967,706,805");
            } else if(currentYear >= 1900 && currentYear <= 1910){
                text.innerHTML =
                "NAME: Sweden-Norway" + 
                "<br>POPULATION: " + formatNumber("7,379,436") +
                "<br>GDP: $" + formatNumber("30,036,617,996");
            } else if(currentYear >= 1890){
                text.innerHTML =
                "NAME: Sweden-Norway" + 
                "<br>POPULATION: " + formatNumber("6,777,000") +
                "<br>GDP: $" + formatNumber("22,293,318,484");
            } else if(currentYear >= 1880){
                text.innerHTML =
                "NAME: Sweden-Norway" + 
                "<br>POPULATION: " + formatNumber("6,491,000") +
                "<br>GDP: $" + formatNumber("19,321,390,476");
            } else if(currentYear >= 1870){
                text.innerHTML =
                "NAME: Sweden-Norway" + 
                "<br>POPULATION: " + formatNumber("5,901,665") +
                "<br>GDP: $" + formatNumber("15,746,930,666");
            } else if(currentYear >= 1850){
                text.innerHTML =
                "NAME: Sweden-Norway" + 
                "<br>POPULATION: " + formatNumber("4,856,703") +
                "<br>GDP: $" + formatNumber("10,159,258,370");
            } else {
                text.innerHTML = 
                "Not Enough Data"
            }
        } else if(fillColor === Poland) {
            data.style.display = "flex"; 
            if(currentYear >= 1930 && currentYear <= 1940){
                text.innerHTML =
                "NAME: Poland" + 
                "<br>POPULATION: " + formatNumber("31,490,000") +
                "<br>GDP: $" + formatNumber("111,095,309,648");
            } else if(currentYear >= 1920){
                text.innerHTML =
                "NAME: Poland" + 
                "<br>POPULATION: " + formatNumber("24,847,350") +
                "<br>GDP: $" + formatNumber("89,121,846,426");
            } else if(currentYear >= 1700 && currentYear <= 1750){
                text.innerHTML =
                "NAME: Poland-Lithuania" + 
                "<br>POPULATION: " + formatNumber("8,000,000") +
                "<br>GDP: $" + formatNumber("9,828,875,903");
            } else if(currentYear >= 1650){
                text.innerHTML =
                "NAME: Poland-Lithuania" + 
                "<br>POPULATION: " + formatNumber("10,406,623") +
                "<br>GDP: $" + formatNumber("10,635,053,062");
            } else if(currentYear >= 1600){
                text.innerHTML =
                "NAME: Poland-Lithuania" + 
                "<br>POPULATION: " + formatNumber("7,950,000") +
                "<br>GDP: $" + formatNumber("10,561,034,042");
            } else {
                text.innerHTML = 
                "Not Enough Data"
            }
        } else if(fillColor === Belgium) {
            data.style.display = "flex"; 
            if(currentYear >= 1930 && currentYear <= 1940){
                text.innerHTML =
                "NAME: Belgian Empire" + 
                "<br>POPULATION: " + formatNumber("22,256,000") +
                "<br>GDP: $" + formatNumber("90,466,583,402");
            } else if(currentYear >= 1920){
                text.innerHTML =
                "NAME: Belgian Empire" + 
                "<br>POPULATION: " + formatNumber("20,610,000") +
                "<br>GDP: $" + formatNumber("67,462,930,491");
            } else if(currentYear >= 1910){
                text.innerHTML =
                "NAME: Belgian Empire" + 
                "<br>POPULATION: " + formatNumber("16,758,000") +
                "<br>GDP: $" + formatNumber("65,399,325,315");
            } else if(currentYear >= 1900){
                text.innerHTML =
                "NAME: Belgian Empire" + 
                "<br>POPULATION: " + formatNumber("15,423,500") +
                "<br>GDP: $" + formatNumber("54,178,177,849");
            } else if(currentYear >= 1890){
                text.innerHTML =
                "NAME: Belgian Empire" + 
                "<br>POPULATION: " + formatNumber("13,226,800") +
                "<br>GDP: $" + formatNumber("45,562,536,944");
            } else if(currentYear >= 1880){
                text.innerHTML =
                "NAME: Belgium" + 
                "<br>POPULATION: " + formatNumber("11,030,100") +
                "<br>GDP: $" + formatNumber("33,556,197,180");
            } else if(currentYear >= 1870){
                text.innerHTML =
                "NAME: Belgium" + 
                "<br>POPULATION: " + formatNumber("8,833,400") +
                "<br>GDP: $" + formatNumber("27,103,105,697");
            } else if(currentYear >= 1850){
                text.innerHTML =
                "NAME: Belgium" + 
                "<br>POPULATION: " + formatNumber("4,440,000") +
                "<br>GDP: $" + formatNumber("16,234,216,608");
            } else {
                text.innerHTML = 
                "Not Enough Data"
            }
        } else if(fillColor === Czechoslovakia) {
            data.style.display = "flex"; 
            if(currentYear >= 1930 && currentYear <= 1940){
                text.innerHTML =
                "NAME: NAME" + 
                "<br>POPULATION: " + formatNumber("13,964,000") +
                "<br>GDP: $" + formatNumber("80,723,411,351");
            } else if(currentYear >= 1920){
                text.innerHTML =
                "NAME: NAME" + 
                "<br>POPULATION: " + formatNumber("12,979,000") +
                "<br>GDP: $" + formatNumber("49,563,738,350");
            } else {
                text.innerHTML = 
                "Not Enough Data"
            }
        } else if(fillColor === Austria_Hungary) {
            data.style.display = "flex"; 
            if(currentYear >= 1910 && currentYear <= 1920){
                text.innerHTML =
                "NAME: Austria-Hungary" + 
                "<br>POPULATION: " + formatNumber("51,356,465") +
                "<br>GDP: $" + formatNumber("138,114,856,532");
            } else if(currentYear >= 1900){
                text.innerHTML =
                "NAME: Austria-Hungary" + 
                "<br>POPULATION: " + formatNumber("47,295,100") +
                "<br>GDP: $" + formatNumber("111,272,320,656");
            } else if(currentYear >= 1890){
                text.innerHTML =
                "NAME: Austria-Hungary" + 
                "<br>POPULATION: " + formatNumber("41,300,000") +
                "<br>GDP: $" + formatNumber("88,528,381,931");
            } else if(currentYear >= 1880){
                text.innerHTML =
                "NAME: Austria-Hungary" + 
                "<br>POPULATION: " + formatNumber("37,900,000") +
                "<br>GDP: $" + formatNumber("72,378,148,647");
            } else if(currentYear >= 1870){
                text.innerHTML =
                "NAME: Austria-Hungary" + 
                "<br>POPULATION: " + formatNumber("35,800,000") +
                "<br>GDP: $" + formatNumber("57,895,766,770");
            } else if(currentYear >= 1850){
                text.innerHTML =
                "NAME: Austrian Empire" + 
                "<br>POPULATION: " + formatNumber("36,900,000") +
                "<br>GDP: $" + formatNumber("42,925,734,097");
            } else if(currentYear >= 1830){
                text.innerHTML =
                "NAME: Austrian Empire" + 
                "<br>POPULATION: " + formatNumber("34,100,000") +
                "<br>GDP: $" + formatNumber("32,982,618,608");
            } else if(currentYear >= 1820){
                text.innerHTML =
                "NAME: Austrian Empire" + 
                "<br>POPULATION: " + formatNumber("30,500,000") +
                "<br>GDP: $" + formatNumber("27,745,476,091");
            } else if(currentYear >= 1800){
                text.innerHTML =
                "NAME: Habsburg Austria" + 
                "<br>POPULATION: " + formatNumber("23,145,000") +
                "<br>GDP: $" + formatNumber("24,958,521,600");
            } else if(currentYear >= 1750){
                text.innerHTML =
                "NAME: Habsburg Austria" + 
                "<br>POPULATION: " + formatNumber("19,207,988") +
                "<br>GDP: $" + formatNumber("41,921,329,676");
            } else if(currentYear >= 1700){
                text.innerHTML =
                "NAME: Habsburg Austria" + 
                "<br>POPULATION: " + formatNumber("9,989,000") +
                "<br>GDP: $" + formatNumber("12,836,407,925");
            } else if(currentYear >= 1600 && currentYear <= 1650){
                text.innerHTML =
                "NAME: Habsburg Austria" + 
                "<br>POPULATION: " + formatNumber("7,800,000") +
                "<br>GDP: $" + formatNumber("8,240,041,191");
            } else if(currentYear >= 1550){
                text.innerHTML =
                "NAME: Habsburg Austria" + 
                "<br>POPULATION: " + formatNumber("9,539,000") +
                "<br>GDP: $" + formatNumber("15,811,554,939");
            } else if(currentYear >= 1500){
                text.innerHTML =
                "NAME: Habsburg Austria" + 
                "<br>POPULATION: " + formatNumber("3,603,000") +
                "<br>GDP: $" + formatNumber("7,299,132,117");
            } else {
                text.innerHTML = 
                "Not Enough Data"
            }
        } else if(fillColor === Bavaria) {
            data.style.display = "flex"; 
            if(currentYear >= 1870 && currentYear <= 1879){
                text.innerHTML =
                "NAME: Bavaria" + 
                "<br>POPULATION: " + formatNumber("4,855,000") +
                "<br>GDP: $" + formatNumber("14,252,016,674");
            } else {
                text.innerHTML = 
                "Not Enough Data"
            }
        } else if(fillColor === Two_Sicilies) {
            data.style.display = "flex"; 
            if(currentYear >= 1850){
                text.innerHTML =
                "NAME: Two Sicilies" + 
                "<br>POPULATION: " + formatNumber("8,612,753") +
                "<br>GDP: $" + formatNumber("36,989,688,675");
            } else if(currentYear >= 1830){
                text.innerHTML =
                "NAME: Two Sicilies" + 
                "<br>POPULATION: " + formatNumber("7,578,182") +
                "<br>GDP: $" + formatNumber("33,106,241,836");
            } else if(currentYear >= 1820){
                text.innerHTML =
                "NAME: Two Sicilies" + 
                "<br>POPULATION: " + formatNumber("6,855,556") +
                "<br>GDP: $" + formatNumber("31,142,224,715");
            } else if(currentYear >= 1800){
                text.innerHTML =
                "NAME: Naples" + 
                "<br>POPULATION: " + formatNumber("6,700,000") +
                "<br>GDP: $" + formatNumber("17,664,418,450");
            } else if(currentYear >= 1750){
                text.innerHTML =
                "NAME: Naples" + 
                "<br>POPULATION: " + formatNumber("5,527,207") +
                "<br>GDP: $" + formatNumber("16,871,272,774");
            } else {
                text.innerHTML = 
                "Not Enough Data"
            }
        } else if(fillColor === Papacy) {
            data.style.display = "flex"; 
            if(currentYear >= 1850 && currentYear <= 1860){
                text.innerHTML =
                "NAME: Papacy" + 
                "<br>POPULATION: " + formatNumber("3,049,867") +
                "<br>GDP: $" + formatNumber("18,494,844,337");
            } else if(currentYear >= 1830){
                text.innerHTML =
                "NAME: Papacy" + 
                "<br>POPULATION: " + formatNumber("2,568,783") +
                "<br>GDP: $" + formatNumber("16,553,120,918");
            } else if(currentYear >= 1700 && currentYear <= 1749){
                text.innerHTML =
                "NAME: Papacy" + 
                "<br>POPULATION: " + formatNumber("1,353,515") +
                "<br>GDP: $" + formatNumber("10,029,516,028");
            } else if(currentYear >= 1600 && currentYear <= 1649){
                text.innerHTML =
                "NAME: Papacy" + 
                "<br>POPULATION: " + formatNumber("1,300,000") +
                "<br>GDP: $" + formatNumber("9,119,963,808");
            } else if(currentYear >= 1550){
                text.innerHTML =
                "NAME: Papacy" + 
                "<br>POPULATION: " + formatNumber("1,178,947") +
                "<br>GDP: $" + formatNumber("8,635,243,831");
            } else if(currentYear >= 1500){
                text.innerHTML =
                "NAME: Papacy" + 
                "<br>POPULATION: " + formatNumber("2,000,000") +
                "<br>GDP: $" + formatNumber("8,219,070,405");
            } else {
                text.innerHTML = 
                "Not Enough Data"
            }
        } else if(fillColor === Sikh) {
            data.style.display = "flex"; 
            if(currentYear >= 1830 && currentYear <= 1849){
                text.innerHTML =
                "NAME: Sikh Empire" + 
                "<br>POPULATION: " + formatNumber("14,150,000") +
                "<br>GDP: $" + formatNumber("28,248,547,742");
            } else if(currentYear >= 1820){
                text.innerHTML =
                "NAME: Sikh Empire" + 
                "<br>POPULATION: " + formatNumber("13,636,364") +
                "<br>GDP: $" + formatNumber("26,176,102,277");
            } else {
                text.innerHTML = 
                "Not Enough Data"
            }
        } else if(fillColor === Bukhara) {
            data.style.display = "flex"; 
            if(currentYear >= 1830 && currentYear <= 1849){
                text.innerHTML =
                "NAME: Bukhara" + 
                "<br>POPULATION: " + formatNumber("2,100,000") +
                "<br>GDP: $" + formatNumber("4,228,826,776");
            } else if(currentYear >= 1820){
                text.innerHTML =
                "NAME: Bukhara" + 
                "<br>POPULATION: " + formatNumber("2,217,000") +
                "<br>GDP: $" + formatNumber("3,529,174,772");
            } else if(currentYear >= 1800){
                text.innerHTML =
                "NAME: Bukhara" + 
                "<br>POPULATION: " + formatNumber("2,144,500") +
                "<br>GDP: $" + formatNumber("3,165,176,568");
            } else if(currentYear >= 1750){
                text.innerHTML =
                "NAME: Bukhara" + 
                "<br>POPULATION: " + formatNumber("1,813,250") +
                "<br>GDP: $" + formatNumber("2,898,987,740");
            } else if(currentYear >= 1700){
                text.innerHTML =
                "NAME: Bukhara" + 
                "<br>POPULATION: " + formatNumber("1,391,000") +
                "<br>GDP: $" + formatNumber("2,632,798,912");
            } else if(currentYear >= 1650){
                text.innerHTML =
                "NAME: Bukhara" + 
                "<br>POPULATION: " + formatNumber("872,000") +
                "<br>GDP: $" + formatNumber("2,245,096,676");
            } else if(currentYear >= 1600){
                text.innerHTML =
                "NAME: Bukhara" + 
                "<br>POPULATION: " + formatNumber("262,000") +
                "<br>GDP: $" + formatNumber("1,097,865,645");
            } else if(currentYear >= 1550){
                text.innerHTML =
                "NAME: Yarkent Khanate" + 
                "<br>POPULATION: " + formatNumber("520,000") +
                "<br>GDP: $" + formatNumber("357,211,208");
            } else if(currentYear >= 1500){
                text.innerHTML =
                "NAME: Chagatai Khanate" + 
                "<br>POPULATION: " + formatNumber("426,000") +
                "<br>GDP: $" + formatNumber("303,891,812");
            } else {
                text.innerHTML = 
                "Not Enough Data"
            }
        } else if(fillColor === Portuguese) {
            data.style.display = "flex"; 
            if(currentYear >= 1820 && currentYear <= 1829){
                text.innerHTML =
                "NAME: Portuguese Empire" + 
                "<br>POPULATION: " + formatNumber("11,900,910") +
                "<br>GDP: $" + formatNumber("16,274,044,737");
            } else if(currentYear >= 1800){
                text.innerHTML =
                "NAME: Portuguese Empire" + 
                "<br>POPULATION: " + formatNumber("10,140,628") +
                "<br>GDP: $" + formatNumber("14,607,557,779");
            } else if(currentYear >= 1650 && currentYear <= 1699){
                text.innerHTML =
                "NAME: Portuguese Empire" + 
                "<br>POPULATION: " + formatNumber("10,948,953") +
                "<br>GDP: $" + formatNumber("9,200,002,623");
            } else if(currentYear >= 1550 && currentYear <= 1599){
                text.innerHTML =
                "NAME: Portuguese Empire" + 
                "<br>POPULATION: " + formatNumber("6,245,930") +
                "<br>GDP: $" + formatNumber("6,525,789,528");
            } else {
                text.innerHTML = 
                "Not Enough Data"
            }
        } else if(fillColor === Durrani) {
            data.style.display = "flex"; 
            if(currentYear >= 1800 && currentYear <= 1819){
                text.innerHTML =
                "NAME: Durrani Empire" + 
                "<br>POPULATION: " + formatNumber("9,820,000") +
                "<br>GDP: $" + formatNumber("15,522,597,530");
            } else if(currentYear >= 1750){
                text.innerHTML =
                "NAME: Durrani Empire" + 
                "<br>POPULATION: " + formatNumber("8,864,167") +
                "<br>GDP: $" + formatNumber("14,580,768,945");
            } else {
                text.innerHTML = 
                "Not Enough Data"
            }
        } else if(fillColor === Mughal) {
            data.style.display = "flex"; 
            if(currentYear >= 1750 && currentYear <= 1799){
                text.innerHTML =
                "NAME: Mughal Empire" + 
                "<br>POPULATION: " + formatNumber("48,067,083") +
                "<br>GDP: $" + formatNumber("68,098,876,024");
            } else if(currentYear >= 1700){
                text.innerHTML =
                "NAME: Mughal Empire" + 
                "<br>POPULATION: " + formatNumber("158,400,000") +
                "<br>GDP: $" + formatNumber("231,578,783,152");
            } else if(currentYear >= 1650){
                text.innerHTML =
                "NAME: Mughal Empire" + 
                "<br>POPULATION: " + formatNumber("150,000,000") +
                "<br>GDP: $" + formatNumber("198,500,692,711");
            } else if(currentYear >= 1600){
                text.innerHTML =
                "NAME: Mughal Empire" + 
                "<br>POPULATION: " + formatNumber("115,000,000") +
                "<br>GDP: $" + formatNumber("168,338,395,396");
            } else if(currentYear >= 1550){
                text.innerHTML =
                "NAME: Sur Empire" + 
                "<br>POPULATION: " + formatNumber("71,112,250") +
                "<br>GDP: $" + formatNumber("101,099,817,691");
            } else if(currentYear >= 1500){
                text.innerHTML =
                "NAME: Delhi Sultanate" + 
                "<br>POPULATION: " + formatNumber("20,000,000") +
                "<br>GDP: $" + formatNumber("59,179,007,135");
            } else {
                text.innerHTML = 
                "Not Enough Data"
            }
        } else if(fillColor === Bengal) {
            data.style.display = "flex"; 
            if(currentYear >= 1750 && currentYear <= 1799){
                text.innerHTML =
                "NAME: Bengal" + 
                "<br>POPULATION: " + formatNumber("17,543,583") +
                "<br>GDP: $" + formatNumber("22,084,287,630");
            } else if(currentYear >= 1500 && currentYear <= 1549){
                text.innerHTML =
                "NAME: Bengal" + 
                "<br>POPULATION: " + formatNumber("10,526,000") +
                "<br>GDP: $" + formatNumber("11,783,179,302");
            } else {
                text.innerHTML = 
                "Not Enough Data"
            }
        } else if(fillColor === Mysore) {
            data.style.display = "flex"; 
            if(currentYear >= 1700 && currentYear <= 1749){
                text.innerHTML =
                "NAME: Mysore" + 
                "<br>POPULATION: " + formatNumber("8,652,063") +
                "<br>GDP: $" + formatNumber("12,124,243,198");
            } else if(currentYear >= 1650){
                text.innerHTML =
                "NAME: Mysore" + 
                "<br>POPULATION: " + formatNumber("7,865,531") +
                "<br>GDP: $" + formatNumber("11,278,145,175");
            } else if(currentYear >= 1600){
                text.innerHTML =
                "NAME: Mysore" + 
                "<br>POPULATION: " + formatNumber("14,158,000") +
                "<br>GDP: $" + formatNumber("21,581,190,834");
            } else if(currentYear >= 1550){
                text.innerHTML =
                "NAME: Vijayanagara Empire" + 
                "<br>POPULATION: " + formatNumber("25,150,670") +
                "<br>GDP: $" + formatNumber("26,145,437,859");
            } else if(currentYear >= 1500){
                text.innerHTML =
                "NAME: Vijayanagara Empire" + 
                "<br>POPULATION: " + formatNumber("18,000,000") +
                "<br>GDP: $" + formatNumber("26,558,785,957");
            } else {
                text.innerHTML = 
                "Not Enough Data"
            }
        } else if(fillColor === Persia) {
            data.style.display = "flex"; 
            if(currentYear >= 1700 && currentYear <= 1749){
                text.innerHTML =
                "NAME: Safavid Persia" + 
                "<br>POPULATION: " + formatNumber("10,000,000") +
                "<br>GDP: $" + formatNumber("9,962,434,182");
            } else if(currentYear >= 1650){
                text.innerHTML =
                "NAME: Safavid Persia" + 
                "<br>POPULATION: " + formatNumber("8,944,272") +
                "<br>GDP: $" + formatNumber("10,892,449,876");
            } else if(currentYear >= 1600){
                text.innerHTML =
                "NAME: Safavid Persia" + 
                "<br>POPULATION: " + formatNumber("7,489,000") +
                "<br>GDP: $" + formatNumber("10,118,202,653");
            } else if(currentYear >= 1550){
                text.innerHTML =
                "NAME: Safavid Persia" + 
                "<br>POPULATION: " + formatNumber("6,819,000") +
                "<br>GDP: $" + formatNumber("8,359,404,038");
            } else {
                text.innerHTML = 
                "Not Enough Data"
            }
        } else if(fillColor === Ming) {
            data.style.display = "flex"; 
            if(currentYear >= 1650 && currentYear <= 1699){
                text.innerHTML =
                "NAME: Ming China" + 
                "<br>POPULATION: " + formatNumber("9,000,000") +
                "<br>GDP: $" + formatNumber("64,879,520,128");
            } else if(currentYear >= 1600){
                text.innerHTML =
                "NAME: Ming China" + 
                "<br>POPULATION: " + formatNumber("150,000,000") +
                "<br>GDP: $" + formatNumber("241,362,963,772");
            } else if(currentYear >= 1550){
                text.innerHTML =
                "NAME: Ming China" + 
                "<br>POPULATION: " + formatNumber("145,000,000") +
                "<br>GDP: $" + formatNumber("194,786,074,584");
            } else if(currentYear >= 1500){
                text.innerHTML =
                "NAME: Ming China" + 
                "<br>POPULATION: " + formatNumber("103,000,000") +
                "<br>GDP: $" + formatNumber("154,104,038,277");
            } else {
                text.innerHTML = 
                "Not Enough Data"
            }
        } else if(fillColor === Golconda) {
            data.style.display = "flex"; 
            if(currentYear >= 1650 && currentYear <= 1699){
                text.innerHTML =
                "NAME: Golconda Sultanate" + 
                "<br>POPULATION: " + formatNumber("8,365,678") +
                "<br>GDP: $" + formatNumber("11,415,367,350");
            } else if(currentYear >= 1600){
                text.innerHTML =
                "NAME: Golconda Sultanate" + 
                "<br>POPULATION: " + formatNumber("7,167,411") +
                "<br>GDP: $" + formatNumber("10,790,595,417");
            } else if(currentYear >= 1550){
                text.innerHTML =
                "NAME: Golconda Sultanate" + 
                "<br>POPULATION: " + formatNumber("6,338,055") +
                "<br>GDP: $" + formatNumber("8,715,145,953");
            } else {
                text.innerHTML = 
                "Not Enough Data"
            }
        } else if(fillColor === Saadi) {
            data.style.display = "flex"; 
            if(currentYear >= 1650 && currentYear <= 1699){
                text.innerHTML =
                "NAME: Saadi Morocco" + 
                "<br>POPULATION: " + formatNumber("5,815,110") +
                "<br>GDP: $" + formatNumber("2,046,373,688");
            } else if(currentYear >= 1600){
                text.innerHTML =
                "NAME: Saadi Morocco" + 
                "<br>POPULATION: " + formatNumber("13,060,680") +
                "<br>GDP: $" + formatNumber("2,005,770,940");
            } else if(currentYear >= 1550){
                text.innerHTML =
                "NAME: Wattasid Morocco" + 
                "<br>POPULATION: " + formatNumber("2,056,818") +
                "<br>GDP: $" + formatNumber("1,564,666,602");
            } else {
                text.innerHTML = 
                "Not Enough Data"
            }
        } else if(fillColor === Ahmadnagar) {
            data.style.display = "flex"; 
            if(currentYear >= 1600 && currentYear <= 1649){
                text.innerHTML =
                "NAME: Ahmadnagar Sultanate" + 
                "<br>POPULATION: " + formatNumber("7,167,411") +
                "<br>GDP: $" + formatNumber("10,790,595,417");
            } else {
                text.innerHTML = 
                "Not Enough Data"
            }
        } else if(fillColor === Gujarat) {
            data.style.display = "flex"; 
            if(currentYear >= 1550 && currentYear <= 1599){
                text.innerHTML =
                "NAME: Gujarat Sultanate" + 
                "<br>POPULATION: " + formatNumber("5,070,444") +
                "<br>GDP: $" + formatNumber("6,972,116,762");
            } else {
                text.innerHTML = 
                "Not Enough Data"
            }
        } else if(fillColor === Merina) {
            data.style.display = "flex"; 
            if(currentYear >= 1550 && currentYear <= 1599){
                text.innerHTML =
                "NAME: Merina Kingdom" + 
                "<br>POPULATION: " + formatNumber("774,999") +
                "<br>GDP: $" + formatNumber("824,320,782");
            } else {
                text.innerHTML = 
                "Not Enough Data"
            }
        } else if(fillColor === Iroquois) {
            data.style.display = "flex"; 
            if(currentYear >= 1550 && currentYear <= 1599){
                text.innerHTML =
                "NAME: Iroquois Confederacy" + 
                "<br>POPULATION: " + formatNumber("23,333") +
                "<br>GDP: $" + formatNumber("17,208,753");
            } else if(currentYear >= 1500){
                text.innerHTML =
                "NAME: Iroquois Confederacy" + 
                "<br>POPULATION: " + formatNumber("26,666") +
                "<br>GDP: $" + formatNumber("22,945,003");
            } else {
                text.innerHTML = 
                "Not Enough Data"
            }
        } else if(fillColor === Timurid) {
            data.style.display = "flex"; 
            if(currentYear >= 1500 && currentYear <= 1549){
                text.innerHTML =
                "NAME: Timurid Empire" + 
                "<br>POPULATION: " + formatNumber("9,105,000") +
                "<br>GDP: $" + formatNumber("13,880,438,605");
            } else {
                text.innerHTML = 
                "Not Enough Data"
            }
        } else if(fillColor === Mamluk) {
            data.style.display = "flex"; 
            if(currentYear >= 1500 && currentYear <= 1549){
                text.innerHTML =
                "NAME: Mamluk Sultanate" + 
                "<br>POPULATION: " + formatNumber("7,271,500") +
                "<br>GDP: $" + formatNumber("8,798,428,519");
            } else {
                text.innerHTML = 
                "Not Enough Data"
            }
        } else if(fillColor === Mali) {
            data.style.display = "flex"; 
            if(currentYear >= 1500 && currentYear <= 1549){
                text.innerHTML =
                "NAME: Mali Empire" + 
                "<br>POPULATION: " + formatNumber("20,000,000") +
                "<br>GDP: $" + formatNumber("687,819,012");
            } else {
                text.innerHTML = 
                "Not Enough Data"
            }
        } else if(fillColor === Mutapa) {
            data.style.display = "flex"; 
            if(currentYear >= 1500 && currentYear <= 1549){
                text.innerHTML =
                "NAME: Mutapa Kingdom" + 
                "<br>POPULATION: " + formatNumber("354,499") +
                "<br>GDP: $" + formatNumber("169,636,530");
            } else {
                text.innerHTML = 
                "Not Enough Data"
            }
        } else if(fillColor === Inca) {
            data.style.display = "flex"; 
            if(currentYear >= 1500 && currentYear <= 1549){
                text.innerHTML =
                "NAME: Inca Empire" + 
                "<br>POPULATION: " + formatNumber("12,000,000") +
                "<br>GDP: $" + formatNumber("2,905,364,090");
            } else {
                text.innerHTML = 
                "Not Enough Data"
            }
        } else {
            data.style.display = "none";
        }

        data.style.top = mouseY + "px";
        data.style.left = mouseX + "px";
    } else {
        data.style.display = "none";
    }
});