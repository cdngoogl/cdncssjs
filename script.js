// Universal Basic Web Design JavaScript

document.addEventListener("DOMContentLoaded", function () {

    // Mobile menu
    const menuButton = document.querySelector(".menu-btn");
    const menu = document.querySelector(".menu");

    if (menuButton && menu) {
        menuButton.addEventListener("click", function () {
            menu.classList.toggle("open");
        });

        menu.querySelectorAll("a").forEach(function (link) {
            link.addEventListener("click", function () {
                menu.classList.remove("open");
            });
        });
    }

    // Offline block & warning handler
    if (!navigator.onLine) {
        document.body.innerHTML = '<div style="display:flex;align-items:center;justify-content:center;height:100vh;font-family:Arial,sans-serif;text-align:center;padding:20px;"><div><h1 style="font-size:24px;margin-bottom:10px;">No Internet Connection</h1><p style="color:#555;">Could not load fonts/external resources. Please check your network.</p></div></div>';
    }

});
