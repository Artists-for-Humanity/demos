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
const Russia = "#f7fcfd";
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
                "<br>POPULATION: 1,434,071,371" +
                "<br>GDP: $28,779,528,000,000";
            } else if(currentYear >= 2020){
                text.innerHTML = 
                "NAME: China" + 
                "<br>POPULATION: 1,419,936,007" +
                "<br>GDP: $25,466,031,330,345";
            } else if(currentYear >= 2010){
                text.innerHTML = 
                "NAME: China" + 
                "<br>POPULATION: 1,339,724,852" +
                "<br>GDP: $16,387,244,811,847";
            } else if(currentYear >= 2000){
                text.innerHTML = 
                "NAME: China" + 
                "<br>POPULATION: 1,269,751,500" +
                "<br>GDP: $7,673,176,625,788";
            } else if(currentYear >= 1990){
                text.innerHTML = 
                "NAME: China" + 
                "<br>POPULATION: 1,135,185,000" +
                "<br>GDP: $4,195,025,697,589";
            } else if(currentYear >= 1980){
                text.innerHTML = 
                "NAME: China" + 
                "<br>POPULATION: 981,235,000" +
                "<br>GDP: $2,347,261,441,755";
            } else if(currentYear >= 1970){
                text.innerHTML = 
                "NAME: China" + 
                "<br>POPULATION: 818,315,000" +
                "<br>GDP: $1,417,943,115,464";
            } else if(currentYear >= 1960){
                text.innerHTML = 
                "NAME: China" + 
                "<br>POPULATION: 667,070,000" +
                "<br>GDP: $873,931,758,610";
            } else if(currentYear >= 1950){
                text.innerHTML = 
                "NAME: China" + 
                "<br>POPULATION: 546,815,000" +
                "<br>GDP: $541,524,766,362";
            } else if(currentYear >= 1940){
                text.innerHTML = 
                "NAME: Nationalist China" + 
                "<br>POPULATION: 282,533,500" +
                "<br>GDP: $481,729,267,600";
            } else if(currentYear >= 1930){
                text.innerHTML = 
                "NAME: Nationalist China" + 
                "<br>POPULATION: 407,500,000" +
                "<br>GDP: $511,139,272,336";
            } else if(currentYear >= 1920){
                text.innerHTML = 
                "NAME: Beiyang China" + 
                "<br>POPULATION: 196,666,667" +
                "<br>GDP: $242,571,245,021";
            } else if(currentYear >= 1910){
                text.innerHTML = 
                "NAME: Qing China" + 
                "<br>POPULATION: 427,194,857" +
                "<br>GDP: $478,164,237,475";
            } else if(currentYear >= 1900){
                text.innerHTML = 
                "NAME: Qing China" + 
                "<br>POPULATION: 400,000,000" +
                "<br>GDP: $482,331,900,697";
            } else if(currentYear >= 1890){
                text.innerHTML = 
                "NAME: Qing China" + 
                "<br>POPULATION: 389,838,000" +
                "<br>GDP: $474,689,675,112";
            } else if(currentYear >= 1880){
                text.innerHTML = 
                "NAME: Qing China" + 
                "<br>POPULATION: 368,000,000" +
                "<br>GDP: $425,570,509,701";
            } else if(currentYear >= 1870){
                text.innerHTML = 
                "NAME: Qing China" + 
                "<br>POPULATION: 358,000,000" +
                "<br>GDP: $422,485,572,987";
            } else if(currentYear >= 1850){
                text.innerHTML = 
                "NAME: Qing China" + 
                "<br>POPULATION: 436,100,000" +
                "<br>GDP: $441,136,619,373";
            } else if(currentYear >= 1830){
                text.innerHTML = 
                "NAME: Qing China" + 
                "<br>POPULATION: 409,000,000" +
                "<br>GDP: $431,764,485,286";
            } else if(currentYear >= 1820){
                text.innerHTML = 
                "NAME: Qing China" + 
                "<br>POPULATION: 353,377,700" +
                "<br>GDP: $419,332,620,136";
            } else if(currentYear >= 1800){
                text.innerHTML = 
                "NAME: Qing China" + 
                "<br>POPULATION: 353,377,700" +
                "<br>GDP: $393,223,436,333";
            } else if(currentYear >= 1750){
                text.innerHTML = 
                "NAME: Qing China" + 
                "<br>POPULATION: 330,000,000" +
                "<br>GDP: $316,818,059,260";
            } else if(currentYear >= 1750){
                data.style.display = "flex";
                text.innerHTML = 
                "NAME: Qing China" + 
                "<br>POPULATION: 225,000,000" +
                "<br>GDP: $316,818,059,260";
            } else if(currentYear >= 1700){
                text.innerHTML = 
                "NAME: Qing China" + 
                "<br>POPULATION: 122,474,487" +
                "<br>GDP: $265,881,644,432";
            } else if(currentYear >= 1650){
                text.innerHTML = 
                "NAME: Qing China" + 
                "<br>POPULATION: 140,000,000" +
                "<br>GDP: $177,440,300,336";
            } else {
                text.innerHTML = 
                "Not Enough Data";
            }
        } else if(fillColor === USA) {
            data.style.display = "flex";
            if(currentYear >= 2022){
                text.innerHTML = 
                "NAME: United States" + 
                "<br>POPULATION: 338,289,857" +
                "<br>GDP: $24,003,704,000,000";
            } else if(currentYear >= 2020){
                text.innerHTML = 
                "NAME: United States" + 
                "<br>POPULATION: 331,002,651" +
                "<br>GDP: $20,936,600,000,000";
            } else if(currentYear >= 2010){
                text.innerHTML = 
                "NAME: United States" + 
                "<br>POPULATION: 309,349,689" +
                "<br>GDP: $18,927,301,116,874";
            } else if(currentYear >= 2000){
                text.innerHTML = 
                "NAME: United States" + 
                "<br>POPULATION: 285,218,906" +
                "<br>GDP: $16,209,738,317,694";
            } else if(currentYear >= 1990){
                text.innerHTML = 
                "NAME: United States" + 
                "<br>POPULATION: 252,227,873" +
                "<br>GDP: $11,539,087,366,010";
            } else if(currentYear >= 1980){
                text.innerHTML = 
                "NAME: United States" + 
                "<br>POPULATION: 229,733,805" +
                "<br>GDP: $8,409,774,841,642";
            } else if(currentYear >= 1970){
                text.innerHTML = 
                "NAME: United States" + 
                "<br>POPULATION: 206,102,031" +
                "<br>GDP: $6,123,128,816,104";
            } else if(currentYear >= 1960){
                text.innerHTML = 
                "NAME: United States" + 
                "<br>POPULATION: 181,679,175" +
                "<br>GDP: $4,059,503,209,561";
            } else if(currentYear >= 1950){
                text.innerHTML = 
                "NAME: United States" + 
                "<br>POPULATION: 240,020,870" +
                "<br>GDP: $3,216,436,613,395";
            } else if(currentYear >= 1940){
                text.innerHTML = 
                "NAME: United States" + 
                "<br>POPULATION: 150,629,569" +
                "<br>GDP: $1,985,303,951,116";
            } else if(currentYear >= 1930){
                text.innerHTML = 
                "NAME: United States" + 
                "<br>POPULATION: 140,370,264" +
                "<br>GDP: $1,654,455,614,975";
            } else if(currentYear >= 1920){
                text.innerHTML = 
                "NAME: United States" + 
                "<br>POPULATION: 121,061,537" +
                "<br>GDP: $1,358,129,886,447";
            } else if(currentYear >= 1910){
                text.innerHTML = 
                "NAME: United States" + 
                "<br>POPULATION: 102,215,496" +
                "<br>GDP: $1,113,758,691,964";
            } else if(currentYear >= 1900){
                text.innerHTML = 
                "NAME: United States" + 
                "<br>POPULATION: 78,816,167" +
                "<br>GDP: $764,540,107,351";
            } else if(currentYear >= 1890){
                text.innerHTML = 
                "NAME: United States" + 
                "<br>POPULATION: 62,979,766" +
                "<br>GDP: $522,936,204,264";
            } else if(currentYear >= 1880){
                text.innerHTML = 
                "NAME: United States" + 
                "<br>POPULATION: 50,189,209" +
                "<br>GDP: $391,253,195,294";
            } else if(currentYear >= 1870){
                text.innerHTML = 
                "NAME: United States" + 
                "<br>POPULATION: 38,558,371" +
                "<br>GDP: $239,558,991,468";
            } else if(currentYear >= 1850){
                text.innerHTML = 
                "NAME: United States" + 
                "<br>POPULATION: 23,191,876" +
                "<br>GDP: $98,890,664,634";
            } else if(currentYear >= 1830){
                text.innerHTML = 
                "NAME: United States" + 
                "<br>POPULATION: 13,185,070" +
                "<br>GDP: $46,561,361,604";
            } else if(currentYear >= 1820){
                text.innerHTML = 
                "NAME: United States" + 
                "<br>POPULATION: 9,638,453" +
                "<br>GDP: $30,251,570,664";
            } else if(currentYear >= 1800){
                text.innerHTML = 
                "NAME: United States" + 
                "<br>POPULATION: 5,308,483" +
                "<br>GDP: $15,865,673,443";
            } else {
                text.innerHTML = 
                "Not Enough Data";
            }
        } else if(fillColor === India) {
            data.style.display = "flex"; 
            if(currentYear >= 2022){
                text.innerHTML =
                "NAME: India" + 
                "<br>POPULATION: 1,417,173,173" +
                "<br>GDP: $11,619,550,000,000";
            } else if(currentYear >= 2020){
                text.innerHTML =
                "NAME: India" + 
                "<br>POPULATION: 1,380,000,000" +
                "<br>GDP: $9,907,028,000,000";
            } else if(currentYear >= 2010){
                text.innerHTML =
                "NAME: India" + 
                "<br>POPULATION: 1,182,105,564" +
                "<br>GDP: $6,587,478,152,426";
            } else if(currentYear >= 2000){
                text.innerHTML =
                "NAME: India" + 
                "<br>POPULATION: 1,059,634,000" +
                "<br>GDP: $3,437,165,798,451";
            } else if(currentYear >= 1990){
                text.innerHTML =
                "NAME: India" + 
                "<br>POPULATION: 870,452,000" +
                "<br>GDP: $2,170,278,833,441";
            } else if(currentYear >= 1980){
                text.innerHTML =
                "NAME: India" + 
                "<br>POPULATION: 696,828,000" +
                "<br>GDP: $1,258,178,013,973";
            } else if(currentYear >= 1970){
                text.innerHTML =
                "NAME: India" + 
                "<br>POPULATION: 557,501,000" +
                "<br>GDP: $928,035,266,198";
            } else if(currentYear >= 1960){
                text.innerHTML =
                "NAME: India" + 
                "<br>POPULATION: 445,955,000" +
                "<br>GDP: $645,508,700,752";
            } else if(currentYear >= 1950){
                text.innerHTML =
                "NAME: India" + 
                "<br>POPULATION: 357,021,000" +
                "<br>GDP: $439,180,173,701";
            } else if(currentYear >= 1800 && currentYear <= 1820){
                text.innerHTML =
                "NAME: Maratha Empire" + 
                "<br>POPULATION: 116,187,500" +
                "<br>GDP: $145,004,046,446";
            } else if(currentYear >= 1750 && currentYear <= 1799){
                text.innerHTML =
                "NAME: Maratha Empire" + 
                "<br>POPULATION: 67,293,917" +
                "<br>GDP: $86,671,296,758";
            } else if(currentYear >= 1650 && currentYear <= 1699){
                text.innerHTML =
                "NAME: Bijapur Sultanate" + 
                "<br>POPULATION: 4,182,839" +
                "<br>GDP: $16,972,075,647";
            } else {
                text.innerHTML = 
                "Not Enough Data"
            }
        } else if(fillColor === Japan) {
            data.style.display = "flex"; 
            if(currentYear >= 2022){
                text.innerHTML =
                "NAME: Japan" + 
                "<br>POPULATION: 123,951,692" +
                "<br>GDP: $5,856,478,000,000";
            } else if(currentYear >= 2020){
                text.innerHTML =
                "NAME: Japan" + 
                "<br>POPULATION: 126,476,461" +
                "<br>GDP: $5,312,296,000,000";
            } else if(currentYear >= 2010){
                text.innerHTML =
                "NAME: Japan" + 
                "<br>POPULATION: 128,056,000" +
                "<br>GDP: $5,534,069,317,027";
            } else if(currentYear >= 2000){
                text.innerHTML =
                "NAME: Japan" + 
                "<br>POPULATION: 126,925,843" +
                "<br>GDP: $5,225,015,968,149";
            } else if(currentYear >= 1990){
                text.innerHTML =
                "NAME: Japan" + 
                "<br>POPULATION: 123,611,167" +
                "<br>GDP: $4,585,751,337,016";
            } else if(currentYear >= 1980){
                text.innerHTML =
                "NAME: Japan" + 
                "<br>POPULATION: 117,060,396" +
                "<br>GDP: $3,098,809,916,756";
            } else if(currentYear >= 1970){
                text.innerHTML =
                "NAME: Japan" + 
                "<br>POPULATION: 103,720,060" +
                "<br>GDP: $2,002,561,815,867";
            } else if(currentYear >= 1960){
                text.innerHTML =
                "NAME: Japan" + 
                "<br>POPULATION: 93,418,501" +
                "<br>GDP: $741,021,886,483";
            } else if(currentYear >= 1940 && currentYear <= 1950){
                text.innerHTML =
                "NAME: Empire of Japan" + 
                "<br>POPULATION: 300,769,228" +
                "<br>GDP: $670,631,171,923";
            } else if(currentYear >= 1930){
                text.innerHTML =
                "NAME: Empire of Japan" + 
                "<br>POPULATION: 91,793,680" +
                "<br>GDP: $319,914,078,158";
            } else if(currentYear >= 1920){
                text.innerHTML =
                "NAME: Empire of Japan" + 
                "<br>POPULATION: 78,208,378" +
                "<br>GDP: $244,137,113,796";
            } else if(currentYear >= 1910){
                text.innerHTML =
                "NAME: Empire of Japan" + 
                "<br>POPULATION: 69,794,000" +
                "<br>GDP: $181,846,022,074";
            } else if(currentYear >= 1900){
                text.innerHTML =
                "NAME: Empire of Japan" + 
                "<br>POPULATION: 46,605,000" +
                "<br>GDP: $129,949,489,652";
            } else if(currentYear >= 1890){
                text.innerHTML =
                "NAME: Empire of Japan" + 
                "<br>POPULATION: 40,077,000" +
                "<br>GDP: $92,095,001,496";
            } else if(currentYear >= 1880){
                text.innerHTML =
                "NAME: Empire of Japan" + 
                "<br>POPULATION: 36,807,000" +
                "<br>GDP: $76,348,245,029";
            } else if(currentYear >= 1870){
                text.innerHTML =
                "NAME: Empire of Japan" + 
                "<br>POPULATION: 34,437,000" +
                "<br>GDP: $67,439,372,776";
            } else if(currentYear >= 1850){
                text.innerHTML =
                "NAME: Tokugawa Japan" + 
                "<br>POPULATION: 32,200,000" +
                "<br>GDP: $56,955,483,520";
            } else if(currentYear >= 1830){
                text.innerHTML =
                "NAME: Tokugawa Japan" + 
                "<br>POPULATION: 31,330,000" +
                "<br>GDP: $52,919,269,323";
            } else if(currentYear >= 1820){
                text.innerHTML =
                "NAME: Tokugawa Japan" + 
                "<br>POPULATION: 31,000,000" +
                "<br>GDP: $50,603,271,363";
            } else if(currentYear >= 1800){
                text.innerHTML =
                "NAME: Tokugawa Japan" + 
                "<br>POPULATION: 29,000,000" +
                "<br>GDP: $49,515,028,968";
            } else if(currentYear >= 1750){
                text.innerHTML =
                "NAME: Tokugawa Japan" + 
                "<br>POPULATION: 28,667,000" +
                "<br>GDP: $33,861,112,453";
            } else if(currentYear >= 1700){
                text.innerHTML =
                "NAME: Tokugawa Japan" + 
                "<br>POPULATION: 27,000,000" +
                "<br>GDP: $35,908,280,663";
            } else if(currentYear >= 1650){
                text.innerHTML =
                "NAME: Tokugawa Japan" + 
                "<br>POPULATION: 20,915,246" +
                "<br>GDP: $30,116,575,312";
            } else if(currentYear >= 1600){
                text.innerHTML =
                "NAME: Azuchi-Momoyama Japan" + 
                "<br>POPULATION: 12,000,000" +
                "<br>GDP: $24,328,662,697";
            } else if(currentYear >= 1550){
                text.innerHTML =
                "NAME: Ashikaga Japan" + 
                "<br>POPULATION: 10,900,000" +
                "<br>GDP: $20,981,790,783";
            } else if(currentYear >= 1500){
                text.innerHTML =
                "NAME: Ashikaga Japan" + 
                "<br>POPULATION: 9,800,000" +
                "<br>GDP: $17,783,301,976";
            } else {
                text.innerHTML = 
                "Not Enough Data"
            }
        } else if(fillColor === Germany) {
            data.style.display = "flex"; 
            if(currentYear >= 2022){
                text.innerHTML =
                "NAME: Germany" + 
                "<br>POPULATION: 83,369,843" +
                "<br>GDP: $5,017,163,000,000";
            } else if(currentYear >= 2020){
                text.innerHTML =
                "NAME: Germany" + 
                "<br>POPULATION: 83,783,942" +
                "<br>GDP: $4,469,546,000,000";
            } else if(currentYear >= 2010){
                text.innerHTML =
                "NAME: Germany" + 
                "<br>POPULATION: 81,802,257" +
                "<br>GDP: $4,160,651,925,465";
            } else if(currentYear >= 2000){
                text.innerHTML =
                "NAME: Germany" + 
                "<br>POPULATION: 82,000,000" +
                "<br>GDP: $3,397,761,246,582";
            } else if(currentYear >= 1990){
                text.innerHTML =
                "NAME: West Germany" + 
                "<br>POPULATION: 63,254,000" +
                "<br>GDP: $1,544,852,527,649";
            } else if(currentYear >= 1980){
                text.innerHTML =
                "NAME: West Germany" + 
                "<br>POPULATION: 61,658,000" +
                "<br>GDP: $1,350,116,997,388";
            } else if(currentYear >= 1970){
                text.innerHTML =
                "NAME: West Germany" + 
                "<br>POPULATION: 60,650,584" +
                "<br>GDP: $1,030,028,283,998";
            } else if(currentYear >= 1960){
                text.innerHTML =
                "NAME: West Germany" + 
                "<br>POPULATION: 55,958,000" +
                "<br>GDP: $682,322,036,033";
            } else if(currentYear >= 1950){
                text.innerHTML =
                "NAME: West Germany" + 
                "<br>POPULATION: 49,842,624" +
                "<br>GDP: $324,192,812,967";
                
            } else if(currentYear >= 1940){
                text.innerHTML =
                "NAME: Nazi Germany" + 
                "<br>POPULATION: 137,328,719" +
                "<br>GDP: $1,239,496,851,920";
                
            } else if(currentYear >= 1930){
                text.innerHTML =
                "NAME: Weimar Germany" + 
                "<br>POPULATION: 65,130,000" +
                "<br>GDP: $510,875,233,632";
            } else if(currentYear >= 1920){
                text.innerHTML =
                "NAME: Weimar Germany" + 
                "<br>POPULATION: 61,794,000" +
                "<br>GDP: $336,394,016,154"; 
            } else if(currentYear >= 1910){
                text.innerHTML =
                "NAME: German Empire" + 
                "<br>POPULATION: 75,649,923" +
                "<br>GDP: $467,776,682,686"; 
            } else if(currentYear >= 1900){
                text.innerHTML =
                "NAME: German Empire" + 
                "<br>POPULATION: 67,606,178" +
                "<br>GDP: $368,708,059,523"; 
            } else if(currentYear >= 1890){
                text.innerHTML =
                "NAME: German Empire" + 
                "<br>POPULATION: 56,647,395" +
                "<br>GDP: $264,245,485,362"; 
            } else if(currentYear >= 1880){
                text.innerHTML =
                "NAME: German Empire" + 
                "<br>POPULATION: 44,398,320" +
                "<br>GDP: $194,342,378,042"; 
            } else if(currentYear >= 1870){
                text.innerHTML =
                "NAME: North German Confederation" + 
                "<br>POPULATION: 32,037,643" +
                "<br>GDP: $123,351,572,999"; 
            } else if(currentYear >= 1850){
                text.innerHTML =
                "NAME: Prussia" + 
                "<br>POPULATION: 16,600,667" +
                "<br>GDP: $55,534,382,729"; 
            } else if(currentYear >= 1830){
                text.innerHTML =
                "NAME: Prussia" + 
                "<br>POPULATION: 12,987,333" +
                "<br>GDP: $37,987,774,714"; 
            } else if(currentYear >= 1820){
                text.innerHTML =
                "NAME: Prussia" + 
                "<br>POPULATION: 11,141,354" +
                "<br>GDP: $29,548,091,367"; 
            } else if(currentYear >= 1800){
                text.innerHTML =
                "NAME: Prussia" + 
                "<br>POPULATION: 10,700,000" +
                "<br>GDP: $28,070,712,251"; 
            } else if(currentYear >= 1750){
                text.innerHTML =
                "NAME: Prussia" + 
                "<br>POPULATION: 3,750,000" +
                "<br>GDP: $19,842,908,644"; 
            } else {
                text.innerHTML = 
                "Not Enough Data"
            }
        } else if(fillColor === Russia) {
            data.style.display = "flex"; 
            if(currentYear >= 2022){
                text.innerHTML =
                "NAME: Russia" + 
                "<br>POPULATION: 146,424,729" +
                "<br>GDP: $4,592,088,000,000";
            } else if(currentYear >= 2020){
                text.innerHTML =
                "NAME: Russia" + 
                "<br>POPULATION: 146,170,015" +
                "<br>GDP: $4,133,084,000,000";
            } else if(currentYear >= 2010){
                text.innerHTML =
                "NAME: Russia" + 
                "<br>POPULATION: 142,849,472" +
                "<br>GDP: $3,841,533,017,375";
            } else if(currentYear >= 2000){
                text.innerHTML =
                "NAME: Russia" + 
                "<br>POPULATION: 146,597,000" +
                "<br>GDP: $1,909,376,166,193";
            } else if(currentYear >= 1990){
                text.innerHTML =
                "NAME: Soviet Russia" + 
                "<br>POPULATION: 284,572,329" +
                "<br>GDP: $3,864,344,745,781";
            } else if(currentYear >= 1980){
                text.innerHTML =
                "NAME: Soviet Russia" + 
                "<br>POPULATION: 265,926,000" +
                "<br>GDP: $3,376,788,722,191";
            } else if(currentYear >= 1970){
                text.innerHTML =
                "NAME: Soviet Russia" + 
                "<br>POPULATION: 241,720,134" +
                "<br>GDP: $2,670,605,721,145";
            } else if(currentYear >= 1960){
                text.innerHTML =
                "NAME: Soviet Russia" + 
                "<br>POPULATION: 213,780,000" +
                "<br>GDP: $1,666,137,083,514";
            } else if(currentYear >= 1950){
                text.innerHTML =
                "NAME: Soviet Russia" + 
                "<br>POPULATION: 181,304,750" +
                "<br>GDP: $989,441,960,131";
            } else if(currentYear >= 1940){
                text.innerHTML =
                "NAME: Soviet Russia" + 
                "<br>POPULATION: 188,581,000" +
                "<br>GDP: $829,976,309,668";
            } else if(currentYear >= 1930){
                text.innerHTML =
                "NAME: Soviet Russia" + 
                "<br>POPULATION: 168,832,000" +
                "<br>GDP: $498,362,087,131";
            } else if(currentYear >= 1920){
                text.innerHTML =
                "NAME: Soviet Russia" + 
                "<br>POPULATION: 168,832,000" +
                "<br>GDP: $175,723,406,510";
            } else if(currentYear >= 1910){
                text.innerHTML =
                "NAME: Russian Empire" + 
                "<br>POPULATION: 160,700,000" +
                "<br>GDP: $452,063,803,335";
            } else if(currentYear >= 1900){
                text.innerHTML =
                "NAME: Russian Empire" + 
                "<br>POPULATION: 132,900,000" +
                "<br>GDP: $344,252,980,380";
            } else if(currentYear >= 1890){
                text.innerHTML =
                "NAME: Russian Empire" + 
                "<br>POPULATION: 117,800,000" +
                "<br>GDP: $226,950,090,790";
            } else if(currentYear >= 1880){
                text.innerHTML =
                "NAME: Russian Empire" + 
                "<br>POPULATION: 97,700,000" +
                "<br>GDP: $180,282,752,749";
            } else if(currentYear >= 1870){
                text.innerHTML =
                "NAME: Russian Empire" + 
                "<br>POPULATION: 84,500,000" +
                "<br>GDP: $124,052,074,195";
            } else if(currentYear >= 1850){
                text.innerHTML =
                "NAME: Russian Empire" + 
                "<br>POPULATION: 68,500,000" +
                "<br>GDP: $89,829,479,578";
            } else if(currentYear >= 1830){
                text.innerHTML =
                "NAME: Russian Empire" + 
                "<br>POPULATION: 56,100,000" +
                "<br>GDP: $59,187,056,820";
            } else if(currentYear >= 1820){
                text.innerHTML =
                "NAME: Russian Empire" + 
                "<br>POPULATION: 48,600,000" +
                "<br>GDP: $47,847,473,857";
            } else if(currentYear >= 1800){
                text.innerHTML =
                "NAME: Russian Empire" + 
                "<br>POPULATION: 35,005,000" +
                "<br>GDP: $40,687,714,424";
            } else if(currentYear >= 1750){
                text.innerHTML =
                "NAME: Russian Empire" + 
                "<br>POPULATION: 34,000,000" +
                "<br>GDP: $25,573,026,090";
            } else if(currentYear >= 1700){
                text.innerHTML =
                "NAME: Tsardom of Russia" + 
                "<br>POPULATION: 13,616,000" +
                "<br>GDP: $22,211,525,717";
            } else if(currentYear >= 1650){
                text.innerHTML =
                "NAME: Tsardom of Russia" + 
                "<br>POPULATION: 15,000,000" +
                "<br>GDP: $12,494,343,046";
            } else {
                text.innerHTML = 
                "Not Enough Data"
            }
        } else if(fillColor === Indonesia) {
            data.style.display = "flex"; 
            if(currentYear >= 2022){
                text.innerHTML =
                "NAME: Indonesia" + 
                "<br>POPULATION: 275,501,339" +
                "<br>GDP: $3,794,845,000,000";
            } else if(currentYear >= 2020){
                text.innerHTML =
                "NAME: Indonesia" + 
                "<br>POPULATION: 273,523,615" +
                "<br>GDP: $3,302,377,000,000";
            } else if(currentYear >= 2010){
                text.innerHTML =
                "NAME: Indonesia" + 
                "<br>POPULATION: 237,641,326" +
                "<br>GDP: $2,498,445,382,605";
            } else if(currentYear >= 2000){
                text.innerHTML =
                "NAME: Indonesia" + 
                "<br>POPULATION: 214,072,000" +
                "<br>GDP: $1,410,774,476,098";
            } else if(currentYear >= 1990){
                text.innerHTML =
                "NAME: Indonesia" + 
                "<br>POPULATION: 182,918,000" +
                "<br>GDP: $890,607,735,939";
            } else if(currentYear >= 1980){
                text.innerHTML =
                "NAME: Indonesia" + 
                "<br>POPULATION: 148,819,000" +
                "<br>GDP: $544,948,769,844";
            } else if(currentYear >= 1970){
                text.innerHTML =
                "NAME: Indonesia" + 
                "<br>POPULATION: 115,228,000" +
                "<br>GDP: $273,709,219,021";
            } else if(currentYear >= 1960){
                text.innerHTML =
                "NAME: Indonesia" + 
                "<br>POPULATION: 88,383,000" +
                "<br>GDP: $191,849,316,970";
            } else if(currentYear >= 1950){
                text.innerHTML =
                "NAME: Indonesia" + 
                "<br>POPULATION: 69,543,321" +
                "<br>GDP: $131,064,245,251";
            } else if(currentYear >= 1500 && currentYear <= 1550){
                text.innerHTML =
                "NAME: Majapahit Empire" + 
                "<br>POPULATION: 3,999,999" +
                "<br>GDP: $10,069,646,015";
            } else {
                text.innerHTML = 
                "Not Enough Data"
            }
        } else if(fillColor === Brazil) {
            data.style.display = "flex"; 
            if(currentYear >= 2022){
                text.innerHTML =
                "NAME: Brazil" + 
                "<br>POPULATION: 215,313,498" +
                "<br>GDP: $3,491,092,000,000";
            } else if(currentYear >= 2020){
                text.innerHTML =
                "NAME: Brazil" + 
                "<br>POPULATION: 212,559,417" +
                "<br>GDP: $3,153,597,000,000";
            } else if(currentYear >= 2010){
                text.innerHTML =
                "NAME: Brazil" + 
                "<br>POPULATION: 193,252,604" +
                "<br>GDP: $3,491,283,227,609";
            } else if(currentYear >= 2000){
                text.innerHTML =
                "NAME: Brazil" + 
                "<br>POPULATION: 169,544,443" +
                "<br>GDP: $2,149,728,337,631";
            } else if(currentYear >= 1990){
                text.innerHTML =
                "NAME: Brazil" + 
                "<br>POPULATION: 151,170,000" +
                "<br>GDP: $146,934,431,1435";
            } else if(currentYear >= 1980){
                text.innerHTML =
                "NAME: Brazil" + 
                "<br>POPULATION: 119,070,865" +
                "<br>GDP: $1,257,790,039,446";
            } else if(currentYear >= 1970){
                text.innerHTML =
                "NAME: Brazil" + 
                "<br>POPULATION: 93,139,037" +
                "<br>GDP: $549,692,973,719";
            } else if(currentYear >= 1960){
                text.innerHTML =
                "NAME: Brazil" + 
                "<br>POPULATION: 70,119,071" +
                "<br>GDP: $301,956,761,811";
            } else if(currentYear >= 1950){
                text.innerHTML =
                "NAME: Brazil" + 
                "<br>POPULATION: 53,974,727" +
                "<br>GDP: $148,113,670,304";
            }  else if(currentYear >= 1940){
                text.innerHTML =
                "NAME: Brazil" + 
                "<br>POPULATION: 41,165,289" +
                "<br>GDP: $82,044,245,088";
            }  else if(currentYear >= 1930){
                text.innerHTML =
                "NAME: Brazil" + 
                "<br>POPULATION: 33,568,000" +
                "<br>GDP: $56,168,360,928";
            } else {
                text.innerHTML = 
                "Not Enough Data"
            }
        } else if(fillColor === France) {
            data.style.display = "flex"; 
            if(currentYear >= 2022){
                text.innerHTML =
                "NAME: France" + 
                "<br>POPULATION: 67,651,021" +
                "<br>GDP: $3,444,471,000,000";
            } else if(currentYear >= 2020){
                text.innerHTML =
                "NAME: France" + 
                "<br>POPULATION: 65,273,511" +
                "<br>GDP: $3,115,307,000,000";
            } else if(currentYear >= 2010){
                text.innerHTML =
                "NAME: France" + 
                "<br>POPULATION: 62,791,013" +
                "<br>GDP: $2,901,968,845,554";
            } else if(currentYear >= 2000){
                text.innerHTML =
                "NAME: France" + 
                "<br>POPULATION: 60,910,000" +
                "<br>GDP: $2,518,528,534,081";
            } else if(currentYear >= 1990){
                text.innerHTML =
                "NAME: France" + 
                "<br>POPULATION: 58,240,000" +
                "<br>GDP: $2,028,007,466,423";
            } else if(currentYear >= 1980){
                text.innerHTML =
                "NAME: France" + 
                "<br>POPULATION: 55,806,000" +
                "<br>GDP: $1,607,728,251,037";
            } else if(currentYear >= 1970){
                text.innerHTML =
                "NAME: France" + 
                "<br>POPULATION: 52,555,000" +
                "<br>GDP: $1,170,617,166,979";
            } else if(currentYear >= 1960){
                text.innerHTML =
                "NAME: French Colonial Empire" + 
                "<br>POPULATION: 100,324,000" +
                "<br>GDP: $772,361,923,886";
            } else if(currentYear >= 1950){
                text.innerHTML =
                "NAME: French Colonial Empire" + 
                "<br>POPULATION: 136,541,842" +
                "<br>GDP: $592,805,412,735";
            } else if(currentYear >= 1940){
                text.innerHTML =
                "NAME: French Colonial Empire" + 
                "<br>POPULATION: 118,643,771" +
                "<br>GDP: $467,589,996,359";
            } else if(currentYear >= 1930){
                text.innerHTML =
                "NAME: French Colonial Empire" + 
                "<br>POPULATION: 108,392,503" +
                "<br>GDP: $489,068,617,947";
            } else if(currentYear >= 1920){
                text.innerHTML =
                "NAME: French Colonial Empire" + 
                "<br>POPULATION: 95,822,892" +
                "<br>GDP: $342,252,761,963";
            } else if(currentYear >= 1910){
                text.innerHTML =
                "NAME: French Colonial Empire" + 
                "<br>POPULATION: 84,694,614" +
                "<br>GDP: $301,936,785,879";
            } else if(currentYear >= 1900){
                text.innerHTML =
                "NAME: French Colonial Empire" + 
                "<br>POPULATION: 76,185,004" +
                "<br>GDP: $281,158,278,682";
            } else if(currentYear >= 1890){
                text.innerHTML =
                "NAME: French Colonial Empire" + 
                "<br>POPULATION: 66,939,690" +
                "<br>GDP: $221,205,708,010";
            } else if(currentYear >= 1880){
                text.innerHTML =
                "NAME: French Colonial Empire" + 
                "<br>POPULATION: 47,800,592" +
                "<br>GDP: $181,436,823,708";
            } else if(currentYear >= 1870){
                text.innerHTML =
                "NAME: French Colonial Empire" + 
                "<br>POPULATION: 46,511,720" +
                "<br>GDP: $156,639,151,773";
            } else if(currentYear >= 1850){
                text.innerHTML =
                "NAME: French Colonial Empire" + 
                "<br>POPULATION: 41,269,057" +
                "<br>GDP: $120,434,690,437";
            } else if(currentYear >= 1830){
                text.innerHTML =
                "NAME: Kingdom of France" + 
                "<br>POPULATION: 34,332,421" +
                "<br>GDP: $79,693,683,756";
            } else if(currentYear >= 1820){
                text.innerHTML =
                "NAME: Kingdom of France" + 
                "<br>POPULATION: 32,706,624" +
                "<br>GDP: $71,387,202,648";
            } else if(currentYear >= 1800){
                text.innerHTML =
                "NAME: Revolutionary France" + 
                "<br>POPULATION: 42,789,622" +
                "<br>GDP: $81,791,749,010";
            } else if(currentYear >= 1750){
                text.innerHTML =
                "NAME: Revolutionary France" + 
                "<br>POPULATION: 47,830,251" +
                "<br>GDP: $83,481,804,177";
            } else if(currentYear >= 1700){
                text.innerHTML =
                "NAME: Revolutionary France" + 
                "<br>POPULATION: 23,525,586" +
                "<br>GDP: $46,859,493,089";
            } else if(currentYear >= 1650){
                text.innerHTML =
                "NAME: Revolutionary France" + 
                "<br>POPULATION: 20,211,025" +
                "<br>GDP: $41,401,232,299";
            } else if(currentYear >= 1600){
                text.innerHTML =
                "NAME: Revolutionary France" + 
                "<br>POPULATION: 18,500,000" +
                "<br>GDP: $36,917,197,872";
            } else if(currentYear >= 1550){
                text.innerHTML =
                "NAME: NAME" + 
                "<br>POPULATION: 16,000,000" +
                "<br>GDP: $30,933,723,884";
            } else if(currentYear >= 1500){
                text.innerHTML =
                "NAME: NAME" + 
                "<br>POPULATION: 16,250,000" +
                "<br>GDP: $31,494,577,738";
            } else {
                text.innerHTML = 
                "Not Enough Data"
            }
        } else if(fillColor === United_Kingdom) {
            data.style.display = "flex"; 
            if(currentYear >= 2022){
                text.innerHTML =
                "NAME: United Kingdom" + 
                "<br>POPULATION: 67,508,936" +
                "<br>GDP: $3,411,255,000,000";
            } else if(currentYear >= 2020){
                text.innerHTML =
                "NAME: United Kingdom" + 
                "<br>POPULATION: 67,886,011" +
                "<br>GDP: $3,019,057,000,000";
            } else if(currentYear >= 2010){
                text.innerHTML =
                "NAME: United Kingdom" + 
                "<br>POPULATION: 62,026,962" +
                "<br>GDP: $2,715,342,195,952";
            } else if(currentYear >= 2000){
                text.innerHTML =
                "NAME: United Kingdom" + 
                "<br>POPULATION: 59,071,743" +
                "<br>GDP: $2,341,885,449,957";
            } else if(currentYear >= 1990){
                text.innerHTML =
                "NAME: United Kingdom" + 
                "<br>POPULATION: 63,002,995" +
                "<br>GDP: $2,063,348,057,633";
            } else if(currentYear >= 1980){
                text.innerHTML =
                "NAME: United Kingdom" + 
                "<br>POPULATION: 69,297,000" +
                "<br>GDP: $1,541,083,825,696";
            } else if(currentYear >= 1970){
                text.innerHTML =
                "NAME: United Kingdom" + 
                "<br>POPULATION: 69,590,000" +
                "<br>GDP: $1,254,817,532,612";
            } else if(currentYear >= 1960){
                text.innerHTML =
                "NAME: British Empire" + 
                "<br>POPULATION: 153,062,000" +
                "<br>GDP: $1097811490226";
            } else if(currentYear >= 1950){
                text.innerHTML =
                "NAME: British Empire" + 
                "<br>POPULATION: 175,679,658" +
                "<br>GDP: $909,079,070,699";
            } else if(currentYear >= 1940){
                text.innerHTML =
                "NAME: British Empire" + 
                "<br>POPULATION: 551,828,046" +
                "<br>GDP: $1,486,944,123,444";
            } else if(currentYear >= 1930){
                text.innerHTML =
                "NAME: British Empire" + 
                "<br>POPULATION: 512,633,209" +
                "<br>GDP: $1,360,292,099,986";
            } else if(currentYear >= 1920){
                text.innerHTML =
                "NAME: British Empire" + 
                "<br>POPULATION: 464,703,484" +
                "<br>GDP: $1,076,157,864,833";
            } else if(currentYear >= 1910){
                text.innerHTML =
                "NAME: British Empire" + 
                "<br>POPULATION: 442,161,984" +
                "<br>GDP: $1,092,263,501,655";
            } else if(currentYear >= 1900){
                text.innerHTML =
                "NAME: British Empire" + 
                "<br>POPULATION: 413,683,519" +
                "<br>GDP: $908,465,698,102";
            } else if(currentYear >= 1890){
                text.innerHTML =
                "NAME: British Empire" + 
                "<br>POPULATION: 377,516,956" +
                "<br>GDP: $775,843,946,871";
            } else if(currentYear >= 1880){
                text.innerHTML =
                "NAME: British Empire" + 
                "<br>POPULATION: 319,861,942" +
                "<br>GDP: $617,900,322,270";
            } else if(currentYear >= 1870){
                text.innerHTML =
                "NAME: British Empire" + 
                "<br>POPULATION: 306,552,299" +
                "<br>GDP: $552,827,062,957";
            } else if(currentYear >= 1850){
                text.innerHTML =
                "NAME: British Empire" + 
                "<br>POPULATION: 283,409,415" +
                "<br>GDP: $460,878,519,858";
            } else if(currentYear >= 1830){
                text.innerHTML =
                "NAME: British Empire" + 
                "<br>POPULATION: 241,859,528" +
                "<br>GDP: $366,106,701,410";
            } else if(currentYear >= 1820){
                text.innerHTML =
                "NAME: British Empire" + 
                "<br>POPULATION: 230,000,000" +
                "<br>GDP: $330,034,264,150";
            } else if(currentYear >= 1800){
                text.innerHTML =
                "NAME: British Empire" + 
                "<br>POPULATION: 92,153,548" +
                "<br>GDP: $186,553,369,083";
            } else if(currentYear >= 1750){
                text.innerHTML =
                "NAME: British Empire" + 
                "<br>POPULATION: 18,799,260" +
                "<br>GDP: $59,744,490,018";
            } else if(currentYear >= 1700){
                text.innerHTML =
                "NAME: England" + 
                "<br>POPULATION: 9,302,239" +
                "<br>GDP: $31,334,145,846";
            } else if(currentYear >= 1650){
                text.innerHTML =
                "NAME: England" + 
                "<br>POPULATION: 8,525,118" +
                "<br>GDP: $18,790,945,199";
            } else if(currentYear >= 1600){
                text.innerHTML =
                "NAME: England" + 
                "<br>POPULATION: 5,600,000" +
                "<br>GDP: $17,519,186,331";
            } else if(currentYear >= 1550){
                text.innerHTML =
                "NAME: England" + 
                "<br>POPULATION: 4,200,000" +
                "<br>GDP: $14,203,579,261";
            } else if(currentYear >= 1500){
                text.innerHTML =
                "NAME: England" + 
                "<br>POPULATION: 2,750,000" +
                "<br>GDP: $8,291,432,837";
            } else {
                text.innerHTML = 
                "Not Enough Data"
            }
        } else if(fillColor === Turkey) {
            data.style.display = "flex"; 
            if(currentYear >= 2022){
                text.innerHTML =
                "NAME: Turkey" + 
                "<br>POPULATION: 85,341,241" +
                "<br>GDP: $2,910,183,000,000";
            } else if(currentYear >= 2020){
                text.innerHTML =
                "NAME: Turkey" + 
                "<br>POPULATION: 84,339,067" +
                "<br>GDP: $2,371,568,000,000";
            } else if(currentYear >= 2010){
                text.innerHTML =
                "NAME: Turkey" + 
                "<br>POPULATION: 73,722,988" +
                "<br>GDP: $1,581,703,157,265";
            } else if(currentYear >= 2000){
                text.innerHTML =
                "NAME: Turkey" + 
                "<br>POPULATION: 67,803,927" +
                "<br>GDP: $1,000,929,480,007";
            } else if(currentYear >= 1990){
                text.innerHTML =
                "NAME: Turkey" + 
                "<br>POPULATION: 56,473,035" +
                "<br>GDP: $603,322,533,152";
            } else if(currentYear >= 1980){
                text.innerHTML =
                "NAME: Turkey" + 
                "<br>POPULATION: 44,736,957" +
                "<br>GDP: $338,918,542,676";
            } else if(currentYear >= 1910 && currentYear <= 1919){
                text.innerHTML =
                "NAME: Ottoman Empire" + 
                "<br>POPULATION: 20,891,662" +
                "<br>GDP: $46,544,886,678";
            } else if(currentYear >= 1900){
                text.innerHTML =
                "NAME: Ottoman Empire" + 
                "<br>POPULATION: 19,413,491" +
                "<br>GDP: $41,612,155,717";
            } else if(currentYear >= 1890){
                text.innerHTML =
                "NAME: Ottoman Empire" + 
                "<br>POPULATION: 15,948,170" +
                "<br>GDP: $38,965,734,406";
            } else if(currentYear >= 1880){
                text.innerHTML =
                "NAME: Ottoman Empire" + 
                "<br>POPULATION: 18,604,531" +
                "<br>GDP: $36,100,266,184";
            } else if(currentYear >= 1870){
                text.innerHTML =
                "NAME: Ottoman Empire" + 
                "<br>POPULATION: 25,334,882" +
                "<br>GDP: $37,358,358,049";
            } else if(currentYear >= 1850){
                text.innerHTML =
                "NAME: Ottoman Empire" + 
                "<br>POPULATION: 29,038,013" +
                "<br>GDP: $49,283,733,673";
            } else if(currentYear >= 1830){
                text.innerHTML =
                "NAME: Ottoman Empire" + 
                "<br>POPULATION: 28,270,270" +
                "<br>GDP: $36,869,258,429";
            } else if(currentYear >= 1820){
                text.innerHTML =
                "NAME: Ottoman Empire" + 
                "<br>POPULATION: 29,418,355" +
                "<br>GDP: $37,653,112,080";
            } else if(currentYear >= 1800){
                text.innerHTML =
                "NAME: Ottoman Empire" + 
                "<br>POPULATION: 26,000,000" +
                "<br>GDP: $36,083,523,604";
            } else if(currentYear >= 1750){
                text.innerHTML =
                "NAME: Ottoman Empire" + 
                "<br>POPULATION: 34,556,183" +
                "<br>GDP: $38,463,814,740";
            } else if(currentYear >= 1700){
                text.innerHTML =
                "NAME: Ottoman Empire" + 
                "<br>POPULATION: 27,519,000" +
                "<br>GDP: $33,021,118,042";
            } else if(currentYear >= 1650){
                text.innerHTML =
                "NAME: Ottoman Empire" + 
                "<br>POPULATION: 30,379,242" +
                "<br>GDP: $34,686,158,596";
            } else if(currentYear >= 1600){
                text.innerHTML =
                "NAME: Ottoman Empire" + 
                "<br>POPULATION: 29,644,500" +
                "<br>GDP: $34,619,798,176";
            } else if(currentYear >= 1550){
                text.innerHTML =
                "NAME: Ottoman Empire" + 
                "<br>POPULATION: 26,948,500" +
                "<br>GDP: $29,427,328,955";
            } else if(currentYear >= 1500){
                text.innerHTML =
                "NAME: Ottoman Empire" + 
                "<br>POPULATION: 12,640,000" +
                "<br>GDP: $338,918,542,676";
            } else {
                text.innerHTML = 
                "Not Enough Data"
            }
        } else if(fillColor === Italy) {
            data.style.display = "flex"; 
            if(currentYear >= 2022){
                text.innerHTML =
                "NAME: Italy" + 
                "<br>POPULATION: 59,037,474" +
                "<br>GDP: $2,765,866,000,000";
            } else if(currentYear >= 2020){
                text.innerHTML =
                "NAME: Italy" + 
                "<br>POPULATION: 60,461,826" +
                "<br>GDP: $2,491,740,000,000";
            } else if(currentYear >= 2010){
                text.innerHTML =
                "NAME: Italy" + 
                "<br>POPULATION: 60,340,328" +
                "<br>GDP: $2,555,378,233,657";
            } else if(currentYear >= 2000){
                text.innerHTML =
                "NAME: Italy" + 
                "<br>POPULATION: 56,940,000" +
                "<br>GDP: $2,310,044,384,765";
            } else if(currentYear >= 1990){
                text.innerHTML =
                "NAME: Italy" + 
                "<br>POPULATION: 56,720,000" +
                "<br>GDP: $1,828,802,783,558";
            } else if(currentYear >= 1980){
                text.innerHTML =
                "NAME: Italy" + 
                "<br>POPULATION: 56,430,000" +
                "<br>GDP: $1,466,470,470,259";
            } else if(currentYear >= 1970){
                text.innerHTML =
                "NAME: Italy" + 
                "<br>POPULATION: 53,820,000" +
                "<br>GDP: $1,030,379,892,324";
            } else if(currentYear >= 1960){
                text.innerHTML =
                "NAME: Italy" + 
                "<br>POPULATION: 49,699,946" +
                "<br>GDP: $586,717,756,375";
            } else if(currentYear >= 1950){
                text.innerHTML =
                "NAME: Italy" + 
                "<br>POPULATION: 48,503,933" +
                "<br>GDP: $325,902,705,034";
            } else if(currentYear >= 1940){
                text.innerHTML =
                "NAME: Kingdom of Italy" + 
                "<br>POPULATION: 65,391,132" +
                "<br>GDP: $298,071,393,255";
            } else if(currentYear >= 1930){
                text.innerHTML =
                "NAME: Kingdom of Italy" + 
                "<br>POPULATION: 44,490,120" +
                "<br>GDP: $239,821,863,175";
            } else if(currentYear >= 1920){
                text.innerHTML =
                "NAME: Kingdom of Italy" + 
                "<br>POPULATION: 38,680,800" +
                "<br>GDP: $179,725,677,056";
            } else if(currentYear >= 1910){
                text.innerHTML =
                "NAME: Kingdom of Italy" + 
                "<br>POPULATION: 35,432,895" +
                "<br>GDP: $173,566,218,811";
            } else if(currentYear >= 1900){
                text.innerHTML =
                "NAME: Kingdom of Italy" + 
                "<br>POPULATION: 35,189,616" +
                "<br>GDP: $136,222,920,708";
            } else if(currentYear >= 1890){
                text.innerHTML =
                "NAME: Kingdom of Italy" + 
                "<br>POPULATION: 33,188,957" +
                "<br>GDP: $116,858,081,137";
            } else if(currentYear >= 1880){
                text.innerHTML =
                "NAME: Kingdom of Italy" + 
                "<br>POPULATION: 29,534,000" +
                "<br>GDP: $102,350,639,967";
            } else if(currentYear >= 1870){
                text.innerHTML =
                "NAME: Kingdom of Italy" + 
                "<br>POPULATION: 25,504,197" +
                "<br>GDP: $91,292,872,976";
            } else if(currentYear >= 1850){
                text.innerHTML =
                "NAME: Sardinia Piedmont" + 
                "<br>POPULATION: 4,320,000" +
                "<br>GDP: $18,494,844,337";
            } else if(currentYear >= 1830){
                text.innerHTML =
                "NAME: Sardinia Piedmont" + 
                "<br>POPULATION: 3,692,308" +
                "<br>GDP: $16,553,120,918";
            } else if(currentYear >= 1820){
                text.innerHTML =
                "NAME: Sardinia Piedmont" + 
                "<br>POPULATION: 3,819,600" +
                "<br>GDP: $15,571,112,357";
            } else {
                text.innerHTML = 
                "Not Enough Data"
            }
        } else if(fillColor === Mexico) {
            data.style.display = "flex"; 
            if(currentYear >= 2022){
                text.innerHTML =
                "NAME: Mexico" + 
                "<br>POPULATION: 127,504,126" +
                "<br>GDP: $2,753,202,000,000";
            } else if(currentYear >= 2020){
                text.innerHTML =
                "NAME: Mexico" + 
                "<br>POPULATION: 128,932,753" +
                "<br>GDP: $2,428,201,000,000";
            } else if(currentYear >= 2010){
                text.innerHTML =
                "NAME: Mexico" + 
                "<br>POPULATION: 112,336,538" +
                "<br>GDP: $2,029,895,317,848";
            } else if(currentYear >= 2000){
                text.innerHTML =
                "NAME: Mexico" + 
                "<br>POPULATION: 97,483,412" +
                "<br>GDP: $1,538,359,576,947";
            } else if(currentYear >= 1990){
                text.innerHTML =
                "NAME: Mexico" + 
                "<br>POPULATION: 81,249,645" +
                "<br>GDP: $1,020,792,295,864";
            } else if(currentYear >= 1980){
                text.innerHTML =
                "NAME: Mexico" + 
                "<br>POPULATION: 66,846,833" +
                "<br>GDP: 841,116,383,061";
            } else if(currentYear >= 1970){
                text.innerHTML =
                "NAME: Mexico" + 
                "<br>POPULATION: 48,225,238" +
                "<br>GDP: $449,578,683,029";
            } else if(currentYear >= 1960){
                text.innerHTML =
                "NAME: Mexico" + 
                "<br>POPULATION: 34,923,129" +
                "<br>GDP: $225,839,569,173";
            } else if(currentYear >= 1950){
                text.innerHTML =
                "NAME: Mexico" + 
                "<br>POPULATION: 25,791,017" +
                "<br>GDP: $123,923,726,664";
            } else if(currentYear >= 1940){
                text.innerHTML =
                "NAME: Mexico" + 
                "<br>POPULATION: 19,763,000" +
                "<br>GDP: $64,707,140,692";
            } else if(currentYear >= 1920 && currentYear <= 1930){
                text.innerHTML =
                "NAME: Mexico" + 
                "<br>POPULATION: 15,000,000" +
                "<br>GDP: $47,130,067,673,O18";
            } else if(currentYear >= 1910){
                text.innerHTML =
                "NAME: Mexico" + 
                "<br>POPULATION: 13,607,272" +
                "<br>GDP: $41,645,722,629";
            } else if(currentYear >= 1900){
                text.innerHTML =
                "NAME: Mexico" + 
                "<br>POPULATION: 11,729,000" +
                "<br>GDP: $30,728,536,888";
            } else if(currentYear >= 1890){
                text.innerHTML =
                "NAME: Mexico" + 
                "<br>POPULATION: 10,399,000" +
                "<br>GDP: $22,794,925,100";
            } else if(currentYear >= 1880){
                text.innerHTML =
                "NAME: Mexico" + 
                "<br>POPULATION: 9,219,000" +
                "<br>GDP: $16,846,057,964";
            } else {
                text.innerHTML = 
                "Not Enough Data"
            }
        } else if(fillColor === South_Korea) {
            data.style.display = "flex"; 
            if(currentYear >= 2022){
                text.innerHTML =
                "NAME: South Korea" + 
                "<br>POPULATION: 51,628,117" +
                "<br>GDP: $2,561,887,000,000";
            } else if(currentYear >= 2020){
                text.innerHTML =
                "NAME: South Korea" + 
                "<br>POPULATION: 51,836,239" +
                "<br>GDP: $2,233,001,000,000";
            } else if(currentYear >= 2010){
                text.innerHTML =
                "NAME: South Korea" + 
                "<br>POPULATION: 49,410,366" +
                "<br>GDP: $1,937,064,090,625";
            } else if(currentYear >= 2000){
                text.innerHTML =
                "NAME: South Korea" + 
                "<br>POPULATION: 47,258,111" +
                "<br>GDP: $1,346,372,578,722";
            } else if(currentYear >= 1700 && currentYear <= 1750){
                text.innerHTML =
                "NAME: Joseon Korea" + 
                "<br>POPULATION: 12,200,000" +
                "<br>GDP: $10,577,751,441";
            } else if(currentYear >= 1600 && currentYear <= 1650){
                text.innerHTML =
                "NAME: Joseon Korea" + 
                "<br>POPULATION: 11,000,000" +
                "<br>GDP: $9,142,837,058";
            } else if(currentYear >= 1550){
                text.innerHTML =
                "NAME: Joseon Korea" + 
                "<br>POPULATION: 9,500,000" +
                "<br>GDP: $8,443,604,545";
            } else if(currentYear >= 1500){
                text.innerHTML =
                "NAME: Joseon Korea" + 
                "<br>POPULATION: 8,000,000" +
                "<br>GDP: $7,744,372,031";
            } else {
                text.innerHTML = 
                "Not Enough Data"
            }
        } else if(fillColor === Canada) {
            data.style.display = "flex"; 
            if(currentYear >= 2022){
                text.innerHTML =
                "NAME: Canada" + 
                "<br>POPULATION: 38,939,056" +
                "<br>GDP: $2,117,759,000,000";
            } else if(currentYear >= 2020){
                text.innerHTML =
                "NAME: Canada" + 
                "<br>POPULATION: 38,028,638" +
                "<br>GDP: $1,827,010,000,000";
            } else if(currentYear >= 2010){
                text.innerHTML =
                "NAME: Canada" + 
                "<br>POPULATION: 34,005,905" +
                "<br>GDP: $1,744,424,023,018";
            } else if(currentYear >= 2000){
                text.innerHTML =
                "NAME: Canada" + 
                "<br>POPULATION: 30,685,730" +
                "<br>GDP: $1,411,361,255,654";
            } else if(currentYear >= 1990){
                text.innerHTML =
                "NAME: Canada" + 
                "<br>POPULATION: 27,691,138" +
                "<br>GDP: $1,036,196,225,666";
            } else if(currentYear >= 1980){
                text.innerHTML =
                "NAME: Canada" + 
                "<br>POPULATION: 24,515,667" +
                "<br>GDP: $785,946,396,687";
            } else if(currentYear >= 1970){
                text.innerHTML =
                "NAME: Canada" + 
                "<br>POPULATION: 21,324,000" +
                "<br>GDP: $517,785,545,572";
            } else if(currentYear >= 1960){
                text.innerHTML =
                "NAME: Canada" + 
                "<br>POPULATION: 17,909,000" +
                "<br>GDP: $315,889,231,482";
            } else if(currentYear >= 1950){
                text.innerHTML =
                "NAME: Canada" + 
                "<br>POPULATION: 13,733,398" +
                "<br>GDP: $201,827,866,370";
            } else if(currentYear >= 1940){
                text.innerHTML =
                "NAME: Canada" + 
                "<br>POPULATION: 11,382,000" +
                "<br>GDP: $123,963,223,170";
            } else {
                text.innerHTML = 
                "Not Enough Data"
            }
        } else if(fillColor === Nigeria) {
            data.style.display = "flex"; 
            if(currentYear >= 2022){
                text.innerHTML =
                "NAME: Nigeria" + 
                "<br>POPULATION: 218,541,212" +
                "<br>GDP: $1,199,211,000,000";
            } else if(currentYear >= 2020){
                text.innerHTML =
                "NAME: Nigeria" + 
                "<br>POPULATION: 206,139,589" +
                "<br>GDP: $1,069,189,000,000";
            } else if(currentYear >= 2010){
                text.innerHTML =
                "NAME: Nigeria" + 
                "<br>POPULATION: 158,258,917" +
                "<br>GDP: $1,004,071,158,955";
            } else if(currentYear >= 2000){
                text.innerHTML =
                "NAME: Nigeria" + 
                "<br>POPULATION: 121,235,000" +
                "<br>GDP: $332,366,369,077";
            } else if(currentYear >= 1990){
                text.innerHTML =
                "NAME: Nigeria" + 
                "<br>POPULATION: 93,963,000" +
                "<br>GDP: $212,292,655,609";
            } else if(currentYear >= 1980){
                text.innerHTML =
                "NAME: Nigeria" + 
                "<br>POPULATION: 71,828,000" +
                "<br>GDP: $192,893,666,509";
            } else if(currentYear >= 1970){
                text.innerHTML =
                "NAME: Nigeria" + 
                "<br>POPULATION: 54,945,000" +
                "<br>GDP: $120,155,326,690";
            } else {
                text.innerHTML = 
                "Not Enough Data"
            }
        } else if(fillColor === South_Africa) {
            data.style.display = "flex"; 
            if(currentYear >= 2022){
                text.innerHTML =
                "NAME: South Africa" + 
                "<br>POPULATION: 59,893,886" +
                "<br>GDP: $952,603,000,000";
            } else if(currentYear >= 2020){
                text.innerHTML =
                "NAME: South Africa" + 
                "<br>POPULATION: 59,308,690" +
                "<br>GDP: $798,957,000,000";
            } else if(currentYear >= 2010){
                text.innerHTML =
                "NAME: South Africa" + 
                "<br>POPULATION: 49,991,300" +
                "<br>GDP: $716,720,101,390";
            } else if(currentYear >= 2000){
                text.innerHTML =
                "NAME: South Africa" + 
                "<br>POPULATION: 44,968,000" +
                "<br>GDP: $421,836,720,793";
            } else if(currentYear >= 1990){
                text.innerHTML =
                "NAME: South Africa" + 
                "<br>POPULATION: 36,793,490" +
                "<br>GDP: $291,429,374,843";
            } else if(currentYear >= 1980){
                text.innerHTML =
                "NAME: South Africa" + 
                "<br>POPULATION: 30,090,143" +
                "<br>GDP: $261,975,752,336";
            } else if(currentYear >= 1970){
                text.innerHTML =
                "NAME: South Africa" + 
                "<br>POPULATION: 23,263,512" +
                "<br>GDP: $187,582,969,255";
            } else {
                text.innerHTML = 
                "Not Enough Data"
            }
        } else if(fillColor === Ethiopia) {
            data.style.display = "flex"; 
            if(currentYear >= 2022){
                text.innerHTML =
                "NAME: Ethiopia" + 
                "<br>POPULATION: 23,263,512" +
                "<br>GDP: $346,893,000,000";
            } else if(currentYear >= 2020){
                text.innerHTML =
                "NAME: Ethiopia" + 
                "<br>POPULATION: 114,963,588" +
                "<br>GDP: $282,904,000,000";
            } else if(currentYear >= 2010){
                text.innerHTML =
                "NAME: Ethiopia" + 
                "<br>POPULATION: 83,483,000" +
                "<br>GDP: $116,652,861,923";
            } else if(currentYear >= 2000){
                text.innerHTML =
                "NAME: Ethiopia" + 
                "<br>POPULATION: 67,032,000" +
                "<br>GDP: $62,399,714,809";
            } else if(currentYear >= 1990){
                text.innerHTML =
                "NAME: Ethiopia" + 
                "<br>POPULATION: 51,666,622" +
                "<br>GDP: $55,813,709,019";
            } else if(currentYear >= 1980){
                text.innerHTML =
                "NAME: Ethiopia" + 
                "<br>POPULATION: 36,602,982" +
                "<br>GDP: $47,201,680,964";
            } else if(currentYear >= 1880 && currentYear <= 1890){
                text.innerHTML =
                "NAME: Ethiopian Empire" + 
                "<br>POPULATION: 6,830,000" +
                "<br>GDP: $3,133,870,326";
            } else if(currentYear >= 1870){
                text.innerHTML =
                "NAME: Ethiopian Empire" + 
                "<br>POPULATION: 5,960,000" +
                "<br>GDP: $2,852,574,759";
            } else if(currentYear >= 1850){
                text.innerHTML =
                "NAME: Ethiopian Empire" + 
                "<br>POPULATION: 4,520,000" +
                "<br>GDP: $2,648,819,419";
            } else if(currentYear >= 1830){
                text.innerHTML =
                "NAME: Ethiopian Empire" + 
                "<br>POPULATION: 3,410,000" +
                "<br>GDP: $2,512,982,526";
            } else if(currentYear >= 1820){
                text.innerHTML =
                "NAME: Ethiopian Empire" + 
                "<br>POPULATION: 3,154,000" +
                "<br>GDP: $2,445,064,079";
            } else if(currentYear >= 1800){
                text.innerHTML =
                "NAME: Ethiopian Empire" + 
                "<br>POPULATION: 2,950,000" +
                "<br>GDP: $2,373,509,239";
            } else if(currentYear >= 1750){
                text.innerHTML =
                "NAME: Ethiopian Empire" + 
                "<br>POPULATION: 2,644,000" +
                "<br>GDP: $2,194,622,139";
            } else if(currentYear >= 1700){
                text.innerHTML =
                "NAME: Ethiopian Empire" + 
                "<br>POPULATION: 2,338,000" +
                "<br>GDP: $2,015,735,038";
            } else if(currentYear >= 1650){
                text.innerHTML =
                "NAME: Ethiopian Empire" + 
                "<br>POPULATION: 2,221,000" +
                "<br>GDP: $1,925,685,422";
            } else if(currentYear >= 1600){
                text.innerHTML =
                "NAME: Ethiopian Empire" + 
                "<br>POPULATION: TEX2,104,000T" +
                "<br>GDP: $1,835,635,807";
            } else if(currentYear >= 1550){
                text.innerHTML =
                "NAME: Ethiopian Empire" + 
                "<br>POPULATION: 1,987,000" +
                "<br>GDP: $1,675,712,694";
            } else if(currentYear >= 1500){
                text.innerHTML =
                "NAME: Ethiopian Empire" + 
                "<br>POPULATION: 1,870,000" +
                "<br>GDP: $1,515,789,581";
            } else {
                text.innerHTML = 
                "Not Enough Data"
            }
        } else if(fillColor === DR_Congo) {
            data.style.display = "flex"; 
            if(currentYear >= 2022){
                text.innerHTML =
                "NAME: DR Congo" + 
                "<br>POPULATION: 99,010,212" +
                "<br>GDP: $120,533,000,000";
            } else if(currentYear >= 2020){
                text.innerHTML =
                "NAME: DR Congo" + 
                "<br>POPULATION: 89,561,403" +
                "<br>GDP: $101,302,000,000";
            } else if(currentYear >= 2010){
                text.innerHTML =
                "NAME: DR Congo" + 
                "<br>POPULATION: 67,827,496" +
                "<br>GDP: $57,280,654,809";
            } else if(currentYear >= 2000){
                text.innerHTML =
                "NAME: DR Congo" + 
                "<br>POPULATION: 48,616,317" +
                "<br>GDP: $27,084,280,838";
            } else if(currentYear >= 1990){
                text.innerHTML =
                "NAME: Zaire" + 
                "<br>POPULATION: 35,987,541" +
                "<br>GDP: $39,346,793,218";
            } else if(currentYear >= 1980){
                text.innerHTML =
                "NAME: Zaire" + 
                "<br>POPULATION: 26,708,686" +
                "<br>GDP: $34,270,201,939";
            } else if(currentYear >= 1970){
                text.innerHTML =
                "NAME: DR Congo" + 
                "<br>POPULATION: 20,151,733" +
                "<br>GDP: $33,043,828,367";
            } else {
                text.innerHTML = 
                "Not Enough Data"
            }
        } else if(fillColor === Australia) {
            data.style.display = "flex"; 
            if(currentYear >= 2022){
                text.innerHTML =
                "NAME: Australia" + 
                "<br>POPULATION: 26,268,359" +
                "<br>GDP: $1,527,230,000,000";
            } else if(currentYear >= 2020){
                text.innerHTML =
                "NAME: Australia" + 
                "<br>POPULATION: 25,694,400" +
                "<br>GDP: $1,349,040,000,000";
            } else if(currentYear >= 2010){
                text.innerHTML =
                "NAME: Australia" + 
                "<br>POPULATION: 22,031,900" +
                "<br>GDP: $1,232,116,467,799";
            } else if(currentYear >= 2000){
                text.innerHTML =
                "NAME: Australia" + 
                "<br>POPULATION: 19,153,400" +
                "<br>GDP: $857,542,327,403";
            } else if(currentYear >= 1990){
                text.innerHTML =
                "NAME: Australia" + 
                "<br>POPULATION: 17,065,100" +
                "<br>GDP: $575,276,893,033";
            } else if(currentYear >= 1980){
                text.innerHTML =
                "NAME: Australia" + 
                "<br>POPULATION: 14,695,400" +
                "<br>GDP: $416,158,210,003";
            } else if(currentYear >= 1970){
                text.innerHTML =
                "NAME: Australia" + 
                "<br>POPULATION: 12,407,000" +
                "<br>GDP: $300,743,544,823";
            } else if(currentYear >= 1950 && currentYear <= 1960){
                text.innerHTML =
                "NAME: Australia" + 
                "<br>POPULATION: 8,045,000" +
                "<br>GDP: $121,063,378,207";
            } else {
                text.innerHTML = 
                "Not Enough Data"
            }
        } else if(fillColor === Kazakhstan) {
            data.style.display = "flex"; 
            if(currentYear >= 2022){
                text.innerHTML =
                "NAME: Kazakhstan" + 
                "<br>POPULATION: 19,765,004" +
                "<br>GDP: $604,551,000,000";
            } else if(currentYear >= 2020){
                text.innerHTML =
                "NAME: Kazakhstan" + 
                "<br>POPULATION: 18,632,000" +
                "<br>GDP: $501,798,000,000";
            } else if(currentYear >= 2010){
                text.innerHTML =
                "NAME: Kazakhstan" + 
                "<br>POPULATION: 16,322,000" +
                "<br>GDP: $413,278,597,920";
            } else if(currentYear >= 2000){
                text.innerHTML =
                "NAME: Kazakhstan" + 
                "<br>POPULATION: 14,915,000" +
                "<br>GDP: $176,936,705,060";
            } else {
                text.innerHTML = 
                "Not Enough Data"
            }
        } else if(fillColor === Spain) {
            data.style.display = "flex"; 
            if(currentYear >= 2000){
                text.innerHTML =
                "NAME: Spain" + 
                "<br>POPULATION: 40,264,000" +
                "<br>GDP: $1,374,232,793,741";
            } else if(currentYear >= 1990){
                text.innerHTML =
                "NAME: Spain" + 
                "<br>POPULATION: 38,851,000" +
                "<br>GDP: $937,189,225,331";
            } else if(currentYear >= 1980){
                text.innerHTML =
                "NAME: Spain" + 
                "<br>POPULATION: 37,527,000" +
                "<br>GDP: $650,877,905,289";
            } else if(currentYear >= 1970){
                text.innerHTML =
                "NAME: Francoist Spain" + 
                "<br>POPULATION: 34,032,921" +
                "<br>GDP: $399,346,084,627";
            } else if(currentYear >= 1940){
                text.innerHTML =
                "NAME: Francoist Spain" + 
                "<br>POPULATION: 27,379,420" +
                "<br>GDP: $101,677,950,775";
            } else if(currentYear >= 1930){
                text.innerHTML =
                "NAME: Spain" + 
                "<br>POPULATION: 24,843,165" +
                "<br>GDP: $114,374,201,852";
            } else if(currentYear >= 1920){
                text.innerHTML =
                "NAME: Spain" + 
                "<br>POPULATION: 22,331,231" +
                "<br>GDP: $85,653,951,933";
            } else if(currentYear >= 1910){
                text.innerHTML =
                "NAME: Spain" + 
                "<br>POPULATION: 20,330,559" +
                "<br>GDP: $69,715,653,705";
            } else if(currentYear >= 1900){
                text.innerHTML =
                "NAME: Spain" + 
                "<br>POPULATION: 18,815,630" +
                "<br>GDP: $61,787,853,621";
            } else if(currentYear >= 1890){
                text.innerHTML =
                "NAME: Spanish Empire" + 
                "<br>POPULATION: 26,857,900" +
                "<br>GDP: $67,365,929,526";
            } else if(currentYear >= 1880){
                text.innerHTML =
                "NAME: Spanish Empire" + 
                "<br>POPULATION: 24,310,704" +
                "<br>GDP: $63,447,944,597";
            } else if(currentYear >= 1870){
                text.innerHTML =
                "NAME: Spanish Empire" + 
                "<br>POPULATION: 23,386,970" +
                "<br>GDP: $45,420,476,309";
            } else if(currentYear >= 1850){
                text.innerHTML =
                "NAME: Spanish Empire" + 
                "<br>POPULATION: 22,319,372" +
                "<br>GDP: $37,794,331,556";
            } else if(currentYear >= 1830){
                text.innerHTML =
                "NAME: Spanish Empire" + 
                "<br>POPULATION: 16,742,947" +
                "<br>GDP: $31,694,563,777";
            } else if(currentYear >= 1820){
                text.innerHTML =
                "NAME: Spanish Empire" + 
                "<br>POPULATION: 26,815,697" +
                "<br>GDP: $39,931,088,068";
            } else if(currentYear >= 1800){
                text.innerHTML =
                "NAME: Spanish Empire" + 
                "<br>POPULATION: 26,580,300" +
                "<br>GDP: $53,646,182,394";
            } else if(currentYear >= 1750){
                text.innerHTML =
                "NAME: Spanish Empire" + 
                "<br>POPULATION: 22,402,347" +
                "<br>GDP: $38,842,843,999";
            } else if(currentYear >= 1700){
                text.innerHTML =
                "NAME: Spanish Empire" + 
                "<br>POPULATION: 24,530,000" +
                "<br>GDP: $56,995,384,657";
            } else if(currentYear >= 1650){
                text.innerHTML =
                "NAME: Spanish Empire" + 
                "<br>POPULATION: 26,408,500" +
                "<br>GDP: $50,690,979,215";
            } else if(currentYear >= 1600){
                text.innerHTML =
                "NAME: Spanish Empire" + 
                "<br>POPULATION: 33,521,043" +
                "<br>GDP: $55,884,941,719";
            } else if(currentYear >= 1550){
                text.innerHTML =
                "NAME: Spanish Empire" + 
                "<br>POPULATION: 26,510,177" +
                "<br>GDP: $39,990,387,586";
            } else if(currentYear >= 1500){
                text.innerHTML =
                "NAME: Castile" + 
                "<br>POPULATION: 7,294,000" +
                "<br>GDP: $12,358,486,896";
            } else {
                text.innerHTML = 
                "Not Enough Data"
            }
        } else if(fillColor === East_Germany) {
            data.style.display = "flex"; 
            if(currentYear >= 1990){
                text.innerHTML =
                "NAME: East Germany" + 
                "<br>POPULATION: 16,111,000" +
                "<br>GDP: $953,317,680,843";
            } else if(currentYear >= 1980){
                text.innerHTML =
                "NAME: East Germany" + 
                "<br>POPULATION: 16,740,000" +
                "<br>GDP: $833,147,748,268";
            } else if(currentYear >= 1970){
                text.innerHTML =
                "NAME: East Germany" + 
                "<br>POPULATION: 17,068,318" +
                "<br>GDP: $635,623,243,856";
            } else if(currentYear >= 1960){
                text.innerHTML =
                "NAME: East Germany" + 
                "<br>POPULATION: 17,188,000" +
                "<br>GDP: $421,056,152,181";
            } else if(currentYear >= 1950){
                text.innerHTML =
                "NAME: East Germany" + 
                "<br>POPULATION: 18,388,172" +
                "<br>GDP: $200,057,115,532";
            } else {
                text.innerHTML = 
                "Not Enough Data"
            }
        } else if(fillColor === Algeria) {
            data.style.display = "flex"; 
            if(currentYear >= 1990){
                text.innerHTML =
                "NAME: Algeria" + 
                "<br>POPULATION: 25,022,000" +
                "<br>GDP: $146,061,257,920";
            } else if(currentYear >= 1980){
                text.innerHTML =
                "NAME: Algeria" + 
                "<br>POPULATION: 19,475,000" +
                "<br>GDP: $117,105,471,603";
            } else if(currentYear >= 1970){
                text.innerHTML =
                "NAME: Algeria" + 
                "<br>POPULATION: 14,691,000" +
                "<br>GDP: $61,906,143,586";
            } else {
                text.innerHTML = 
                "Not Enough Data"
            }
        } else if(fillColor === Argentina) {
            data.style.display = "flex"; 
            if(currentYear >= 1970){
                text.innerHTML =
                "NAME: Argentina" + 
                "<br>POPULATION: 23,983,000" +
                "<br>GDP: $345,676,500,680";
            } else if(currentYear >= 1960){
                text.innerHTML =
                "NAME: Argentina" + 
                "<br>POPULATION: 20,625,000" +
                "<br>GDP: $226,421,814,799";
            } else if(currentYear >= 1950){
                text.innerHTML =
                "NAME: Argentina" + 
                "<br>POPULATION: 17,150,000" +
                "<br>GDP: $168,969,277,185";
            } else if(currentYear >= 1940){
                text.innerHTML =
                "NAME: Argentina" + 
                "<br>POPULATION: 14,591,000" +
                "<br>GDP: $116,487,767,619";
            } else if(currentYear >= 1930){
                text.innerHTML =
                "NAME: Argentina" + 
                "<br>POPULATION: 12,050,000" +
                "<br>GDP: $95,883,931,819";
            } else if(currentYear >= 1920){
                text.innerHTML =
                "NAME: Argentina" + 
                "<br>POPULATION: 8,970,000" +
                "<br>GDP: $60,800,890,897";
            } else if(currentYear >= 1910 && currentYear <= 1919){
                text.innerHTML =
                "NAME: Argentina" + 
                "<br>POPULATION: 6,800,000" +
                "<br>GDP: $51,617,037,323";
            } else {
                text.innerHTML = 
                "Not Enough Data"
            }
        } else if(fillColor === Dutch_Empire) {
            data.style.display = "flex"; 
            if(currentYear >= 1940){
                text.innerHTML =
                "NAME: Dutch Empire" + 
                "<br>POPULATION: 61,800,000" +
                "<br>GDP: $162,800,090,542";
            } else if(currentYear >= 1930){
                text.innerHTML =
                "NAME: Dutch Empire" + 
                "<br>POPULATION: 68,823,600" +
                "<br>GDP: $217,806,787,261";
            } else if(currentYear >= 1920){
                text.innerHTML =
                "NAME: Dutch Empire" + 
                "<br>POPULATION: 59,804,000" +
                "<br>GDP: $153,136,816,616";
            } else if(currentYear >= 1910){
                text.innerHTML =
                "NAME: Dutch Empire" + 
                "<br>POPULATION: 53,327,000" +
                "<br>GDP: $122,647,441,437";
            } else if(currentYear >= 1900){
                text.innerHTML =
                "NAME: Dutch Empire" + 
                "<br>POPULATION: 50,333,900" +
                "<br>GDP: $98,156,925,587";
            } else if(currentYear >= 1890){
                text.innerHTML =
                "NAME: Dutch Empire" + 
                "<br>POPULATION: 45,145,855" +
                "<br>GDP: $80,287,859,065";
            } else if(currentYear >= 1880){
                text.innerHTML =
                "NAME: Dutch Empire" + 
                "<br>POPULATION: 40,321,750" +
                "<br>GDP: $70,093,669,105";
            } else if(currentYear >= 1870){
                text.innerHTML =
                "NAME: Dutch Empire" + 
                "<br>POPULATION: 36,407,600" +
                "<br>GDP: $52,658,599,325";
            } else if(currentYear >= 1850){
                text.innerHTML =
                "NAME: Dutch Empire" + 
                "<br>POPULATION: 26,137,987" +
                "<br>GDP: $35,129,518,045";
            } else if(currentYear >= 1830){
                text.innerHTML =
                "NAME: Dutch Empire" + 
                "<br>POPULATION: 26,962,232" +
                "<br>GDP: $41,325,483,421";
            } else if(currentYear >= 1820){
                text.innerHTML =
                "NAME: Dutch Empire" + 
                "<br>POPULATION: 24,575,730" +
                "<br>GDP: $37,495,774,708";
            } else if(currentYear >= 1800){
                text.innerHTML =
                "NAME: Dutch Empire" + 
                "<br>POPULATION: 10,411,728" +
                "<br>GDP: $38,385,301,146";
            } else if(currentYear >= 1750){
                text.innerHTML =
                "NAME: Dutch Empire" + 
                "<br>POPULATION: 12,359,544" +
                "<br>GDP: $22,917,053,106";
            } else if(currentYear >= 1700){
                text.innerHTML =
                "NAME: Dutch Empire" + 
                "<br>POPULATION: 10,811,411" +
                "<br>GDP: $19,525,694,013";
            } else if(currentYear >= 1650){
                text.innerHTML =
                "NAME: Dutch Empire" + 
                "<br>POPULATION: 8,859,500" +
                "<br>GDP: $17,494,833,100";
            } else {
                text.innerHTML = 
                "Not Enough Data"
            }
        } else if(fillColor === Sweden) {
            data.style.display = "flex"; 
            if(currentYear >= 1940 && currentYear <= 1950){
                text.innerHTML =
                "NAME: Sweden" + 
                "<br>POPULATION: 6,356,000" +
                "<br>GDP: $60,967,706,805";
            } else if(currentYear >= 1900 && currentYear <= 1910){
                text.innerHTML =
                "NAME: Sweden-Norway" + 
                "<br>POPULATION: 7,379,436" +
                "<br>GDP: $30,036,617,996";
            } else if(currentYear >= 1890){
                text.innerHTML =
                "NAME: Sweden-Norway" + 
                "<br>POPULATION: 6,777,000" +
                "<br>GDP: $22,293,318,484";
            } else if(currentYear >= 1880){
                text.innerHTML =
                "NAME: Sweden-Norway" + 
                "<br>POPULATION: 6,491,000" +
                "<br>GDP: $19,321,390,476";
            } else if(currentYear >= 1870){
                text.innerHTML =
                "NAME: Sweden-Norway" + 
                "<br>POPULATION: 5,901,665" +
                "<br>GDP: $15,746,930,666";
            } else {
                text.innerHTML = 
                "Not Enough Data"
            }
        } else if(fillColor === Poland) {
            data.style.display = "flex"; 
            if(currentYear >= 1930 && currentYear <= 1940){
                text.innerHTML =
                "NAME: Poland" + 
                "<br>POPULATION: 31,490,000" +
                "<br>GDP: $111,095,309,648";
            } else if(currentYear >= 1920){
                text.innerHTML =
                "NAME: Poland" + 
                "<br>POPULATION: 24,847,350" +
                "<br>GDP: $89,121,846,426";
            } else if(currentYear >= 1700 && currentYear <= 1750){
                text.innerHTML =
                "NAME: Poland-Lithuania" + 
                "<br>POPULATION: 8,000,000" +
                "<br>GDP: $9,828,875,903";
            } else if(currentYear >= 1650){
                text.innerHTML =
                "NAME: Poland-Lithuania" + 
                "<br>POPULATION: 10,406,623" +
                "<br>GDP: $10,635,053,062";
            } else if(currentYear >= 1600){
                text.innerHTML =
                "NAME: Poland-Lithuania" + 
                "<br>POPULATION: 7,950,000" +
                "<br>GDP: $10,561,034,042";
            } else {
                text.innerHTML = 
                "Not Enough Data"
            }
        } else if(fillColor === Belgium) {
            data.style.display = "flex"; 
            if(currentYear >= 1930 && currentYear <= 1940){
                text.innerHTML =
                "NAME: Belgian Empire" + 
                "<br>POPULATION: 22,256,000" +
                "<br>GDP: $90,466,583,402";
            } else if(currentYear >= 1920){
                text.innerHTML =
                "NAME: Belgian Empire" + 
                "<br>POPULATION: 20,610,000" +
                "<br>GDP: $67,462,930,491";
            } else if(currentYear >= 1910){
                text.innerHTML =
                "NAME: Belgian Empire" + 
                "<br>POPULATION: 16,758,000" +
                "<br>GDP: $65,399,325,315";
            } else if(currentYear >= 1900){
                text.innerHTML =
                "NAME: Belgian Empire" + 
                "<br>POPULATION: 15,423,500" +
                "<br>GDP: $54,178,177,849";
            } else if(currentYear >= 1890){
                text.innerHTML =
                "NAME: Belgian Empire" + 
                "<br>POPULATION: 13,226,800" +
                "<br>GDP: $45,562,536,944";
            } else if(currentYear >= 1880){
                text.innerHTML =
                "NAME: Belgium" + 
                "<br>POPULATION: 11,030,100" +
                "<br>GDP: $33,556,197,180";
            } else if(currentYear >= 1870){
                text.innerHTML =
                "NAME: Belgium" + 
                "<br>POPULATION: 8,833,400" +
                "<br>GDP: $27,103,105,697";
            } else if(currentYear >= 1850){
                text.innerHTML =
                "NAME: Belgium" + 
                "<br>POPULATION: 4,440,000" +
                "<br>GDP: $16,234,216,608";
            } else {
                text.innerHTML = 
                "Not Enough Data"
            }
        } else if(fillColor === Czechoslovakia) {
            data.style.display = "flex"; 
            if(currentYear >= 1930 && currentYear <= 1940){
                text.innerHTML =
                "NAME: NAME" + 
                "<br>POPULATION: 13,964,000" +
                "<br>GDP: $80,723,411,351";
            } else if(currentYear >= 1920){
                text.innerHTML =
                "NAME: NAME" + 
                "<br>POPULATION: 12,979,000" +
                "<br>GDP: $49,563,738,350";
            } else {
                text.innerHTML = 
                "Not Enough Data"
            }
        } else if(fillColor === Austria_Hungary) {
            data.style.display = "flex"; 
            if(currentYear >= 1910 && currentYear <= 1920){
                text.innerHTML =
                "NAME: Austria-Hungary" + 
                "<br>POPULATION: 51,356,465" +
                "<br>GDP: $138,114,856,532";
            } else if(currentYear >= 1900){
                text.innerHTML =
                "NAME: Austria-Hungary" + 
                "<br>POPULATION: 47,295,100" +
                "<br>GDP: $111,272,320,656";
            } else if(currentYear >= 1890){
                text.innerHTML =
                "NAME: Austria-Hungary" + 
                "<br>POPULATION: 41,300,000" +
                "<br>GDP: $88,528,381,931";
            } else if(currentYear >= 1880){
                text.innerHTML =
                "NAME: Austria-Hungary" + 
                "<br>POPULATION: 37,900,000" +
                "<br>GDP: $72,378,148,647";
            } else if(currentYear >= 1870){
                text.innerHTML =
                "NAME: Austria-Hungary" + 
                "<br>POPULATION: 35,800,000" +
                "<br>GDP: $57,895,766,770";
            } else if(currentYear >= 1850){
                text.innerHTML =
                "NAME: Austrian Empire" + 
                "<br>POPULATION: 36,900,000" +
                "<br>GDP: $42,925,734,097";
            } else if(currentYear >= 1830){
                text.innerHTML =
                "NAME: Austrian Empire" + 
                "<br>POPULATION: 34,100,000" +
                "<br>GDP: $32,982,618,608";
            } else if(currentYear >= 1820){
                text.innerHTML =
                "NAME: Austrian Empire" + 
                "<br>POPULATION: 30,500,000" +
                "<br>GDP: $27,745,476,091";
            } else if(currentYear >= 1800){
                text.innerHTML =
                "NAME: Habsburg Austria" + 
                "<br>POPULATION: 23,145,000" +
                "<br>GDP: $24,958,521,600";
            } else if(currentYear >= 1750){
                text.innerHTML =
                "NAME: Habsburg Austria" + 
                "<br>POPULATION: 19,207,988" +
                "<br>GDP: $41,921,329,676";
            } else if(currentYear >= 1700){
                text.innerHTML =
                "NAME: Habsburg Austria" + 
                "<br>POPULATION: 9,989,000" +
                "<br>GDP: $12,836,407,925";
            } else if(currentYear >= 1600 && currentYear <= 1650){
                text.innerHTML =
                "NAME: Habsburg Austria" + 
                "<br>POPULATION: 7,800,000" +
                "<br>GDP: $8,240,041,191";
            } else if(currentYear >= 1550){
                text.innerHTML =
                "NAME: Habsburg Austria" + 
                "<br>POPULATION: 9,539,000" +
                "<br>GDP: $15,811,554,939";
            } else if(currentYear >= 1500){
                text.innerHTML =
                "NAME: Habsburg Austria" + 
                "<br>POPULATION: 3,603,000" +
                "<br>GDP: $7,299,132,117";
            } else {
                text.innerHTML = 
                "Not Enough Data"
            }
        } else if(fillColor === Bavaria) {
            data.style.display = "flex"; 
            if(currentYear >= 1870 && currentYear <= 1879){
                text.innerHTML =
                "NAME: Bavaria" + 
                "<br>POPULATION: 4,855,000" +
                "<br>GDP: $14,252,016,674";
            } else {
                text.innerHTML = 
                "Not Enough Data"
            }
        } else if(fillColor === Two_Sicilies) {
            data.style.display = "flex"; 
            if(currentYear >= 1850){
                text.innerHTML =
                "NAME: Two Sicilies" + 
                "<br>POPULATION: 8,612,753" +
                "<br>GDP: $36,989,688,675";
            } else if(currentYear >= 1830){
                text.innerHTML =
                "NAME: Two Sicilies" + 
                "<br>POPULATION: 7,578,182" +
                "<br>GDP: $33,106,241,836";
            } else if(currentYear >= 1820){
                text.innerHTML =
                "NAME: Two Sicilies" + 
                "<br>POPULATION: 6,855,556" +
                "<br>GDP: $31,142,224,715";
            } else if(currentYear >= 1800){
                text.innerHTML =
                "NAME: Naples" + 
                "<br>POPULATION: 6,700,000" +
                "<br>GDP: $17,664,418,450";
            } else if(currentYear >= 1750){
                text.innerHTML =
                "NAME: Naples" + 
                "<br>POPULATION: 5,527,207" +
                "<br>GDP: $16,871,272,774";
            } else {
                text.innerHTML = 
                "Not Enough Data"
            }
        } else if(fillColor === Papacy) {
            data.style.display = "flex"; 
            if(currentYear >= 1850 && currentYear <= 1860){
                text.innerHTML =
                "NAME: Papacy" + 
                "<br>POPULATION: 3,049,867" +
                "<br>GDP: $18,494,844,337";
            } else if(currentYear >= 1830){
                text.innerHTML =
                "NAME: Papacy" + 
                "<br>POPULATION: 2,568,783" +
                "<br>GDP: $16,553,120,918";
            } else if(currentYear >= 1700 && currentYear <= 1749){
                text.innerHTML =
                "NAME: Papacy" + 
                "<br>POPULATION: 1,353,515" +
                "<br>GDP: $10,029,516,028";
            } else if(currentYear >= 1600 && currentYear <= 1649){
                text.innerHTML =
                "NAME: Papacy" + 
                "<br>POPULATION: 1,300,000" +
                "<br>GDP: $9,119,963,808";
            } else if(currentYear >= 1550){
                text.innerHTML =
                "NAME: Papacy" + 
                "<br>POPULATION: 1,178,947" +
                "<br>GDP: $8,635,243,831";
            } else if(currentYear >= 1500){
                text.innerHTML =
                "NAME: Papacy" + 
                "<br>POPULATION: 2,000,000" +
                "<br>GDP: $8,219,070,405";
            } else {
                text.innerHTML = 
                "Not Enough Data"
            }
        } else if(fillColor === Sikh) {
            data.style.display = "flex"; 
            if(currentYear >= 1830 && currentYear <= 1849){
                text.innerHTML =
                "NAME: Sikh Empire" + 
                "<br>POPULATION: 14,150,000" +
                "<br>GDP: $28,248,547,742";
            } else if(currentYear >= 1820){
                text.innerHTML =
                "NAME: Sikh Empire" + 
                "<br>POPULATION: 13,636,364" +
                "<br>GDP: $26,176,102,277";
            } else {
                text.innerHTML = 
                "Not Enough Data"
            }
        } else if(fillColor === Bukhara) {
            data.style.display = "flex"; 
            if(currentYear >= 1830 && currentYear <= 1849){
                text.innerHTML =
                "NAME: Bukhara" + 
                "<br>POPULATION: 2,100,000" +
                "<br>GDP: $4,228,826,776";
            } else if(currentYear >= 1820){
                text.innerHTML =
                "NAME: Bukhara" + 
                "<br>POPULATION: 2,217,000" +
                "<br>GDP: $3,529,174,772";
            } else if(currentYear >= 1800){
                text.innerHTML =
                "NAME: Bukhara" + 
                "<br>POPULATION: 2,144,500" +
                "<br>GDP: $3,165,176,568";
            } else if(currentYear >= 1750){
                text.innerHTML =
                "NAME: Bukhara" + 
                "<br>POPULATION: 1,813,250" +
                "<br>GDP: $2,898,987,740";
            } else if(currentYear >= 1700){
                text.innerHTML =
                "NAME: Bukhara" + 
                "<br>POPULATION: 1,391,000" +
                "<br>GDP: $2,632,798,912";
            } else if(currentYear >= 1650){
                text.innerHTML =
                "NAME: Bukhara" + 
                "<br>POPULATION: 872,000" +
                "<br>GDP: $2,245,096,676";
            } else if(currentYear >= 1600){
                text.innerHTML =
                "NAME: Bukhara" + 
                "<br>POPULATION: 262,000" +
                "<br>GDP: $1,097,865,645";
            } else {
                text.innerHTML = 
                "Not Enough Data"
            }
        } else if(fillColor === Portuguese) {
            data.style.display = "flex"; 
            if(currentYear >= 1820 && currentYear <= 1829){
                text.innerHTML =
                "NAME: Portuguese Empire" + 
                "<br>POPULATION: 11,900,910" +
                "<br>GDP: $16,274,044,737";
            } else if(currentYear >= 1800){
                text.innerHTML =
                "NAME: Portuguese Empire" + 
                "<br>POPULATION: 10,140,628" +
                "<br>GDP: $14,607,557,779";
            } else if(currentYear >= 1650 && currentYear <= 1699){
                text.innerHTML =
                "NAME: Portuguese Empire" + 
                "<br>POPULATION: 10,948,953" +
                "<br>GDP: $9,200,002,623";
            } else if(currentYear >= 1550 && currentYear <= 1599){
                text.innerHTML =
                "NAME: Portuguese Empire" + 
                "<br>POPULATION: 6,245,930" +
                "<br>GDP: $6,525,789,528";
            } else {
                text.innerHTML = 
                "Not Enough Data"
            }
        } else if(fillColor === Durrani) {
            data.style.display = "flex"; 
            if(currentYear >= 1800 && currentYear <= 1819){
                text.innerHTML =
                "NAME: Durrani Empire" + 
                "<br>POPULATION: 9,820,000" +
                "<br>GDP: $15,522,597,530";
            } else if(currentYear >= 1750){
                text.innerHTML =
                "NAME: Durrani Empire" + 
                "<br>POPULATION: 8,864,167" +
                "<br>GDP: $14,580,768,945";
            } else {
                text.innerHTML = 
                "Not Enough Data"
            }
        } else if(fillColor === Mughal) {
            data.style.display = "flex"; 
            if(currentYear >= 1750 && currentYear <= 1799){
                text.innerHTML =
                "NAME: Mughal Empire" + 
                "<br>POPULATION: 48,067,083" +
                "<br>GDP: $68,098,876,024";
            } else if(currentYear >= 1700){
                text.innerHTML =
                "NAME: Mughal Empire" + 
                "<br>POPULATION: 158,400,000" +
                "<br>GDP: $231,578,783,152";
            } else if(currentYear >= 1650){
                text.innerHTML =
                "NAME: Mughal Empire" + 
                "<br>POPULATION: 150,000,000" +
                "<br>GDP: $198,500,692,711";
            } else if(currentYear >= 1600){
                text.innerHTML =
                "NAME: Mughal Empire" + 
                "<br>POPULATION: 115,000,000" +
                "<br>GDP: $168,338,395,396";
            } else if(currentYear >= 1550){
                text.innerHTML =
                "NAME: Mughal Empire" + 
                "<br>POPULATION: 71,112,250" +
                "<br>GDP: $101,099,817,691";
            } else if(currentYear >= 1500){
                text.innerHTML =
                "NAME: Mughal Empire" + 
                "<br>POPULATION: 20,000,000" +
                "<br>GDP: $59,179,007,135";
            } else {
                text.innerHTML = 
                "Not Enough Data"
            }
        } else if(fillColor === Bengal) {
            data.style.display = "flex"; 
            if(currentYear >= 1750 && currentYear <= 1799){
                text.innerHTML =
                "NAME: Bengal" + 
                "<br>POPULATION: 17,543,583" +
                "<br>GDP: $22,084,287,630";
            } else if(currentYear >= 1500 && currentYear <= 1549){
                text.innerHTML =
                "NAME: Bengal" + 
                "<br>POPULATION: 10,526,000" +
                "<br>GDP: $11,783,179,302";
            } else {
                text.innerHTML = 
                "Not Enough Data"
            }
        } else {
            data.style.display = "none";
        }

        data.style.top = mouseY + "px";
        data.style.left = mouseX + "px";
    }
});