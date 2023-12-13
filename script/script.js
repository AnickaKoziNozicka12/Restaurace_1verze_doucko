const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector("nav");

let state = true;

hamburger.addEventListener("click", () => {

    if (state === true) {
        hamburger.classList.remove("is-active");
        nav.classList.remove("is-active");
        state = false;
    } else {
        hamburger.classList.add("is-active");
        nav.classList.add("is-active");
        state = true;
    }
})