let count_audio = 2; 
let count_copy = 2; 
let audio = document.getElementById("audio");
let info = document.getElementById("info");

function refresh() {
    const svgContainer = document.getElementById('svgContainer');
    const svg = svgContainer.querySelector('svg');
    svg.style.transform = 'scale(1) translate(0, 0)';
}

function play(){
    if(count_audio % 2 == 0){
        audio.play();
    } else {
        audio.pause();
    }
    count_audio++;
}

function copy(){
    const textToCopy = `B. R. Mitchell, European Historical Statistics, 1750-1975  
    “Data Page: Population”, part of the following publication: Hannah Ritchie, Lucas Rodés-Guirao, Edouard Mathieu, Marcel Gerber, Esteban Ortiz-Ospina, Joe Hasell and Max Roser (2023) - “Population Growth”. Data adapted from PBL Netherlands Environmental Assessment Agency, Gapminder, United Nations. Retrieved from https://ourworldindata.org/grapher/population [online resource]  
    “DEMOGRAPHIA: Demographics Development Impacts Market Research & Urban Policy,” n.d. https://www.demographia.com/.  
    Deng, Kent and Shengmin, Sun. "China’s extraordinary population expansion and its determinants during the qing period, 1644-1911" Population Review (2019), 58#1: 20–77. ISSN 0032-471X https://doi.org/10.1353/prv.2019.0001  
    "GDP, PPP (current international $)". data.worldbank.org.  
    Johnston, Wm. Robert. "Historical World Population Data." February 21, 2015. Johnston's Archive [http://www.johnstonsarchive.net/faqusage.html].  
    Lahmeyer, Jan (2006). "Population Statistics: Growth of the population per country in a historical perspective, including their administrative divisions and principal towns". populstat.info.  
    Maddison Project Database, version 2020. Bolt, Jutta and Jan Luiten van Zanden (2020), “Maddison style estimates of the evolution of the world economy. A new 2020 update ”.  
    Michael Palairet, The Balkan Economies c. 1800-1914 (Cambridge, 1997)  
    "Population changes − Demographic balance sheet 2021 | Insee". www.insee.fr.  
    "Population totale par sexe et âge au 1 er janvier 2017, France métropolitaine−Bilan démographique 2016 - Insee". Insee.fr  
    "Reconstructing Global Inequality". clio-infra.eu.  
    Tacitus: Historical Atlas". https://www.tacitus.nu/historical-atlas/population/  
    "U.S. Census Bureau 2020 Census Tables". United States Census Bureau. 2021.  
    "World Economic Outlook Database". IMF.org. International Monetary Fund.`
    
    const textarea = document.createElement('textarea');

    textarea.value = textToCopy;
    document.body.appendChild(textarea);
    textarea.select();
    textarea.setSelectionRange(0, textarea.value.length);

    document.execCommand('copy');
    document.body.removeChild(textarea);

    if(count_copy % 2 == 0){
        info.style.display = "flex";
    } else {
        info.style.display = "none";
    }
    count_copy++;
}

