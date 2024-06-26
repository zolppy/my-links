"use strict";
var toggleThemeButton = document.querySelector("#toggle-theme");
toggleThemeButton.addEventListener("click", function () {
    var icon = document.querySelector("#theme-icon");
    var body = document.querySelector("body");
    if (icon.classList.contains("bi-sun")) {
        icon.classList.replace("bi-sun", "bi-moon");
    }
    else {
        icon.classList.replace("bi-moon", "bi-sun");
    }
    if (body.classList.contains("dark")) {
        body.classList.replace("dark", "light");
    }
    else {
        body.classList.replace("light", "dark");
    }
});
//# sourceMappingURL=script.js.map