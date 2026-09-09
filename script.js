// JavaScript dynamically blurs the background image (bg.png) on load
document.addEventListener("DOMContentLoaded", function () {
    const bg = document.getElementById("bgImg");
    if (bg) {
        bg.style.filter = "blur(8px)";
        bg.style.webkitFilter = "blur(8px)";
    }
});
