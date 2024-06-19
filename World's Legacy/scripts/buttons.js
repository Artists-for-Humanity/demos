let count_audio = 2; 
let count_copy = 2; 
let audio = document.getElementById("audio");
let info = document.getElementById("info");

function refresh(){
    window.location.reload();
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
    const textToCopy = "Maddison Project 2020 database, the World Bank, IMF, INSEE, SGF, WM. Robert Johnston (2015), Deng and Sun (2019), POPULSTAT, US Census Bureau, Demographia, Population Statistics: Historical Demography, tacitus.nu population history, B. R. Mitchell, European Historical Statistics, 1750-1975, Michael Palairet, The Balkan Economies c. 1800-1914 (Cambridge, 1997), Reconstructing Global Inequality database, Our World in Data";
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