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

    // Offline network detector
    if (!navigator.onLine) {
        const warning = document.createElement('div');
        warning.style.cssText = 'position:fixed;bottom:10px;right:10px;background:#222;color:#fff;padding:10px 15px;border-radius:5px;font-size:13px;z-index:9999;box-shadow:0 2px 5px rgba(0,0,0,0.3);';
        warning.textContent = 'No internet. Could not load fonts/external resources.';
        document.body.appendChild(warning);
    }

});
