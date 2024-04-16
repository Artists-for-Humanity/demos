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

document.addEventListener("click", function(event) {
    if (event.target.tagName === "path") {
        const fillColor = event.target.getAttribute("fill");
        const mouseX = event.clientX;
        const mouseY = event.clientY;
        
        if (fillColor === "#7f0000" && currentYear === 1940) {
            data.style.display = "flex";
            text.innerHTML = 
            "NAME: China" + 
            "<br>POPULATION: 1,439,323,776" +
            "<br>GDP: $14.3 trillion";
        } else if (fillColor === "#081d58") {
            data.style.display = "flex";
            text.innerHTML = 
            "NAME: America" + 
            "<br>POPULATION: 331,002,651" +
            "<br>GDP: $21.43 trillion";
        } else {
            data.style.display = "none";
        }

        data.style.top = mouseY + "px";
        data.style.left = mouseX + "px";
    }
});
