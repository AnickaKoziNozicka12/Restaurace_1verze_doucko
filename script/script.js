const hamburger = document.querySelector(".Hamburger");
const nav = document.querySelector("nav");

let state = false;

hamburger.addEventListener("click", () => {

    if (state == true) {
        hamburger.classList.remove("is-open");
        nav.classList.remove("is-active");
        state = false;
    } else {
        hamburger.classList.add("is-open");
        nav.classList.add("is-active");
        state = true;
    }
})
