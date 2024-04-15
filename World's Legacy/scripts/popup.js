document.addEventListener("DOMContentLoaded", function() {
    var russiaPaths = document.querySelectorAll('path[title="Russia"]');
    russiaPaths.forEach(function(path) {
        path.addEventListener("click", function() {
            console.log("Clicked on Russia");
        });
    });
});