const joy_bar = document.getElementById("joy");
const hunger_bar = document.getElementById("hunger");
const hygiene_bar = document.getElementById("hygiene");

document.addEventListener("DOMContentLoaded", function() {
    let joy_cur = 100;
    setInterval(() => {
        joy_bar.style.width = joy_cur + "%";
        joy_cur -= 0.5;
        if (joy_cur < 0) {
            joy_cur = 0; 
        }
    }, 100);
});
