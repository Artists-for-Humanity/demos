const text = document.getElementById("text");
document.addEventListener("click", function(event) {
    if (event.target.id === "United_States_1946_2016") {
        text.innerHTML = "NAME: America" + 
        "<br>POPULATION: 300,000,000" +
        "<br>GDP: 21 Trillion";
    }
});

document.addEventListener("click", function(event) {
    if (event.target.tagName === "path") {
        const fillColor = event.target.getAttribute("fill");
        text.innerHTML = "Fill Color: " + fillColor;
    }
});

document.addEventListener("click", function(event) {
    if (event.target.tagName === "path") {
        const fillColor = event.target.getAttribute("fill");
        text.innerHTML = "Fill Color: " + fillColor;
    }
});
