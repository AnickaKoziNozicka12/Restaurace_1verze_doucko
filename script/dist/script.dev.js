"use strict";

var hamburger = document.querySelector(".Hamburger");
var nav = document.querySelector("nav");
var state = false;
hamburger.addEventListener("click", function () {
  if (state == true) {
    hamburger.classList.remove("is-open");
    nav.classList.remove("is-active");
    state = false;
  } else {
    hamburger.classList.add("is-open");
    nav.classList.add("is-active");
    state = true;
  }
});