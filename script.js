// Dynamically adds the blur to your local background image
document.addEventListener("DOMContentLoaded", function () {
    const bg = document.getElementById("bgImg");
    if (bg) {
        bg.style.filter = "blur(8px)";
    }
});
