"user strict";

//Hero section AutoTyping
var typed = new Typed(".autotype", {
  strings: ["Larry Daniels ", "Designer ", "Developer "],
  typeSpeed: 50,
  backSpeed: 50,
  loop: true,
});

// Scrolled Navbar
const nav = document.querySelector("nav");
const navLink = document.getElementsByClassName("nav-link");

addEventListener("scroll", () => {
  const currentSection = pageYOffset;

  if (currentSection > 100) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});
