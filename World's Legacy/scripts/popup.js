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
const UK = "#b2182b";
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
                "<br>POPULATION: POPULATION" +
                "<br>GDP: $28,779,528,000,000";
            } else if(currentYear >= 2020){
                text.innerHTML = 
                "NAME: China" + 
                "<br>POPULATION: POPULATION" +
                "<br>GDP: $25,466,031,330,345";
            } else if(currentYear >= 2010){
                text.innerHTML = 
                "NAME: China" + 
                "<br>POPULATION: POPULATION" +
                "<br>GDP: $16,387,244,811,847";
            } else if(currentYear >= 2000){
                text.innerHTML = 
                "NAME: China" + 
                "<br>POPULATION: POPULATION" +
                "<br>GDP: $7,673,176,625,788";
            } else if(currentYear >= 1990){
                text.innerHTML = 
                "NAME: China" + 
                "<br>POPULATION: POPULATION" +
                "<br>GDP: $4,195,025,697,589";
            } else if(currentYear >= 1980){
                text.innerHTML = 
                "NAME: China" + 
                "<br>POPULATION: POPULATION" +
                "<br>GDP: $2,347,261,441,755";
            } else if(currentYear >= 1970){
                text.innerHTML = 
                "NAME: China" + 
                "<br>POPULATION: POPULATION" +
                "<br>GDP: $1,417,943,115,464";
            } else if(currentYear >= 1960){
                text.innerHTML = 
                "NAME: China" + 
                "<br>POPULATION: POPULATION" +
                "<br>GDP: $873,931,758,610";
            } else if(currentYear >= 1950){
                text.innerHTML = 
                "NAME: China" + 
                "<br>POPULATION: POPULATION" +
                "<br>GDP: $541,524,766,362";
            } else if(currentYear >= 1940){
                text.innerHTML = 
                "NAME: Nationalist China" + 
                "<br>POPULATION: POPULATION" +
                "<br>GDP: $481,729,267,600";
            } else if(currentYear >= 1930){
                text.innerHTML = 
                "NAME: Nationalist China" + 
                "<br>POPULATION: POPULATION" +
                "<br>GDP: $511,139,272,336";
            } else if(currentYear >= 1920){
                text.innerHTML = 
                "NAME: Beiyang China" + 
                "<br>POPULATION: POPULATION" +
                "<br>GDP: $242,571,245,021";
            } else if(currentYear >= 1910){
                text.innerHTML = 
                "NAME: Qing China" + 
                "<br>POPULATION: POPULATION" +
                "<br>GDP: $478,164,237,475";
            } else if(currentYear >= 1900){
                text.innerHTML = 
                "NAME: Qing China" + 
                "<br>POPULATION: POPULATION" +
                "<br>GDP: $482,331,900,697";
            } else if(currentYear >= 1900){
                text.innerHTML = 
                "NAME: Qing China" + 
                "<br>POPULATION: POPULATION" +
                "<br>GDP: $482,331,900,697";
            } else if(currentYear >= 1890){
                text.innerHTML = 
                "NAME: Qing China" + 
                "<br>POPULATION: POPULATION" +
                "<br>GDP: $457,662,848,515";
            } else if(currentYear >= 1880){
                text.innerHTML = 
                "NAME: Qing China" + 
                "<br>POPULATION: POPULATION" +
                "<br>GDP: $425,570,509,701";
            } else if(currentYear >= 1870){
                text.innerHTML = 
                "NAME: Qing China" + 
                "<br>POPULATION: POPULATION" +
                "<br>GDP: $422,485,572,987";
            } else if(currentYear >= 1850){
                text.innerHTML = 
                "NAME: Qing China" + 
                "<br>POPULATION: POPULATION" +
                "<br>GDP: $441,136,619,373";
            } else if(currentYear >= 1830){
                text.innerHTML = 
                "NAME: Qing China" + 
                "<br>POPULATION: POPULATION" +
                "<br>GDP: $431,764,485,286";
            } else if(currentYear >= 1820){
                text.innerHTML = 
                "NAME: Qing China" + 
                "<br>POPULATION: POPULATION" +
                "<br>GDP: $419,332,620,136";
            } else if(currentYear >= 1800){
                text.innerHTML = 
                "NAME: Qing China" + 
                "<br>POPULATION: POPULATION" +
                "<br>GDP: $393,223,436,333";
            } else if(currentYear >= 1750){
                text.innerHTML = 
                "NAME: Qing China" + 
                "<br>POPULATION: POPULATION" +
                "<br>GDP: $316,818,059,260";
            } else if(currentYear >= 1750){
                data.style.display = "flex";
                text.innerHTML = 
                "NAME: Qing China" + 
                "<br>POPULATION: POPULATION" +
                "<br>GDP: $316,818,059,260";
            } else if(currentYear >= 1700){
                text.innerHTML = 
                "NAME: Qing China" + 
                "<br>POPULATION: POPULATION" +
                "<br>GDP: $265,881,644,432";
            } else if(currentYear >= 1650){
                text.innerHTML = 
                "NAME: Qing China" + 
                "<br>POPULATION: POPULATION" +
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
                "<br>POPULATION: POPULATION" +
                "<br>GDP: $24,003,704,000,000";
            } else if(currentYear >= 2020){
                text.innerHTML = 
                "NAME: United States" + 
                "<br>POPULATION: POPULATION" +
                "<br>GDP: $20,936,600,000,000";
            } else if(currentYear >= 2010){
                text.innerHTML = 
                "NAME: United States" + 
                "<br>POPULATION: POPULATION" +
                "<br>GDP: $18,927,301,116,874";
            } else if(currentYear >= 2000){
                text.innerHTML = 
                "NAME: United States" + 
                "<br>POPULATION: POPULATION" +
                "<br>GDP: $16,209,738,317,694";
            } else if(currentYear >= 1990){
                text.innerHTML = 
                "NAME: United States" + 
                "<br>POPULATION: POPULATION" +
                "<br>GDP: $11,539,087,366,010";
            } else if(currentYear >= 1980){
                text.innerHTML = 
                "NAME: United States" + 
                "<br>POPULATION: POPULATION" +
                "<br>GDP: $8,409,774,841,642";
            } else if(currentYear >= 1970){
                text.innerHTML = 
                "NAME: United States" + 
                "<br>POPULATION: POPULATION" +
                "<br>GDP: $6,123,128,816,104";
            } else if(currentYear >= 1960){
                text.innerHTML = 
                "NAME: United States" + 
                "<br>POPULATION: POPULATION" +
                "<br>GDP: $4,059,503,209,561";
            } else if(currentYear >= 1950){
                text.innerHTML = 
                "NAME: United States" + 
                "<br>POPULATION: POPULATION" +
                "<br>GDP: $3,216,436,613,395";
            } else if(currentYear >= 1940){
                text.innerHTML = 
                "NAME: United States" + 
                "<br>POPULATION: POPULATION" +
                "<br>GDP: $1,985,303,951,116";
            } else if(currentYear >= 1930){
                text.innerHTML = 
                "NAME: United States" + 
                "<br>POPULATION: POPULATION" +
                "<br>GDP: $1,654,455,614,975";
            } else if(currentYear >= 1920){
                text.innerHTML = 
                "NAME: United States" + 
                "<br>POPULATION: POPULATION" +
                "<br>GDP: $1,358,129,886,447";
            } else if(currentYear >= 1910){
                text.innerHTML = 
                "NAME: United States" + 
                "<br>POPULATION: POPULATION" +
                "<br>GDP: $1,113,758,691,964";
            } else if(currentYear >= 1900){
                text.innerHTML = 
                "NAME: United States" + 
                "<br>POPULATION: POPULATION" +
                "<br>GDP: $764,540,107,351";
            } else if(currentYear >= 1890){
                text.innerHTML = 
                "NAME: United States" + 
                "<br>POPULATION: POPULATION" +
                "<br>GDP: $522,936,204,264";
            } else if(currentYear >= 1880){
                text.innerHTML = 
                "NAME: United States" + 
                "<br>POPULATION: POPULATION" +
                "<br>GDP: $391,253,195,294";
            } else if(currentYear >= 1870){
                text.innerHTML = 
                "NAME: United States" + 
                "<br>POPULATION: POPULATION" +
                "<br>GDP: $239,558,991,468";
            } else if(currentYear >= 1850){
                text.innerHTML = 
                "NAME: United States" + 
                "<br>POPULATION: POPULATION" +
                "<br>GDP: $98,890,664,634";
            } else if(currentYear >= 1830){
                text.innerHTML = 
                "NAME: United States" + 
                "<br>POPULATION: POPULATION" +
                "<br>GDP: $46,561,361,604";
            } else if(currentYear >= 1820){
                text.innerHTML = 
                "NAME: United States" + 
                "<br>POPULATION: POPULATION" +
                "<br>GDP: $30,251,570,664";
            } else if(currentYear >= 1800){
                text.innerHTML = 
                "NAME: United States" + 
                "<br>POPULATION: POPULATION" +
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
                "<br>POPULATION: POPULATION" +
                "<br>GDP: $11,619,550,000,000";
            } else if(currentYear >= 2020){
                text.innerHTML =
                "NAME: India" + 
                "<br>POPULATION: POPULATION" +
                "<br>GDP: $9,907,028,000,000";
            } else if(currentYear >= 2010){
                text.innerHTML =
                "NAME: India" + 
                "<br>POPULATION: POPULATION" +
                "<br>GDP: $6,587,478,152,426";
            } else if(currentYear >= 2000){
                text.innerHTML =
                "NAME: India" + 
                "<br>POPULATION: POPULATION" +
                "<br>GDP: $3,437,165,798,451";
            } else if(currentYear >= 1990){
                text.innerHTML =
                "NAME: India" + 
                "<br>POPULATION: POPULATION" +
                "<br>GDP: $2,170,278,833,441";
            } else if(currentYear >= 1980){
                text.innerHTML =
                "NAME: India" + 
                "<br>POPULATION: POPULATION" +
                "<br>GDP: $1,258,178,013,973";
            } else if(currentYear >= 1970){
                text.innerHTML =
                "NAME: India" + 
                "<br>POPULATION: POPULATION" +
                "<br>GDP: $928,035,266,198";
            } else if(currentYear >= 1960){
                text.innerHTML =
                "NAME: India" + 
                "<br>POPULATION: POPULATION" +
                "<br>GDP: $645,508,700,752";
            } else if(currentYear >= 1950){
                text.innerHTML =
                "NAME: India" + 
                "<br>POPULATION: POPULATION" +
                "<br>GDP: $439,180,173,701";
            } else if(currentYear >= 1800 && currentYear <= 1820){
                text.innerHTML =
                "NAME: Maratha Empire" + 
                "<br>POPULATION: POPULATION" +
                "<br>GDP: $145,004,046,446";
            } else if(currentYear >= 1750 && currentYear <= 1799){
                text.innerHTML =
                "NAME: Maratha Empire" + 
                "<br>POPULATION: POPULATION" +
                "<br>GDP: $86,671,296,758";
            } else if(currentYear >= 1650 && currentYear <= 1699){
                text.innerHTML =
                "NAME: Bijapur Sultanate" + 
                "<br>POPULATION: POPULATION" +
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
                "<br>POPULATION: POPULATION" +
                "<br>GDP: $5,856,478,000,000";
            } else if(currentYear >= 2020){
                text.innerHTML =
                "NAME: Japan" + 
                "<br>POPULATION: POPULATION" +
                "<br>GDP: $5,312,296,000,000";
            } else if(currentYear >= 2010){
                text.innerHTML =
                "NAME: Japan" + 
                "<br>POPULATION: POPULATION" +
                "<br>GDP: $5,534,069,317,027";
            } else if(currentYear >= 2000){
                text.innerHTML =
                "NAME: Japan" + 
                "<br>POPULATION: POPULATION" +
                "<br>GDP: $5,225,015,968,149";
            } else if(currentYear >= 1990){
                text.innerHTML =
                "NAME: Japan" + 
                "<br>POPULATION: POPULATION" +
                "<br>GDP: $4,585,751,337,016";
            } else if(currentYear >= 1980){
                text.innerHTML =
                "NAME: Japan" + 
                "<br>POPULATION: POPULATION" +
                "<br>GDP: $3,098,809,916,756";
            } else if(currentYear >= 1970){
                text.innerHTML =
                "NAME: Japan" + 
                "<br>POPULATION: POPULATION" +
                "<br>GDP: $2,002,561,815,867";
            } else if(currentYear >= 1960){
                text.innerHTML =
                "NAME: Japan" + 
                "<br>POPULATION: POPULATION" +
                "<br>GDP: $741,021,886,483";
            } else if(currentYear >= 1940 && currentYear <= 1950){
                text.innerHTML =
                "NAME: Empire of Japan" + 
                "<br>POPULATION: POPULATION" +
                "<br>GDP: $670,631,171,923";
            } else if(currentYear >= 1930){
                text.innerHTML =
                "NAME: Empire of Japan" + 
                "<br>POPULATION: POPULATION" +
                "<br>GDP: $319,914,078,158";
            } else if(currentYear >= 1920){
                text.innerHTML =
                "NAME: Empire of Japan" + 
                "<br>POPULATION: POPULATION" +
                "<br>GDP: $244,137,113,796";
            } else if(currentYear >= 1910){
                text.innerHTML =
                "NAME: Empire of Japan" + 
                "<br>POPULATION: POPULATION" +
                "<br>GDP: $181,846,022,074";
            } else if(currentYear >= 1900){
                text.innerHTML =
                "NAME: Empire of Japan" + 
                "<br>POPULATION: POPULATION" +
                "<br>GDP: $129,949,489,652";
            } else if(currentYear >= 1890){
                text.innerHTML =
                "NAME: Empire of Japan" + 
                "<br>POPULATION: POPULATION" +
                "<br>GDP: $92,095,001,496";
            } else if(currentYear >= 1880){
                text.innerHTML =
                "NAME: Empire of Japan" + 
                "<br>POPULATION: POPULATION" +
                "<br>GDP: $76,348,245,029";
            } else if(currentYear >= 1870){
                text.innerHTML =
                "NAME: Empire of Japan" + 
                "<br>POPULATION: POPULATION" +
                "<br>GDP: $67,439,372,776";
            } else if(currentYear >= 1850){
                text.innerHTML =
                "NAME: Tokugawa Japan" + 
                "<br>POPULATION: POPULATION" +
                "<br>GDP: $56,955,483,520";
            } else if(currentYear >= 1830){
                text.innerHTML =
                "NAME: Tokugawa Japan" + 
                "<br>POPULATION: POPULATION" +
                "<br>GDP: $52,919,269,323";
            } else if(currentYear >= 1820){
                text.innerHTML =
                "NAME: Tokugawa Japan" + 
                "<br>POPULATION: POPULATION" +
                "<br>GDP: $50,603,271,363";
            } else if(currentYear >= 1800){
                text.innerHTML =
                "NAME: Tokugawa Japan" + 
                "<br>POPULATION: POPULATION" +
                "<br>GDP: $49,515,028,968";
            } else if(currentYear >= 1750){
                text.innerHTML =
                "NAME: Tokugawa Japan" + 
                "<br>POPULATION: POPULATION" +
                "<br>GDP: $33,861,112,453";
            } else if(currentYear >= 1700){
                text.innerHTML =
                "NAME: Tokugawa Japan" + 
                "<br>POPULATION: POPULATION" +
                "<br>GDP: $35,908,280,663";
            } else if(currentYear >= 1650){
                text.innerHTML =
                "NAME: Tokugawa Japan" + 
                "<br>POPULATION: POPULATION" +
                "<br>GDP: $30,116,575,312";
            } else if(currentYear >= 1600){
                text.innerHTML =
                "NAME: Azuchi-Momoyama Japan" + 
                "<br>POPULATION: POPULATION" +
                "<br>GDP: $24,328,662,697";
            } else if(currentYear >= 1550){
                text.innerHTML =
                "NAME: Ashikaga Japan" + 
                "<br>POPULATION: POPULATION" +
                "<br>GDP: $20,981,790,783";
            } else if(currentYear >= 1500){
                text.innerHTML =
                "NAME: Ashikaga Japan" + 
                "<br>POPULATION: POPULATION" +
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
                "<br>POPULATION: POPULATION" +
                "<br>GDP: $5,017,163,000,000";
            } else if(currentYear >= 2020){
                text.innerHTML =
                "NAME: Germany" + 
                "<br>POPULATION: POPULATION" +
                "<br>GDP: $4,469,546,000,000";
            } else if(currentYear >= 2010){
                text.innerHTML =
                "NAME: Germany" + 
                "<br>POPULATION: POPULATION" +
                "<br>GDP: $4,160,651,925,465";
            } else if(currentYear >= 2000){
                text.innerHTML =
                "NAME: Germany" + 
                "<br>POPULATION: POPULATION" +
                "<br>GDP: $3,397,761,246,582";
            } else if(currentYear >= 1990){
                text.innerHTML =
                "NAME: West Germany" + 
                "<br>POPULATION: POPULATION" +
                "<br>GDP: $1,544,852,527,649";
            } else if(currentYear >= 1980){
                text.innerHTML =
                "NAME: West Germany" + 
                "<br>POPULATION: POPULATION" +
                "<br>GDP: $1,350,116,997,388";
            } else if(currentYear >= 1970){
                text.innerHTML =
                "NAME: West Germany" + 
                "<br>POPULATION: POPULATION" +
                "<br>GDP: $1,030,028,283,998";
            } else if(currentYear >= 1960){
                text.innerHTML =
                "NAME: West Germany" + 
                "<br>POPULATION: POPULATION" +
                "<br>GDP: $682,322,036,033";
            } else if(currentYear >= 1950){
                text.innerHTML =
                "NAME: West Germany" + 
                "<br>POPULATION: POPULATION" +
                "<br>GDP: $324,192,812,967";
                
            } else if(currentYear >= 1940){
                text.innerHTML =
                "NAME: Nazi Germany" + 
                "<br>POPULATION: POPULATION" +
                "<br>GDP: $1,239,496,851,920";
                
            } else if(currentYear >= 1930){
                text.innerHTML =
                "NAME: Weimar Germany" + 
                "<br>POPULATION: POPULATION" +
                "<br>GDP: $510,875,233,632";
            } else if(currentYear >= 1920){
                text.innerHTML =
                "NAME: Weimar Germany" + 
                "<br>POPULATION: POPULATION" +
                "<br>GDP: $336,394,016,154"; 
            } else if(currentYear >= 1910){
                text.innerHTML =
                "NAME: German Empire" + 
                "<br>POPULATION: POPULATION" +
                "<br>GDP: $467,776,682,686"; 
            } else if(currentYear >= 1900){
                text.innerHTML =
                "NAME: German Empire" + 
                "<br>POPULATION: POPULATION" +
                "<br>GDP: $368,708,059,523"; 
            } else if(currentYear >= 1890){
                text.innerHTML =
                "NAME: German Empire" + 
                "<br>POPULATION: POPULATION" +
                "<br>GDP: $264,245,485,362"; 
            } else if(currentYear >= 1880){
                text.innerHTML =
                "NAME: German Empire" + 
                "<br>POPULATION: POPULATION" +
                "<br>GDP: $194,342,378,042"; 
            } else if(currentYear >= 1870){
                text.innerHTML =
                "NAME: North German Confederation" + 
                "<br>POPULATION: POPULATION" +
                "<br>GDP: $123,351,572,999"; 
            } else if(currentYear >= 1850){
                text.innerHTML =
                "NAME: Prussia" + 
                "<br>POPULATION: POPULATION" +
                "<br>GDP: $55,534,382,729"; 
            } else if(currentYear >= 1830){
                text.innerHTML =
                "NAME: Prussia" + 
                "<br>POPULATION: POPULATION" +
                "<br>GDP: $37,987,774,714"; 
            } else if(currentYear >= 1820){
                text.innerHTML =
                "NAME: Prussia" + 
                "<br>POPULATION: POPULATION" +
                "<br>GDP: $29,548,091,367"; 
            } else if(currentYear >= 1800){
                text.innerHTML =
                "NAME: Prussia" + 
                "<br>POPULATION: POPULATION" +
                "<br>GDP: $28,070,712,251"; 
            } else if(currentYear >= 1750){
                text.innerHTML =
                "NAME: Prussia" + 
                "<br>POPULATION: POPULATION" +
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
                "<br>POPULATION: POPULATION" +
                "<br>GDP: $4,592,088,000,000";
            } else if(currentYear >= 2020){
                text.innerHTML =
                "NAME: Russia" + 
                "<br>POPULATION: POPULATION" +
                "<br>GDP: $4,133,084,000,000";
            } else if(currentYear >= 2010){
                text.innerHTML =
                "NAME: Russia" + 
                "<br>POPULATION: POPULATION" +
                "<br>GDP: $3,841,533,017,375";
            } else if(currentYear >= 2000){
                text.innerHTML =
                "NAME: Russia" + 
                "<br>POPULATION: POPULATION" +
                "<br>GDP: $1,909,376,166,193";
            } else if(currentYear >= 1990){
                text.innerHTML =
                "NAME: Soviet Russia" + 
                "<br>POPULATION: POPULATION" +
                "<br>GDP: $3,864,344,745,781";
            } else if(currentYear >= 1980){
                text.innerHTML =
                "NAME: Soviet Russia" + 
                "<br>POPULATION: POPULATION" +
                "<br>GDP: $3,376,788,722,191";
            } else if(currentYear >= 1970){
                text.innerHTML =
                "NAME: Soviet Russia" + 
                "<br>POPULATION: POPULATION" +
                "<br>GDP: $2,670,605,721,145";
            } else if(currentYear >= 1960){
                text.innerHTML =
                "NAME: Soviet Russia" + 
                "<br>POPULATION: POPULATION" +
                "<br>GDP: $1,666,137,083,514";
            } else if(currentYear >= 1950){
                text.innerHTML =
                "NAME: Soviet Russia" + 
                "<br>POPULATION: POPULATION" +
                "<br>GDP: $989,441,960,131";
            } else if(currentYear >= 1940){
                text.innerHTML =
                "NAME: Soviet Russia" + 
                "<br>POPULATION: POPULATION" +
                "<br>GDP: $829,976,309,668";
            } else if(currentYear >= 1930){
                text.innerHTML =
                "NAME: Soviet Russia" + 
                "<br>POPULATION: POPULATION" +
                "<br>GDP: $498,362,087,131";
            } else if(currentYear >= 1920){
                text.innerHTML =
                "NAME: Soviet Russia" + 
                "<br>POPULATION: POPULATION" +
                "<br>GDP: $175,723,406,510";
            } else if(currentYear >= 1910){
                text.innerHTML =
                "NAME: Russian Empire" + 
                "<br>POPULATION: POPULATION" +
                "<br>GDP: $452,063,803,335";
            } else if(currentYear >= 1900){
                text.innerHTML =
                "NAME: Russian Empire" + 
                "<br>POPULATION: POPULATION" +
                "<br>GDP: $344,252,980,380";
            } else if(currentYear >= 1890){
                text.innerHTML =
                "NAME: Russian Empire" + 
                "<br>POPULATION: POPULATION" +
                "<br>GDP: $226,950,090,790";
            } else if(currentYear >= 1880){
                text.innerHTML =
                "NAME: Russian Empire" + 
                "<br>POPULATION: POPULATION" +
                "<br>GDP: $180,282,752,749";
            } else if(currentYear >= 1870){
                text.innerHTML =
                "NAME: Russian Empire" + 
                "<br>POPULATION: POPULATION" +
                "<br>GDP: $124,052,074,195";
            } else if(currentYear >= 1850){
                text.innerHTML =
                "NAME: Russian Empire" + 
                "<br>POPULATION: POPULATION" +
                "<br>GDP: $89,829,479,578";
            } else if(currentYear >= 1830){
                text.innerHTML =
                "NAME: Russian Empire" + 
                "<br>POPULATION: POPULATION" +
                "<br>GDP: $59,187,056,820";
            } else if(currentYear >= 1820){
                text.innerHTML =
                "NAME: Russian Empire" + 
                "<br>POPULATION: POPULATION" +
                "<br>GDP: $47,847,473,857";
            } else if(currentYear >= 1800){
                text.innerHTML =
                "NAME: Russian Empire" + 
                "<br>POPULATION: POPULATION" +
                "<br>GDP: $40,687,714,424";
            } else if(currentYear >= 1750){
                text.innerHTML =
                "NAME: Russian Empire" + 
                "<br>POPULATION: POPULATION" +
                "<br>GDP: $25,573,026,090";
            } else if(currentYear >= 1700){
                text.innerHTML =
                "NAME: Tsardom of Russia" + 
                "<br>POPULATION: POPULATION" +
                "<br>GDP: $22,211,525,717";
            } else if(currentYear >= 1650){
                text.innerHTML =
                "NAME: Tsardom of Russia" + 
                "<br>POPULATION: POPULATION" +
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
                "<br>POPULATION: POPULATION" +
                "<br>GDP: $3,794,845,000,000";
            } else if(currentYear >= 2020){
                text.innerHTML =
                "NAME: Indonesia" + 
                "<br>POPULATION: POPULATION" +
                "<br>GDP: $3,302,377,000,000";
            } else if(currentYear >= 2010){
                text.innerHTML =
                "NAME: Indonesia" + 
                "<br>POPULATION: POPULATION" +
                "<br>GDP: $2,498,445,382,605";
            } else if(currentYear >= 2000){
                text.innerHTML =
                "NAME: Indonesia" + 
                "<br>POPULATION: POPULATION" +
                "<br>GDP: $1,410,774,476,098";
            } else if(currentYear >= 1990){
                text.innerHTML =
                "NAME: Indonesia" + 
                "<br>POPULATION: POPULATION" +
                "<br>GDP: $890,607,735,939";
            } else if(currentYear >= 1980){
                text.innerHTML =
                "NAME: Indonesia" + 
                "<br>POPULATION: POPULATION" +
                "<br>GDP: $544,948,769,844";
            } else if(currentYear >= 1970){
                text.innerHTML =
                "NAME: Indonesia" + 
                "<br>POPULATION: POPULATION" +
                "<br>GDP: $273,709,219,021";
            } else if(currentYear >= 1960){
                text.innerHTML =
                "NAME: Indonesia" + 
                "<br>POPULATION: POPULATION" +
                "<br>GDP: $191,849,316,970";
            } else if(currentYear >= 1950){
                text.innerHTML =
                "NAME: Indonesia" + 
                "<br>POPULATION: POPULATION" +
                "<br>GDP: $131,064,245,251";
            } else if(currentYear >= 1500 && currentYear <= 1550){
                text.innerHTML =
                "NAME: Majapahit Empire" + 
                "<br>POPULATION: POPULATION" +
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
                "<br>POPULATION: POPULATION" +
                "<br>GDP: $3,491,092,000,000";
            } else if(currentYear >= 2020){
                text.innerHTML =
                "NAME: Brazil" + 
                "<br>POPULATION: POPULATION" +
                "<br>GDP: $3,153,597,000,000";
            } else if(currentYear >= 2010){
                text.innerHTML =
                "NAME: Brazil" + 
                "<br>POPULATION: POPULATION" +
                "<br>GDP: $3,491,283,227,609";
            } else if(currentYear >= 2000){
                text.innerHTML =
                "NAME: Brazil" + 
                "<br>POPULATION: POPULATION" +
                "<br>GDP: $2,149,728,337,631";
            } else if(currentYear >= 1990){
                text.innerHTML =
                "NAME: Brazil" + 
                "<br>POPULATION: POPULATION" +
                "<br>GDP: $146,934,431,1435";
            } else if(currentYear >= 1980){
                text.innerHTML =
                "NAME: Brazil" + 
                "<br>POPULATION: POPULATION" +
                "<br>GDP: $1,257,790,039,446";
            } else if(currentYear >= 1970){
                text.innerHTML =
                "NAME: Brazil" + 
                "<br>POPULATION: POPULATION" +
                "<br>GDP: $549,692,973,719";
            } else if(currentYear >= 1960){
                text.innerHTML =
                "NAME: Brazil" + 
                "<br>POPULATION: POPULATION" +
                "<br>GDP: $301,956,761,811";
            } else if(currentYear >= 1950){
                text.innerHTML =
                "NAME: Brazil" + 
                "<br>POPULATION: POPULATION" +
                "<br>GDP: $148,113,670,304";
            }  else if(currentYear >= 1940){
                text.innerHTML =
                "NAME: Brazil" + 
                "<br>POPULATION: POPULATION" +
                "<br>GDP: $82,044,245,088";
            }  else if(currentYear >= 1930){
                text.innerHTML =
                "NAME: Brazil" + 
                "<br>POPULATION: POPULATION" +
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
                "<br>POPULATION: POPULATION" +
                "<br>GDP: $3,444,471,000,000";
            } else if(currentYear >= 2020){
                text.innerHTML =
                "NAME: France" + 
                "<br>POPULATION: TEXT" +
                "<br>GDP: $3,115,307,000,000";
            } else if(currentYear >= 2010){
                text.innerHTML =
                "NAME: France" + 
                "<br>POPULATION: TEXT" +
                "<br>GDP: $2,901,968,845,554";
            } else if(currentYear >= 2000){
                text.innerHTML =
                "NAME: France" + 
                "<br>POPULATION: TEXT" +
                "<br>GDP: $2,518,528,534,081";
            } else if(currentYear >= 1990){
                text.innerHTML =
                "NAME: France" + 
                "<br>POPULATION: TEXT" +
                "<br>GDP: $2,028,007,466,423";
            } else if(currentYear >= 1980){
                text.innerHTML =
                "NAME: France" + 
                "<br>POPULATION: TEXT" +
                "<br>GDP: $1,607,728,251,037";
            } else if(currentYear >= 1970){
                text.innerHTML =
                "NAME: France" + 
                "<br>POPULATION: TEXT" +
                "<br>GDP: $1,170,617,166,979";
            } else if(currentYear >= 1960){
                text.innerHTML =
                "NAME: French Colonial Empire" + 
                "<br>POPULATION: TEXT" +
                "<br>GDP: $772,361,923,886";
            } else if(currentYear >= 1950){
                text.innerHTML =
                "NAME: French Colonial Empire" + 
                "<br>POPULATION: TEXT" +
                "<br>GDP: $592,805,412,735";
            } else if(currentYear >= 1940){
                text.innerHTML =
                "NAME: French Colonial Empire" + 
                "<br>POPULATION: TEXT" +
                "<br>GDP: $467,589,996,359";
            } else if(currentYear >= 1930){
                text.innerHTML =
                "NAME: French Colonial Empire" + 
                "<br>POPULATION: TEXT" +
                "<br>GDP: $489,068,617,947";
            } else if(currentYear >= 1920){
                text.innerHTML =
                "NAME: French Colonial Empire" + 
                "<br>POPULATION: TEXT" +
                "<br>GDP: $342,252,761,963";
            } else if(currentYear >= 1910){
                text.innerHTML =
                "NAME: French Colonial Empire" + 
                "<br>POPULATION: TEXT" +
                "<br>GDP: $301,936,785,879";
            } else if(currentYear >= 1900){
                text.innerHTML =
                "NAME: French Colonial Empire" + 
                "<br>POPULATION: TEXT" +
                "<br>GDP: $281,158,278,682";
            } else if(currentYear >= 1890){
                text.innerHTML =
                "NAME: French Colonial Empire" + 
                "<br>POPULATION: TEXT" +
                "<br>GDP: $221,205,708,010";
            } else if(currentYear >= 1880){
                text.innerHTML =
                "NAME: French Colonial Empire" + 
                "<br>POPULATION: TEXT" +
                "<br>GDP: $181,436,823,708";
            } else if(currentYear >= 1870){
                text.innerHTML =
                "NAME: French Colonial Empire" + 
                "<br>POPULATION: TEXT" +
                "<br>GDP: $156,639,151,773";
            } else if(currentYear >= 1850){
                text.innerHTML =
                "NAME: French Colonial Empire" + 
                "<br>POPULATION: TEXT" +
                "<br>GDP: $120,434,690,437";
            } else if(currentYear >= 1830){
                text.innerHTML =
                "NAME: Kingdom of France" + 
                "<br>POPULATION: TEXT" +
                "<br>GDP: $79,693,683,756";
            } else if(currentYear >= 1820){
                text.innerHTML =
                "NAME: Kingdom of France" + 
                "<br>POPULATION: TEXT" +
                "<br>GDP: $71,387,202,648";
            } else if(currentYear >= 1800){
                text.innerHTML =
                "NAME: Revolutionary France" + 
                "<br>POPULATION: TEXT" +
                "<br>GDP: $81,791,749,010";
            } else if(currentYear >= 1750){
                text.innerHTML =
                "NAME: Revolutionary France" + 
                "<br>POPULATION: TEXT" +
                "<br>GDP: $83,481,804,177";
            } else if(currentYear >= 1700){
                text.innerHTML =
                "NAME: Revolutionary France" + 
                "<br>POPULATION: TEXT" +
                "<br>GDP: $46,859,493,089";
            } else if(currentYear >= 1650){
                text.innerHTML =
                "NAME: Revolutionary France" + 
                "<br>POPULATION: TEXT" +
                "<br>GDP: $41,401,232,299";
            } else if(currentYear >= 1600){
                text.innerHTML =
                "NAME: Revolutionary France" + 
                "<br>POPULATION: TEXT" +
                "<br>GDP: $36,917,197,872";
            } else if(currentYear >= 1550){
                text.innerHTML =
                "NAME: NAME" + 
                "<br>POPULATION: TEXT" +
                "<br>GDP: $30,933,723,884";
            } else if(currentYear >= 1500){
                text.innerHTML =
                "NAME: NAME" + 
                "<br>POPULATION: TEXT" +
                "<br>GDP: $31,494,577,738";
            } else {
                text.innerHTML = 
                "Not Enough Data"
            }
        } else if(fillColor === UK) {
            data.style.display = "flex"; 
            if(currentYear >= 2022){
                text.innerHTML =
                "NAME: UK" + 
                "<br>POPULATION: POPULATION" +
                "<br>GDP: $3,411,255,000,000";
            } else if(currentYear >= 2020){
                text.innerHTML =
                "NAME: UK" + 
                "<br>POPULATION: TEXT" +
                "<br>GDP: $3,019,057,000,000";
            } else if(currentYear >= 2010){
                text.innerHTML =
                "NAME: UK" + 
                "<br>POPULATION: TEXT" +
                "<br>GDP: $2,715,342,195,952";
            } else if(currentYear >= 2000){
                text.innerHTML =
                "NAME: UK" + 
                "<br>POPULATION: TEXT" +
                "<br>GDP: $2,341,885,449,957";
            } else if(currentYear >= 1990){
                text.innerHTML =
                "NAME: UK" + 
                "<br>POPULATION: TEXT" +
                "<br>GDP: $2,063,348,057,633";
            } else if(currentYear >= 1980){
                text.innerHTML =
                "NAME: UK" + 
                "<br>POPULATION: TEXT" +
                "<br>GDP: $1,541,083,825,696";
            } else if(currentYear >= 1970){
                text.innerHTML =
                "NAME: UK" + 
                "<br>POPULATION: TEXT" +
                "<br>GDP: $1,254,817,532,612";
            } else if(currentYear >= 1960){
                text.innerHTML =
                "NAME: British Empire" + 
                "<br>POPULATION: TEXT" +
                "<br>GDP: $1097811490226";
            } else if(currentYear >= 1950){
                text.innerHTML =
                "NAME: British Empire" + 
                "<br>POPULATION: TEXT" +
                "<br>GDP: $909,079,070,699";
            } else if(currentYear >= 1940){
                text.innerHTML =
                "NAME: British Empire" + 
                "<br>POPULATION: TEXT" +
                "<br>GDP: $1,486,944,123,444";
            } else if(currentYear >= 1930){
                text.innerHTML =
                "NAME: British Empire" + 
                "<br>POPULATION: TEXT" +
                "<br>GDP: $1,360,292,099,986";
            } else if(currentYear >= 1920){
                text.innerHTML =
                "NAME: British Empire" + 
                "<br>POPULATION: TEXT" +
                "<br>GDP: $1,076,157,864,833";
            } else if(currentYear >= 1910){
                text.innerHTML =
                "NAME: British Empire" + 
                "<br>POPULATION: TEXT" +
                "<br>GDP: $1,092,263,501,655";
            } else if(currentYear >= 1900){
                text.innerHTML =
                "NAME: British Empire" + 
                "<br>POPULATION: TEXT" +
                "<br>GDP: $908,465,698,102";
            } else if(currentYear >= 1890){
                text.innerHTML =
                "NAME: British Empire" + 
                "<br>POPULATION: TEXT" +
                "<br>GDP: $775,843,946,871";
            } else if(currentYear >= 1880){
                text.innerHTML =
                "NAME: British Empire" + 
                "<br>POPULATION: TEXT" +
                "<br>GDP: $617,900,322,270";
            } else if(currentYear >= 1870){
                text.innerHTML =
                "NAME: British Empire" + 
                "<br>POPULATION: TEXT" +
                "<br>GDP: $552,827,062,957";
            } else if(currentYear >= 1850){
                text.innerHTML =
                "NAME: British Empire" + 
                "<br>POPULATION: TEXT" +
                "<br>GDP: $460,878,519,858";
            } else if(currentYear >= 1830){
                text.innerHTML =
                "NAME: British Empire" + 
                "<br>POPULATION: TEXT" +
                "<br>GDP: $366,106,701,410";
            } else if(currentYear >= 1820){
                text.innerHTML =
                "NAME: British Empire" + 
                "<br>POPULATION: TEXT" +
                "<br>GDP: $330,034,264,150";
            } else if(currentYear >= 1800){
                text.innerHTML =
                "NAME: British Empire" + 
                "<br>POPULATION: TEXT" +
                "<br>GDP: $186,553,369,083";
            } else if(currentYear >= 1750){
                text.innerHTML =
                "NAME: British Empire" + 
                "<br>POPULATION: TEXT" +
                "<br>GDP: $59,744,490,018";
            } else if(currentYear >= 1700){
                text.innerHTML =
                "NAME: England" + 
                "<br>POPULATION: TEXT" +
                "<br>GDP: $31,334,145,846";
            } else if(currentYear >= 1650){
                text.innerHTML =
                "NAME: England" + 
                "<br>POPULATION: TEXT" +
                "<br>GDP: $18,790,945,199";
            } else if(currentYear >= 1600){
                text.innerHTML =
                "NAME: England" + 
                "<br>POPULATION: TEXT" +
                "<br>GDP: $17,519,186,331";
            } else if(currentYear >= 1550){
                text.innerHTML =
                "NAME: England" + 
                "<br>POPULATION: TEXT" +
                "<br>GDP: $14,203,579,261";
            } else if(currentYear >= 1500){
                text.innerHTML =
                "NAME: England" + 
                "<br>POPULATION: TEXT" +
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
                "<br>POPULATION: POPULATION" +
                "<br>GDP: $2,910,183,000,000";
            } else if(currentYear >= 2020){
                text.innerHTML =
                "NAME: Turkey" + 
                "<br>POPULATION: TEXT" +
                "<br>GDP: $2,371,568,000,000";
            } else if(currentYear >= 2010){
                text.innerHTML =
                "NAME: Turkey" + 
                "<br>POPULATION: TEXT" +
                "<br>GDP: $1,581,703,157,265";
            } else if(currentYear >= 2000){
                text.innerHTML =
                "NAME: Turkey" + 
                "<br>POPULATION: TEXT" +
                "<br>GDP: $1,000,929,480,007";
            } else if(currentYear >= 1990){
                text.innerHTML =
                "NAME: Turkey" + 
                "<br>POPULATION: TEXT" +
                "<br>GDP: $603,322,533,152";
            } else if(currentYear >= 1980){
                text.innerHTML =
                "NAME: Turkey" + 
                "<br>POPULATION: TEXT" +
                "<br>GDP: $338,918,542,676";
            } else if(currentYear >= 1910 && currentYear <= 1919){
                text.innerHTML =
                "NAME: Ottoman Empire" + 
                "<br>POPULATION: TEXT" +
                "<br>GDP: $46,544,886,678";
            } else if(currentYear >= 1900){
                text.innerHTML =
                "NAME: Ottoman Empire" + 
                "<br>POPULATION: TEXT" +
                "<br>GDP: $41,612,155,717";
            } else if(currentYear >= 1890){
                text.innerHTML =
                "NAME: Ottoman Empire" + 
                "<br>POPULATION: TEXT" +
                "<br>GDP: $38,965,734,406";
            } else if(currentYear >= 1880){
                text.innerHTML =
                "NAME: Ottoman Empire" + 
                "<br>POPULATION: TEXT" +
                "<br>GDP: $36,100,266,184";
            } else if(currentYear >= 1870){
                text.innerHTML =
                "NAME: Ottoman Empire" + 
                "<br>POPULATION: TEXT" +
                "<br>GDP: $37,358,358,049";
            } else if(currentYear >= 1850){
                text.innerHTML =
                "NAME: Ottoman Empire" + 
                "<br>POPULATION: TEXT" +
                "<br>GDP: $49,283,733,673";
            } else if(currentYear >= 1830){
                text.innerHTML =
                "NAME: Ottoman Empire" + 
                "<br>POPULATION: TEXT" +
                "<br>GDP: $36,869,258,429";
            } else if(currentYear >= 1820){
                text.innerHTML =
                "NAME: Ottoman Empire" + 
                "<br>POPULATION: TEXT" +
                "<br>GDP: $37,653,112,080";
            } else if(currentYear >= 1800){
                text.innerHTML =
                "NAME: Ottoman Empire" + 
                "<br>POPULATION: TEXT" +
                "<br>GDP: $36,083,523,604";
            } else if(currentYear >= 1750){
                text.innerHTML =
                "NAME: Ottoman Empire" + 
                "<br>POPULATION: TEXT" +
                "<br>GDP: $38,463,814,740";
            } else if(currentYear >= 1700){
                text.innerHTML =
                "NAME: Ottoman Empire" + 
                "<br>POPULATION: TEXT" +
                "<br>GDP: $33,021,118,042";
            } else if(currentYear >= 1650){
                text.innerHTML =
                "NAME: Ottoman Empire" + 
                "<br>POPULATION: TEXT" +
                "<br>GDP: $34,686,158,596";
            } else if(currentYear >= 1600){
                text.innerHTML =
                "NAME: Ottoman Empire" + 
                "<br>POPULATION: TEXT" +
                "<br>GDP: $34,619,798,176";
            } else if(currentYear >= 1550){
                text.innerHTML =
                "NAME: Ottoman Empire" + 
                "<br>POPULATION: TEXT" +
                "<br>GDP: $29,427,328,955";
            } else if(currentYear >= 1500){
                text.innerHTML =
                "NAME: Ottoman Empire" + 
                "<br>POPULATION: TEXT" +
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
                "<br>POPULATION: POPULATION" +
                "<br>GDP: $2,765,866,000,000";
            } else if(currentYear >= 2020){
                text.innerHTML =
                "NAME: Italy" + 
                "<br>POPULATION: TEXT" +
                "<br>GDP: $2,491,740,000,000";
            } else if(currentYear >= 2010){
                text.innerHTML =
                "NAME: Italy" + 
                "<br>POPULATION: TEXT" +
                "<br>GDP: $2,555,378,233,657";
            } else if(currentYear >= 2000){
                text.innerHTML =
                "NAME: Italy" + 
                "<br>POPULATION: TEXT" +
                "<br>GDP: $2,310,044,384,765";
            } else if(currentYear >= 1990){
                text.innerHTML =
                "NAME: Italy" + 
                "<br>POPULATION: TEXT" +
                "<br>GDP: $1,828,802,783,558";
            } else if(currentYear >= 1980){
                text.innerHTML =
                "NAME: Italy" + 
                "<br>POPULATION: TEXT" +
                "<br>GDP: $1,466,470,470,259";
            } else if(currentYear >= 1970){
                text.innerHTML =
                "NAME: Italy" + 
                "<br>POPULATION: TEXT" +
                "<br>GDP: $1,030,379,892,324";
            } else if(currentYear >= 1960){
                text.innerHTML =
                "NAME: Italy" + 
                "<br>POPULATION: TEXT" +
                "<br>GDP: $586,717,756,375";
            } else if(currentYear >= 1950){
                text.innerHTML =
                "NAME: Italy" + 
                "<br>POPULATION: TEXT" +
                "<br>GDP: $325,902,705,034";
            } else if(currentYear >= 1940){
                text.innerHTML =
                "NAME: Kingdom of Italy" + 
                "<br>POPULATION: TEXT" +
                "<br>GDP: $298,071,393,255";
            } else if(currentYear >= 1930){
                text.innerHTML =
                "NAME: Kingdom of Italy" + 
                "<br>POPULATION: TEXT" +
                "<br>GDP: $239,821,863,175";
            } else if(currentYear >= 1920){
                text.innerHTML =
                "NAME: Kingdom of Italy" + 
                "<br>POPULATION: TEXT" +
                "<br>GDP: $179,725,677,056";
            } else if(currentYear >= 1910){
                text.innerHTML =
                "NAME: Kingdom of Italy" + 
                "<br>POPULATION: TEXT" +
                "<br>GDP: $173,566,218,811";
            } else if(currentYear >= 1900){
                text.innerHTML =
                "NAME: Kingdom of Italy" + 
                "<br>POPULATION: TEXT" +
                "<br>GDP: $136,222,920,708";
            } else if(currentYear >= 1890){
                text.innerHTML =
                "NAME: Kingdom of Italy" + 
                "<br>POPULATION: TEXT" +
                "<br>GDP: $116,858,081,137";
            } else if(currentYear >= 1880){
                text.innerHTML =
                "NAME: Kingdom of Italy" + 
                "<br>POPULATION: TEXT" +
                "<br>GDP: $102,350,639,967";
            } else if(currentYear >= 1870){
                text.innerHTML =
                "NAME: Kingdom of Italy" + 
                "<br>POPULATION: TEXT" +
                "<br>GDP: $91,292,872,976";
            } else if(currentYear >= 1850){
                text.innerHTML =
                "NAME: Sardinia Piedmont" + 
                "<br>POPULATION: TEXT" +
                "<br>GDP: $18,494,844,337";
            } else if(currentYear >= 1830){
                text.innerHTML =
                "NAME: Sardinia Piedmont" + 
                "<br>POPULATION: TEXT" +
                "<br>GDP: $16,553,120,918";
            } else if(currentYear >= 1820){
                text.innerHTML =
                "NAME: Sardinia Piedmont" + 
                "<br>POPULATION: TEXT" +
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
                "<br>POPULATION: POPULATION" +
                "<br>GDP: $2,753,202,000,000";
            } else if(currentYear >= 2020){
                text.innerHTML =
                "NAME: Mexico" + 
                "<br>POPULATION: TEXT" +
                "<br>GDP: $2,428,201,000,000";
            } else if(currentYear >= 2010){
                text.innerHTML =
                "NAME: Mexico" + 
                "<br>POPULATION: TEXT" +
                "<br>GDP: $2,029,895,317,848";
            } else if(currentYear >= 2000){
                text.innerHTML =
                "NAME: Mexico" + 
                "<br>POPULATION: TEXT" +
                "<br>GDP: $1,538,359,576,947";
            } else if(currentYear >= 1990){
                text.innerHTML =
                "NAME: Mexico" + 
                "<br>POPULATION: TEXT" +
                "<br>GDP: $1,020,792,295,864";
            } else if(currentYear >= 1980){
                text.innerHTML =
                "NAME: Mexico" + 
                "<br>POPULATION: TEXT" +
                "<br>GDP: 841,116,383,061";
            } else if(currentYear >= 1970){
                text.innerHTML =
                "NAME: Mexico" + 
                "<br>POPULATION: TEXT" +
                "<br>GDP: $449,578,683,029";
            } else if(currentYear >= 1960){
                text.innerHTML =
                "NAME: Mexico" + 
                "<br>POPULATION: TEXT" +
                "<br>GDP: $225,839,569,173";
            } else if(currentYear >= 1950){
                text.innerHTML =
                "NAME: Mexico" + 
                "<br>POPULATION: TEXT" +
                "<br>GDP: $123,923,726,664";
            } else if(currentYear >= 1940){
                text.innerHTML =
                "NAME: Mexico" + 
                "<br>POPULATION: TEXT" +
                "<br>GDP: $64,707,140,692";
            } else if(currentYear >= 1920 && currentYear <= 1930){
                text.innerHTML =
                "NAME: Mexico" + 
                "<br>POPULATION: TEXT" +
                "<br>GDP: $47,130,067,673,O18";
            } else if(currentYear >= 1910){
                text.innerHTML =
                "NAME: Mexico" + 
                "<br>POPULATION: TEXT" +
                "<br>GDP: $41,645,722,629";
            } else if(currentYear >= 1900){
                text.innerHTML =
                "NAME: Mexico" + 
                "<br>POPULATION: TEXT" +
                "<br>GDP: $30,728,536,888";
            } else if(currentYear >= 1890){
                text.innerHTML =
                "NAME: Mexico" + 
                "<br>POPULATION: TEXT" +
                "<br>GDP: $22,794,925,100";
            } else if(currentYear >= 1880){
                text.innerHTML =
                "NAME: Mexico" + 
                "<br>POPULATION: TEXT" +
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
                "<br>POPULATION: POPULATION" +
                "<br>GDP: $2,561,887,000,000";
            } else if(currentYear >= 2020){
                text.innerHTML =
                "NAME: South Korea" + 
                "<br>POPULATION: TEXT" +
                "<br>GDP: $2,233,001,000,000";
            } else if(currentYear >= 2010){
                text.innerHTML =
                "NAME: South Korea" + 
                "<br>POPULATION: TEXT" +
                "<br>GDP: $1,937,064,090,625";
            } else if(currentYear >= 2000){
                text.innerHTML =
                "NAME: South Korea" + 
                "<br>POPULATION: TEXT" +
                "<br>GDP: $1,346,372,578,722";
            } else if(currentYear >= 1700 && currentYear <= 1750){
                text.innerHTML =
                "NAME: Joseon Korea" + 
                "<br>POPULATION: TEXT" +
                "<br>GDP: $10,577,751,441";
            } else if(currentYear >= 1600 && currentYear <= 1650){
                text.innerHTML =
                "NAME: Joseon Korea" + 
                "<br>POPULATION: TEXT" +
                "<br>GDP: $9,142,837,058";
            } else if(currentYear >= 1550){
                text.innerHTML =
                "NAME: Joseon Korea" + 
                "<br>POPULATION: TEXT" +
                "<br>GDP: $8,443,604,545";
            } else if(currentYear >= 1500){
                text.innerHTML =
                "NAME: Joseon Korea" + 
                "<br>POPULATION: TEXT" +
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
                "<br>POPULATION: POPULATION" +
                "<br>GDP: $2,117,759,000,000";
            } else if(currentYear >= 2020){
                text.innerHTML =
                "NAME: Canada" + 
                "<br>POPULATION: TEXT" +
                "<br>GDP: $1,827,010,000,000";
            } else if(currentYear >= 2010){
                text.innerHTML =
                "NAME: Canada" + 
                "<br>POPULATION: TEXT" +
                "<br>GDP: $1,744,424,023,018";
            } else if(currentYear >= 2000){
                text.innerHTML =
                "NAME: Canada" + 
                "<br>POPULATION: TEXT" +
                "<br>GDP: $1,411,361,255,654";
            } else if(currentYear >= 1990){
                text.innerHTML =
                "NAME: Canada" + 
                "<br>POPULATION: TEXT" +
                "<br>GDP: $1,036,196,225,666";
            } else if(currentYear >= 1980){
                text.innerHTML =
                "NAME: Canada" + 
                "<br>POPULATION: TEXT" +
                "<br>GDP: $785,946,396,687";
            } else if(currentYear >= 1970){
                text.innerHTML =
                "NAME: Canada" + 
                "<br>POPULATION: TEXT" +
                "<br>GDP: $517,785,545,572";
            } else if(currentYear >= 1960){
                text.innerHTML =
                "NAME: Canada" + 
                "<br>POPULATION: TEXT" +
                "<br>GDP: $315,889,231,482";
            } else if(currentYear >= 1950){
                text.innerHTML =
                "NAME: Canada" + 
                "<br>POPULATION: TEXT" +
                "<br>GDP: $201,827,866,370";
            } else if(currentYear >= 1940){
                text.innerHTML =
                "NAME: Canada" + 
                "<br>POPULATION: TEXT" +
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
                "<br>POPULATION: POPULATION" +
                "<br>GDP: $1,199,211,000,000";
            } else if(currentYear >= 2020){
                text.innerHTML =
                "NAME: Nigeria" + 
                "<br>POPULATION: TEXT" +
                "<br>GDP: $1,069,189,000,000";
            } else if(currentYear >= 2010){
                text.innerHTML =
                "NAME: Nigeria" + 
                "<br>POPULATION: TEXT" +
                "<br>GDP: $1,004,071,158,955";
            } else if(currentYear >= 2000){
                text.innerHTML =
                "NAME: Nigeria" + 
                "<br>POPULATION: TEXT" +
                "<br>GDP: $332,366,369,077";
            } else if(currentYear >= 1990){
                text.innerHTML =
                "NAME: Nigeria" + 
                "<br>POPULATION: TEXT" +
                "<br>GDP: $212,292,655,609";
            } else if(currentYear >= 1980){
                text.innerHTML =
                "NAME: Nigeria" + 
                "<br>POPULATION: TEXT" +
                "<br>GDP: $192,893,666,509";
            } else if(currentYear >= 1970){
                text.innerHTML =
                "NAME: Nigeria" + 
                "<br>POPULATION: TEXT" +
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
                "<br>POPULATION: POPULATION" +
                "<br>GDP: $952,603,000,000";
            } else if(currentYear >= 2020){
                text.innerHTML =
                "NAME: South Africa" + 
                "<br>POPULATION: TEXT" +
                "<br>GDP: $798,957,000,000";
            } else if(currentYear >= 2010){
                text.innerHTML =
                "NAME: South Africa" + 
                "<br>POPULATION: TEXT" +
                "<br>GDP: $716,720,101,390";
            } else if(currentYear >= 2000){
                text.innerHTML =
                "NAME: South Africa" + 
                "<br>POPULATION: TEXT" +
                "<br>GDP: $421,836,720,793";
            } else if(currentYear >= 1990){
                text.innerHTML =
                "NAME: South Africa" + 
                "<br>POPULATION: TEXT" +
                "<br>GDP: $291,429,374,843";
            } else if(currentYear >= 1980){
                text.innerHTML =
                "NAME: South Africa" + 
                "<br>POPULATION: TEXT" +
                "<br>GDP: $261,975,752,336";
            } else if(currentYear >= 1970){
                text.innerHTML =
                "NAME: South Africa" + 
                "<br>POPULATION: TEXT" +
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
                "<br>POPULATION: POPULATION" +
                "<br>GDP: $346,893,000,000";
            } else if(currentYear >= 2020){
                text.innerHTML =
                "NAME: Ethiopia" + 
                "<br>POPULATION: TEXT" +
                "<br>GDP: $282,904,000,000";
            } else if(currentYear >= 2010){
                text.innerHTML =
                "NAME: Ethiopia" + 
                "<br>POPULATION: TEXT" +
                "<br>GDP: $116,652,861,923";
            } else if(currentYear >= 2000){
                text.innerHTML =
                "NAME: Ethiopia" + 
                "<br>POPULATION: TEXT" +
                "<br>GDP: $62,399,714,809";
            } else if(currentYear >= 1990){
                text.innerHTML =
                "NAME: Ethiopia" + 
                "<br>POPULATION: TEXT" +
                "<br>GDP: $55,813,709,019";
            } else if(currentYear >= 1980){
                text.innerHTML =
                "NAME: Ethiopia" + 
                "<br>POPULATION: TEXT" +
                "<br>GDP: $47,201,680,964";
            } else if(currentYear >= 1880 && currentYear <= 1890){
                text.innerHTML =
                "NAME: Ethiopian Empire" + 
                "<br>POPULATION: TEXT" +
                "<br>GDP: $3,133,870,326";
            } else if(currentYear >= 1870){
                text.innerHTML =
                "NAME: Ethiopian Empire" + 
                "<br>POPULATION: TEXT" +
                "<br>GDP: $2,852,574,759";
            } else if(currentYear >= 1850){
                text.innerHTML =
                "NAME: Ethiopian Empire" + 
                "<br>POPULATION: TEXT" +
                "<br>GDP: $2,648,819,419";
            } else if(currentYear >= 1830){
                text.innerHTML =
                "NAME: Ethiopian Empire" + 
                "<br>POPULATION: TEXT" +
                "<br>GDP: $2,512,982,526";
            } else if(currentYear >= 1820){
                text.innerHTML =
                "NAME: Ethiopian Empire" + 
                "<br>POPULATION: TEXT" +
                "<br>GDP: $2,445,064,079";
            } else if(currentYear >= 1800){
                text.innerHTML =
                "NAME: Ethiopian Empire" + 
                "<br>POPULATION: TEXT" +
                "<br>GDP: $2,373,509,239";
            } else if(currentYear >= 1750){
                text.innerHTML =
                "NAME: Ethiopian Empire" + 
                "<br>POPULATION: TEXT" +
                "<br>GDP: $2,194,622,139";
            } else if(currentYear >= 1700){
                text.innerHTML =
                "NAME: Ethiopian Empire" + 
                "<br>POPULATION: TEXT" +
                "<br>GDP: $2,015,735,038";
            } else if(currentYear >= 1650){
                text.innerHTML =
                "NAME: Ethiopian Empire" + 
                "<br>POPULATION: TEXT" +
                "<br>GDP: $1,925,685,422";
            } else if(currentYear >= 1600){
                text.innerHTML =
                "NAME: Ethiopian Empire" + 
                "<br>POPULATION: TEXT" +
                "<br>GDP: $1,835,635,807";
            } else if(currentYear >= 1550){
                text.innerHTML =
                "NAME: Ethiopian Empire" + 
                "<br>POPULATION: TEXT" +
                "<br>GDP: $1,675,712,694";
            } else if(currentYear >= 1500){
                text.innerHTML =
                "NAME: Ethiopian Empire" + 
                "<br>POPULATION: TEXT" +
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
                "<br>POPULATION: POPULATION" +
                "<br>GDP: $120,533,000,000";
            } else if(currentYear >= 2020){
                text.innerHTML =
                "NAME: DR Congo" + 
                "<br>POPULATION: TEXT" +
                "<br>GDP: $101,302,000,000";
            } else if(currentYear >= 2010){
                text.innerHTML =
                "NAME: DR Congo" + 
                "<br>POPULATION: TEXT" +
                "<br>GDP: $57,280,654,809";
            } else if(currentYear >= 2000){
                text.innerHTML =
                "NAME: DR Congo" + 
                "<br>POPULATION: TEXT" +
                "<br>GDP: $27,084,280,838";
            } else if(currentYear >= 1990){
                text.innerHTML =
                "NAME: Zaire" + 
                "<br>POPULATION: TEXT" +
                "<br>GDP: $39,346,793,218";
            } else if(currentYear >= 1980){
                text.innerHTML =
                "NAME: Zaire" + 
                "<br>POPULATION: TEXT" +
                "<br>GDP: $34,270,201,939";
            } else if(currentYear >= 1970){
                text.innerHTML =
                "NAME: DR Congo" + 
                "<br>POPULATION: TEXT" +
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
                "<br>POPULATION: POPULATION" +
                "<br>GDP: $1,527,230,000,000";
            } else if(currentYear >= 2020){
                text.innerHTML =
                "NAME: Australia" + 
                "<br>POPULATION: TEXT" +
                "<br>GDP: $1,349,040,000,000";
            } else if(currentYear >= 2010){
                text.innerHTML =
                "NAME: Australia" + 
                "<br>POPULATION: TEXT" +
                "<br>GDP: $1,232,116,467,799";
            } else if(currentYear >= 2000){
                text.innerHTML =
                "NAME: Australia" + 
                "<br>POPULATION: TEXT" +
                "<br>GDP: $857,542,327,403";
            } else if(currentYear >= 1990){
                text.innerHTML =
                "NAME: Australia" + 
                "<br>POPULATION: TEXT" +
                "<br>GDP: $575,276,893,033";
            } else if(currentYear >= 1980){
                text.innerHTML =
                "NAME: Australia" + 
                "<br>POPULATION: TEXT" +
                "<br>GDP: $416,158,210,003";
            } else if(currentYear >= 1970){
                text.innerHTML =
                "NAME: Australia" + 
                "<br>POPULATION: TEXT" +
                "<br>GDP: $300,743,544,823";
            } else if(currentYear >= 1950 && currentYear <= 1960){
                text.innerHTML =
                "NAME: Australia" + 
                "<br>POPULATION: TEXT" +
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
                "<br>POPULATION: POPULATION" +
                "<br>GDP: $604,551,000,000";
            } else if(currentYear >= 2020){
                text.innerHTML =
                "NAME: Kazakhstan" + 
                "<br>POPULATION: TEXT" +
                "<br>GDP: $501,798,000,000";
            } else if(currentYear >= 2010){
                text.innerHTML =
                "NAME: Kazakhstan" + 
                "<br>POPULATION: TEXT" +
                "<br>GDP: $413,278,597,920";
            } else if(currentYear >= 2000){
                text.innerHTML =
                "NAME: Kazakhstan" + 
                "<br>POPULATION: TEXT" +
                "<br>GDP: $176,936,705,060";
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

// else if(fillColor === NAME) {
//     data.style.display = "flex"; 
//     if(currentYear >= 2022){
//         text.innerHTML =
//         "NAME: NAME" + 
//         "<br>POPULATION: POPULATION" +
//         "<br>GDP: $5,856,478,000,000";
//     } else if(currentYear >= 2020){
//         text.innerHTML =
//         "NAME: NAME" + 
//         "<br>POPULATION: TEXT" +
//         "<br>GDP: TEXT";
//     } else if(currentYear >= 2010){
//         text.innerHTML =
//         "NAME: NAME" + 
//         "<br>POPULATION: TEXT" +
//         "<br>GDP: TEXT";
//     } else if(currentYear >= 2000){
//         text.innerHTML =
//         "NAME: NAME" + 
//         "<br>POPULATION: TEXT" +
//         "<br>GDP: TEXT";
//     } else if(currentYear >= 1990){
//         text.innerHTML =
//         "NAME: NAME" + 
//         "<br>POPULATION: TEXT" +
//         "<br>GDP: TEXT";
//     } else if(currentYear >= 1980){
//         text.innerHTML =
//         "NAME: NAME" + 
//         "<br>POPULATION: TEXT" +
//         "<br>GDP: TEXT";
//     } else if(currentYear >= 1970){
//         text.innerHTML =
//         "NAME: NAME" + 
//         "<br>POPULATION: TEXT" +
//         "<br>GDP: TEXT";
//     } else if(currentYear >= 1960){
//         text.innerHTML =
//         "NAME: NAME" + 
//         "<br>POPULATION: TEXT" +
//         "<br>GDP: TEXT";
//     } else if(currentYear >= 1950){
//         text.innerHTML =
//         "NAME: NAME" + 
//         "<br>POPULATION: TEXT" +
//         "<br>GDP: TEXT";
//     } else if(currentYear >= 1940){
//         text.innerHTML =
//         "NAME: NAME" + 
//         "<br>POPULATION: TEXT" +
//         "<br>GDP: TEXT";
//     } else if(currentYear >= 1930){
//         text.innerHTML =
//         "NAME: NAME" + 
//         "<br>POPULATION: TEXT" +
//         "<br>GDP: TEXT";
//     } else if(currentYear >= 1920){
//         text.innerHTML =
//         "NAME: NAME" + 
//         "<br>POPULATION: TEXT" +
//         "<br>GDP: TEXT";
//     } else if(currentYear >= 1910){
//         text.innerHTML =
//         "NAME: NAME" + 
//         "<br>POPULATION: TEXT" +
//         "<br>GDP: TEXT";
//     } else if(currentYear >= 1900){
//         text.innerHTML =
//         "NAME: NAME" + 
//         "<br>POPULATION: TEXT" +
//         "<br>GDP: TEXT";
//     } else if(currentYear >= 1890){
//         text.innerHTML =
//         "NAME: NAME" + 
//         "<br>POPULATION: TEXT" +
//         "<br>GDP: TEXT";
//     } else if(currentYear >= 1880){
//         text.innerHTML =
//         "NAME: NAME" + 
//         "<br>POPULATION: TEXT" +
//         "<br>GDP: TEXT";
//     } else if(currentYear >= 1870){
//         text.innerHTML =
//         "NAME: NAME" + 
//         "<br>POPULATION: TEXT" +
//         "<br>GDP: TEXT";
//     } else if(currentYear >= 1850){
//         text.innerHTML =
//         "NAME: NAME" + 
//         "<br>POPULATION: TEXT" +
//         "<br>GDP: TEXT";
//     } else if(currentYear >= 1830){
//         text.innerHTML =
//         "NAME: NAME" + 
//         "<br>POPULATION: TEXT" +
//         "<br>GDP: TEXT";
//     } else if(currentYear >= 1820){
//         text.innerHTML =
//         "NAME: NAME" + 
//         "<br>POPULATION: TEXT" +
//         "<br>GDP: TEXT";
//     } else if(currentYear >= 1800){
//         text.innerHTML =
//         "NAME: NAME" + 
//         "<br>POPULATION: TEXT" +
//         "<br>GDP: TEXT";
//     } else if(currentYear >= 1750){
//         text.innerHTML =
//         "NAME: NAME" + 
//         "<br>POPULATION: TEXT" +
//         "<br>GDP: TEXT";
//     } else if(currentYear >= 1700){
//         text.innerHTML =
//         "NAME: NAME" + 
//         "<br>POPULATION: TEXT" +
//         "<br>GDP: TEXT";
//     } else if(currentYear >= 1650){
//         text.innerHTML =
//         "NAME: NAME" + 
//         "<br>POPULATION: TEXT" +
//         "<br>GDP: TEXT";
//     } else if(currentYear >= 1600){
//         text.innerHTML =
//         "NAME: NAME" + 
//         "<br>POPULATION: TEXT" +
//         "<br>GDP: TEXT";
//     } else if(currentYear >= 1550){
//         text.innerHTML =
//         "NAME: NAME" + 
//         "<br>POPULATION: TEXT" +
//         "<br>GDP: TEXT";
//     } else if(currentYear >= 1500){
//         text.innerHTML =
//         "NAME: NAME" + 
//         "<br>POPULATION: TEXT" +
//         "<br>GDP: TEXT";
//     } else {
//         text.innerHTML = 
//         "Not Enough Data"
//     }
// }