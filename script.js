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

    // Simple form handling
    const form = document.querySelector(".form");

    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();
            alert("Thank you! Your message has been submitted.");
            form.reset();
        });
    }

});
