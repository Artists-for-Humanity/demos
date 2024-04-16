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
                "<br>POPULATION: 1,439,323,776" +
                "<br>GDP: $28,779,528,000,000";
            } else if(currentYear >= 2020){
                text.innerHTML = 
                "NAME: China" + 
                "<br>POPULATION: 1,439,323,776" +
                "<br>GDP: $25,466,031,330,345";
            } else if(currentYear >= 2010){
                text.innerHTML = 
                "NAME: China" + 
                "<br>POPULATION: 1,439,323,776" +
                "<br>GDP: $16,387,244,811,847";
            } else if(currentYear >= 2000){
                text.innerHTML = 
                "NAME: China" + 
                "<br>POPULATION: 1,439,323,776" +
                "<br>GDP: $7,673,176,625,788";
            } else if(currentYear >= 1990){
                text.innerHTML = 
                "NAME: China" + 
                "<br>POPULATION: 1,439,323,776" +
                "<br>GDP: $4,195,025,697,589";
            } else if(currentYear >= 1980){
                text.innerHTML = 
                "NAME: China" + 
                "<br>POPULATION: 1,439,323,776" +
                "<br>GDP: $2,347,261,441,755";
            } else if(currentYear >= 1970){
                text.innerHTML = 
                "NAME: China" + 
                "<br>POPULATION: 1,439,323,776" +
                "<br>GDP: $1,417,943,115,464";
            } else if(currentYear >= 1960){
                text.innerHTML = 
                "NAME: China" + 
                "<br>POPULATION: 1,439,323,776" +
                "<br>GDP: $873,931,758,610";
            } else if(currentYear >= 1950){
                text.innerHTML = 
                "NAME: China" + 
                "<br>POPULATION: 1,439,323,776" +
                "<br>GDP: $541,524,766,362";
            } else if(currentYear >= 1940){
                text.innerHTML = 
                "NAME: Nationalist China" + 
                "<br>POPULATION: 1,439,323,776" +
                "<br>GDP: $481,729,267,600";
            } else if(currentYear >= 1930){
                text.innerHTML = 
                "NAME: Nationalist China" + 
                "<br>POPULATION: 1,439,323,776" +
                "<br>GDP: $511,139,272,336";
            } else if(currentYear >= 1920){
                text.innerHTML = 
                "NAME: Beiyang China" + 
                "<br>POPULATION: 1,439,323,776" +
                "<br>GDP: $242,571,245,021";
            } else if(currentYear >= 1910){
                text.innerHTML = 
                "NAME: Qing China" + 
                "<br>POPULATION: 1,439,323,776" +
                "<br>GDP: $478,164,237,475";
            } else if(currentYear >= 1900){
                text.innerHTML = 
                "NAME: Qing China" + 
                "<br>POPULATION: 1,439,323,776" +
                "<br>GDP: $482,331,900,697";
            } else if(currentYear >= 1900){
                text.innerHTML = 
                "NAME: Qing China" + 
                "<br>POPULATION: 1,439,323,776" +
                "<br>GDP: $482,331,900,697";
            } else if(currentYear >= 1890){
                text.innerHTML = 
                "NAME: Qing China" + 
                "<br>POPULATION: 1,439,323,776" +
                "<br>GDP: $457,662,848,515";
            } else if(currentYear >= 1880){
                text.innerHTML = 
                "NAME: Qing China" + 
                "<br>POPULATION: 1,439,323,776" +
                "<br>GDP: $425,570,509,701";
            } else if(currentYear >= 1870){
                text.innerHTML = 
                "NAME: Qing China" + 
                "<br>POPULATION: 1,439,323,776" +
                "<br>GDP: $422,485,572,987";
            } else if(currentYear >= 1850){
                text.innerHTML = 
                "NAME: Qing China" + 
                "<br>POPULATION: 1,439,323,776" +
                "<br>GDP: $441,136,619,373";
            } else if(currentYear >= 1830){
                text.innerHTML = 
                "NAME: Qing China" + 
                "<br>POPULATION: 1,439,323,776" +
                "<br>GDP: $431,764,485,286";
            } else if(currentYear >= 1820){
                text.innerHTML = 
                "NAME: Qing China" + 
                "<br>POPULATION: 1,439,323,776" +
                "<br>GDP: $419,332,620,136";
            } else if(currentYear >= 1800){
                text.innerHTML = 
                "NAME: Qing China" + 
                "<br>POPULATION: 1,439,323,776" +
                "<br>GDP: $393,223,436,333";
            } else if(currentYear >= 1750){
                text.innerHTML = 
                "NAME: Qing China" + 
                "<br>POPULATION: 1,439,323,776" +
                "<br>GDP: $316,818,059,260";
            } else if(currentYear >= 1750){
                data.style.display = "flex";
                text.innerHTML = 
                "NAME: Qing China" + 
                "<br>POPULATION: 1,439,323,776" +
                "<br>GDP: $316,818,059,260";
            } else if(currentYear >= 1700){
                text.innerHTML = 
                "NAME: Qing China" + 
                "<br>POPULATION: 1,439,323,776" +
                "<br>GDP: $265,881,644,432";
            } else if(currentYear >= 1650){
                text.innerHTML = 
                "NAME: Qing China" + 
                "<br>POPULATION: 1,439,323,776" +
                "<br>GDP: $177,440,300,336";
            } else {
                text.innerHTML = 
                "Not Enough Data";
            }
        } else if (fillColor === USA) {
            data.style.display = "flex";
            if(currentYear >= 2022){
                text.innerHTML = 
                "NAME: United States" + 
                "<br>POPULATION: 1,439,323,776" +
                "<br>GDP: $24,003,704,000,000";
            } else if(currentYear >= 2020){
                text.innerHTML = 
                "NAME: United States" + 
                "<br>POPULATION: 1,439,323,776" +
                "<br>GDP: $20,936,600,000,000";
            } else if(currentYear >= 2010){
                text.innerHTML = 
                "NAME: United States" + 
                "<br>POPULATION: 1,439,323,776" +
                "<br>GDP: $18,927,301,116,874";
            } else if(currentYear >= 2000){
                text.innerHTML = 
                "NAME: United States" + 
                "<br>POPULATION: 1,439,323,776" +
                "<br>GDP: $16,209,738,317,694";
            } else if(currentYear >= 1990){
                text.innerHTML = 
                "NAME: United States" + 
                "<br>POPULATION: 1,439,323,776" +
                "<br>GDP: $11,539,087,366,010";
            } else if(currentYear >= 1980){
                text.innerHTML = 
                "NAME: United States" + 
                "<br>POPULATION: 1,439,323,776" +
                "<br>GDP: $8,409,774,841,642";
            } else if(currentYear >= 1970){
                text.innerHTML = 
                "NAME: United States" + 
                "<br>POPULATION: 1,439,323,776" +
                "<br>GDP: $6,123,128,816,104";
            } else if(currentYear >= 1960){
                text.innerHTML = 
                "NAME: United States" + 
                "<br>POPULATION: 1,439,323,776" +
                "<br>GDP: $4,059,503,209,561";
            } else if(currentYear >= 1950){
                text.innerHTML = 
                "NAME: United States" + 
                "<br>POPULATION: 1,439,323,776" +
                "<br>GDP: $3,216,436,613,395";
            } else if(currentYear >= 1940){
                text.innerHTML = 
                "NAME: United States" + 
                "<br>POPULATION: 1,439,323,776" +
                "<br>GDP: $1,985,303,951,116";
            } else if(currentYear >= 1930){
                text.innerHTML = 
                "NAME: United States" + 
                "<br>POPULATION: 1,439,323,776" +
                "<br>GDP: $1,654,455,614,975";
            } else if(currentYear >= 1920){
                text.innerHTML = 
                "NAME: United States" + 
                "<br>POPULATION: 1,439,323,776" +
                "<br>GDP: $1,358,129,886,447";
            } else if(currentYear >= 1910){
                text.innerHTML = 
                "NAME: United States" + 
                "<br>POPULATION: 1,439,323,776" +
                "<br>GDP: $1,113,758,691,964";
            } else if(currentYear >= 1900){
                text.innerHTML = 
                "NAME: United States" + 
                "<br>POPULATION: 1,439,323,776" +
                "<br>GDP: $764,540,107,351";
            } else if(currentYear >= 1890){
                text.innerHTML = 
                "NAME: United States" + 
                "<br>POPULATION: 1,439,323,776" +
                "<br>GDP: $522,936,204,264";
            } else if(currentYear >= 1880){
                text.innerHTML = 
                "NAME: United States" + 
                "<br>POPULATION: 1,439,323,776" +
                "<br>GDP: $391,253,195,294";
            } else if(currentYear >= 1870){
                text.innerHTML = 
                "NAME: United States" + 
                "<br>POPULATION: 1,439,323,776" +
                "<br>GDP: $239,558,991,468";
            } else if(currentYear >= 1850){
                text.innerHTML = 
                "NAME: United States" + 
                "<br>POPULATION: 1,439,323,776" +
                "<br>GDP: $98,890,664,634";
            } else if(currentYear >= 1830){
                text.innerHTML = 
                "NAME: United States" + 
                "<br>POPULATION: 1,439,323,776" +
                "<br>GDP: $46,561,361,604";
            } else if(currentYear >= 1820){
                text.innerHTML = 
                "NAME: United States" + 
                "<br>POPULATION: 1,439,323,776" +
                "<br>GDP: $30,251,570,664";
            } else if(currentYear >= 1800){
                text.innerHTML = 
                "NAME: United States" + 
                "<br>POPULATION: 1,439,323,776" +
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
                "<br>POPULATION: 1,439,323,776" +
                "<br>GDP: $11,619,550,000,000";
            } else if(currentYear >= 2020){
                text.innerHTML =
                "NAME: India" + 
                "<br>POPULATION: 1,439,323,776" +
                "<br>GDP: $9,907,028,000,000";
            } else if(currentYear >= 2010){
                text.innerHTML =
                "NAME: India" + 
                "<br>POPULATION: 1,439,323,776" +
                "<br>GDP: $6,587,478,152,426";
            } else if(currentYear >= 2000){
                text.innerHTML =
                "NAME: India" + 
                "<br>POPULATION: 1,439,323,776" +
                "<br>GDP: $3,437,165,798,451";
            } else if(currentYear >= 1990){
                text.innerHTML =
                "NAME: India" + 
                "<br>POPULATION: 1,439,323,776" +
                "<br>GDP: $2,170,278,833,441";
            } else if(currentYear >= 1980){
                text.innerHTML =
                "NAME: India" + 
                "<br>POPULATION: 1,439,323,776" +
                "<br>GDP: $1,258,178,013,973";
            } else if(currentYear >= 1970){
                text.innerHTML =
                "NAME: India" + 
                "<br>POPULATION: 1,439,323,776" +
                "<br>GDP: $928,035,266,198";
            } else if(currentYear >= 1960){
                text.innerHTML =
                "NAME: India" + 
                "<br>POPULATION: 1,439,323,776" +
                "<br>GDP: $645,508,700,752";
            } else if(currentYear >= 1950){
                text.innerHTML =
                "NAME: India" + 
                "<br>POPULATION: 1,439,323,776" +
                "<br>GDP: $439,180,173,701";
            } else if(currentYear >= 1800 && currentYear <= 1820){
                text.innerHTML =
                "NAME: Maratha Empire" + 
                "<br>POPULATION: 1,439,323,776" +
                "<br>GDP: $145,004,046,446";
            } else if(currentYear >= 1750 && currentYear <= 1799){
                text.innerHTML =
                "NAME: Maratha Empire" + 
                "<br>POPULATION: 1,439,323,776" +
                "<br>GDP: $86,671,296,758";
            } else if(currentYear >= 1650 && currentYear <= 1699){
                text.innerHTML =
                "NAME: Bijapur Sultanate" + 
                "<br>POPULATION: 1,439,323,776" +
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
                "<br>POPULATION: 1,439,323,776" +
                "<br>GDP: $5,856,478,000,000";
            } else if(currentYear >= 2020){
                text.innerHTML =
                "NAME: Japan" + 
                "<br>POPULATION: 1,439,323,776" +
                "<br>GDP: $5,312,296,000,000";
            } else if(currentYear >= 2010){
                text.innerHTML =
                "NAME: Japan" + 
                "<br>POPULATION: 1,439,323,776" +
                "<br>GDP: $5,534,069,317,027";
            } else if(currentYear >= 2000){
                text.innerHTML =
                "NAME: Japan" + 
                "<br>POPULATION: 1,439,323,776" +
                "<br>GDP: $5,225,015,968,149";
            } else if(currentYear >= 1990){
                text.innerHTML =
                "NAME: Japan" + 
                "<br>POPULATION: 1,439,323,776" +
                "<br>GDP: $4,585,751,337,016";
            } else if(currentYear >= 1980){
                text.innerHTML =
                "NAME: Japan" + 
                "<br>POPULATION: 1,439,323,776" +
                "<br>GDP: $3,098,809,916,756";
            } else if(currentYear >= 1970){
                text.innerHTML =
                "NAME: Japan" + 
                "<br>POPULATION: 1,439,323,776" +
                "<br>GDP: $2,002,561,815,867";
            } else if(currentYear >= 1960){
                text.innerHTML =
                "NAME: Japan" + 
                "<br>POPULATION: 1,439,323,776" +
                "<br>GDP: $741,021,886,483";
            } else if(currentYear >= 1940 && currentYear <= 1950){
                text.innerHTML =
                "NAME: Empire of Japan" + 
                "<br>POPULATION: 1,439,323,776" +
                "<br>GDP: $670,631,171,923";
            } else if(currentYear >= 1930){
                text.innerHTML =
                "NAME: Empire of Japan" + 
                "<br>POPULATION: 1,439,323,776" +
                "<br>GDP: $319,914,078,158";
            } else if(currentYear >= 1920){
                text.innerHTML =
                "NAME: Empire of Japan" + 
                "<br>POPULATION: 1,439,323,776" +
                "<br>GDP: $244,137,113,796";
            } else if(currentYear >= 1910){
                text.innerHTML =
                "NAME: Empire of Japan" + 
                "<br>POPULATION: 1,439,323,776" +
                "<br>GDP: $181,846,022,074";
            } else if(currentYear >= 1900){
                text.innerHTML =
                "NAME: Empire of Japan" + 
                "<br>POPULATION: 1,439,323,776" +
                "<br>GDP: $129,949,489,652";
            } else if(currentYear >= 1890){
                text.innerHTML =
                "NAME: Empire of Japan" + 
                "<br>POPULATION: 1,439,323,776" +
                "<br>GDP: $92,095,001,496";
            } else if(currentYear >= 1880){
                text.innerHTML =
                "NAME: Empire of Japan" + 
                "<br>POPULATION: 1,439,323,776" +
                "<br>GDP: $76,348,245,029";
            } else if(currentYear >= 1870){
                text.innerHTML =
                "NAME: Empire of Japan" + 
                "<br>POPULATION: 1,439,323,776" +
                "<br>GDP: $67,439,372,776";
            } else if(currentYear >= 1850){
                text.innerHTML =
                "NAME: Tokugawa Japan" + 
                "<br>POPULATION: 1,439,323,776" +
                "<br>GDP: $56,955,483,520";
            } else if(currentYear >= 1830){
                text.innerHTML =
                "NAME: Tokugawa Japan" + 
                "<br>POPULATION: 1,439,323,776" +
                "<br>GDP: $52,919,269,323";
            } else if(currentYear >= 1820){
                text.innerHTML =
                "NAME: Tokugawa Japan" + 
                "<br>POPULATION: 1,439,323,776" +
                "<br>GDP: $50,603,271,363";
            } else if(currentYear >= 1800){
                text.innerHTML =
                "NAME: Tokugawa Japan" + 
                "<br>POPULATION: 1,439,323,776" +
                "<br>GDP: $49,515,028,968";
            } else if(currentYear >= 1750){
                text.innerHTML =
                "NAME: Tokugawa Japan" + 
                "<br>POPULATION: 1,439,323,776" +
                "<br>GDP: $33,861,112,453";
            } else if(currentYear >= 1700){
                text.innerHTML =
                "NAME: Tokugawa Japan" + 
                "<br>POPULATION: 1,439,323,776" +
                "<br>GDP: $35,908,280,663";
            } else if(currentYear >= 1650){
                text.innerHTML =
                "NAME: Tokugawa Japan" + 
                "<br>POPULATION: 1,439,323,776" +
                "<br>GDP: $30,116,575,312";
            } else if(currentYear >= 1600){
                text.innerHTML =
                "NAME: Azuchi-Momoyama Japan" + 
                "<br>POPULATION: 1,439,323,776" +
                "<br>GDP: $24,328,662,697";
            } else if(currentYear >= 1550){
                text.innerHTML =
                "NAME: Ashikaga Japan" + 
                "<br>POPULATION: 1,439,323,776" +
                "<br>GDP: $20,981,790,783";
            } else if(currentYear >= 1550){
                text.innerHTML =
                "NAME: Ashikaga Japan" + 
                "<br>POPULATION: 1,439,323,776" +
                "<br>GDP: $17,783,301,976";
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

// else if(fillColor === COUNTRY) {
//     data.style.display = "flex"; 
//     if(currentYear >= 2022){
//         text.innerHTML =
//         "NAME: India" + 
//         "<br>POPULATION: 1,439,323,776" +
//         "<br>GDP: $24,003,704,000,000";
//     } else {
//         text.innerHTML = 
//         "Not Enough Data"
//     }
// }