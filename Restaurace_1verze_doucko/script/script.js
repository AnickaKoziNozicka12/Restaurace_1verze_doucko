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

/*
barvicky
seda 252B48
svetla seda 445069
zelena 5B9A8B
zluta F7E987
https://colorhunt.co/palette/252b484450695b9a8bf7e987
*/