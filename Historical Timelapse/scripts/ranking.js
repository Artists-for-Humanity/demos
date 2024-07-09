let population_rank = document.getElementById("population_rank");
let gdp_rank = document.getElementById("gdp_rank");
let trackYear = 2020;

function updateTrackYear() {
    trackYear = parseInt($('.range input').val());
    updateRanks();
    data.style.display = "none";
}

function updateRanks() {
    if (trackYear >= 2020) {
        population_rank.innerHTML = 
            "1. China" + "<br>" + 
            "2. India" + "<br>" + 
            "3. United States";
        gdp_rank.innerHTML = 
            "1. China" + "<br>" + 
            "2. United States" + "<br>" + 
            "3. India";
    } else if (trackYear >= 2010) {
        population_rank.innerHTML = 
            "1. China" + "<br>" +            
            "2. India" + "<br>" + 
            "3. United States";
        gdp_rank.innerHTML = 
            "1. United States" + "<br>" + 
            "2. China" + "<br>" + 
            "3. India";
    } else if (trackYear >= 2000) {
        population_rank.innerHTML = 
            "1. China" + "<br>" +            
            "2. India" + "<br>" + 
            "3. United States";
        gdp_rank.innerHTML = 
            "1. United States" + "<br>" + 
            "2. China" + "<br>" + 
            "3. Japan";
    } else if (trackYear >= 1990) {
        population_rank.innerHTML = 
            "1. China" + "<br>" +            
            "2. India" + "<br>" + 
            "3. Soviet Russia";
        gdp_rank.innerHTML = 
            "1. United States" + "<br>" + 
            "2. Japan" + "<br>" + 
            "3. China";
    } else if (trackYear >= 1980) {
        population_rank.innerHTML = 
            "1. China" + "<br>" +            
            "2. India" + "<br>" + 
            "3. Soviet Russia";
        gdp_rank.innerHTML = 
            "1. United States" + "<br>" + 
            "2. Soviet Russia" + "<br>" + 
            "3. Japan";
    } else if (trackYear >= 1970) {
        population_rank.innerHTML = 
            "1. China" + "<br>" +            
            "2. India" + "<br>" + 
            "3. Soviet Russia";
        gdp_rank.innerHTML = 
            "1. United States" + "<br>" + 
            "2. Soviet Russia" + "<br>" + 
            "3. Japan";
    } else if (trackYear >= 1960) {
        population_rank.innerHTML = 
            "1. China" + "<br>" +            
            "2. India" + "<br>" + 
            "3. Soviet Russia";
        gdp_rank.innerHTML = 
            "1. United States" + "<br>" + 
            "2. Soviet Russia" + "<br>" + 
            "3. British Empire";
    } else if (trackYear >= 1950) {
        population_rank.innerHTML = 
            "1. China" + "<br>" +            
            "2. India" + "<br>" + 
            "3. United States";
        gdp_rank.innerHTML = 
            "1. United States" + "<br>" + 
            "2. Soviet Russia" + "<br>" + 
            "3. British Empire";
    } else if (trackYear >= 1940) {
        population_rank.innerHTML = 
            "1. British Empire" + "<br>" +            
            "2. Empire of Japan" + "<br>" + 
            "3. Nationalist China";
        gdp_rank.innerHTML = 
            "1. United States" + "<br>" + 
            "2. British Empire" + "<br>" + 
            "3. Nazi Germany";
    } else if (trackYear >= 1930) {
        population_rank.innerHTML = 
            "1. British Empire" + "<br>" +            
            "2. Nationalist China" + "<br>" + 
            "3. Soviet Russia";
        gdp_rank.innerHTML = 
            "1. United States" + "<br>" + 
            "2. British Empire" + "<br>" + 
            "3. Nationalist China";
    } else if (trackYear >= 1920) {
        population_rank.innerHTML = 
            "1. British Empire" + "<br>" +            
            "2. Beiyang China" + "<br>" + 
            "3. Soviet Russia";
        gdp_rank.innerHTML = 
            "1. United States" + "<br>" + 
            "2. British Empire" + "<br>" + 
            "3. French Colonial Empire";
    } else if (trackYear >= 1910) {
        population_rank.innerHTML = 
            "1. British Empire" + "<br>" +            
            "2. Qing China" + "<br>" + 
            "3. Russian Empire";
        gdp_rank.innerHTML = 
            "1. United States" + "<br>" + 
            "2. British Empire" + "<br>" + 
            "3. Qing China";
    } else if (trackYear >= 1900) {
        population_rank.innerHTML = 
            "1. British Empire" + "<br>" +            
            "2. Qing China" + "<br>" + 
            "3. Russian Empire";
        gdp_rank.innerHTML = 
            "1. British Empire" + "<br>" + 
            "2. United States" + "<br>" + 
            "3. Qing China";
    } else if (trackYear >= 1890) {
        population_rank.innerHTML = 
            "1. Qing China" + "<br>" +            
            "2. British Empire" + "<br>" + 
            "3. Russian Empire";
        gdp_rank.innerHTML = 
            "1. British Empire" + "<br>" + 
            "2. United States" + "<br>" + 
            "3. Qing China";
    } else if (trackYear >= 1870) {
        population_rank.innerHTML = 
            "1. Qing China" + "<br>" +            
            "2. British Empire" + "<br>" + 
            "3. Russian Empire";
        gdp_rank.innerHTML = 
            "1. British Empire" + "<br>" + 
            "2. Qing China" + "<br>" + 
            "3. United States";
    } else if (trackYear >= 1850) {
        population_rank.innerHTML = 
            "1. Qing China" + "<br>" +            
            "2. British Empire" + "<br>" + 
            "3. Russian Empire";
        gdp_rank.innerHTML = 
            "1. British Empire" + "<br>" + 
            "2. Qing China" + "<br>" + 
            "3. French Colonial Empire";
    } else if (trackYear >= 1820) {
        population_rank.innerHTML = 
            "1. Qing China" + "<br>" +            
            "2. British Empire" + "<br>" + 
            "3. Russian Empire";
        gdp_rank.innerHTML = 
            "1. Qing China" + "<br>" + 
            "2. British Empire" + "<br>" + 
            "3. Kingdom of France";
    } else if (trackYear >= 1800) {
        population_rank.innerHTML = 
            "1. Qing China" + "<br>" +            
            "2. Maratha Empire" + "<br>" + 
            "3. British Empire";
        gdp_rank.innerHTML = 
            "1. Qing China" + "<br>" + 
            "2. British Empire" + "<br>" + 
            "3. Maratha Empire";
    } else if (trackYear >= 1750) {
        population_rank.innerHTML = 
            "1. Qing China" + "<br>" +            
            "2. Maratha Empire" + "<br>" + 
            "3. Mughal Empire";
        gdp_rank.innerHTML = 
            "1. Qing China" + "<br>" + 
            "2. Maratha Empire" + "<br>" + 
            "3. Kingdom of France";
    } else if (trackYear >= 1700) {
        population_rank.innerHTML = 
            "1. Mughal Empire" + "<br>" +            
            "2. Qing China" + "<br>" + 
            "3. Ottoman Empire";
        gdp_rank.innerHTML = 
            "1. Qing China" + "<br>" + 
            "2. Mughal Empire" + "<br>" + 
            "3. Spanish Empire";
    } else if (trackYear >= 1650) {
        population_rank.innerHTML = 
            "1. Mughal Empire" + "<br>" +            
            "2. Ming China" + "<br>" + 
            "3. Ottoman Empire";
        gdp_rank.innerHTML = 
            "1. Mughal Empire" + "<br>" + 
            "2. Qing China" + "<br>" + 
            "3. Ming China";
    } else if (trackYear >= 1600) {
        population_rank.innerHTML = 
            "1. Ming China" + "<br>" +            
            "2. Mughal Empire" + "<br>" + 
            "3. Spanish Empire";
        gdp_rank.innerHTML = 
            "1. Ming China" + "<br>" + 
            "2. Mughal Empire" + "<br>" + 
            "3. Spanish Empire";
    } else if (trackYear >= 1550) {
        population_rank.innerHTML = 
            "1. Ming China" + "<br>" +            
            "2. Sur Empire" + "<br>" + 
            "3. Ottoman Empire";
        gdp_rank.innerHTML = 
            "1. Ming China" + "<br>" + 
            "2. Sur Empire" + "<br>" + 
            "3. Spanish Empire";
    } else if (trackYear >= 1500) {
        population_rank.innerHTML = 
            "1. Ming China" + "<br>" +            
            "2. Delhi Sultanate" + "<br>" + 
            "3. Mali Empire";
        gdp_rank.innerHTML = 
            "1. Ming China" + "<br>" + 
            "2. Delhi Sultanate" + "<br>" + 
            "3. Kingdom of France";
    } else {
        population_rank.innerHTML = "NULL";
        gdp_rank.innerHTML = "NULL";
    }
}

$(function(){
    updateTrackYear();
    $('.range input').on('input', updateTrackYear); // Changed 'mousemove' to 'input'
});

document.addEventListener("DOMContentLoaded", function(){
    updateRanks();
});