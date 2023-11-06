"use strict";

// step 1: Get all elements
const menuBtn = document.querySelector('[data-menu="button"]');
const menuNav = document.querySelector('[data-menu="nav"]');
const hamburgerImg = document.querySelector('[data-menu="ham"]');
const closeImg = document.querySelector('[data-menu="close"]');

// step 2: Add event listeners
menuBtn.addEventListener("click", toggleMenu);

// step 3: Create functions
function toggleMenu() {
  menuNav.classList.toggle("hidden");

  if (!menuNav.classList.contains("hidden")) {
    closeImg.classList.remove("hidden");
    hamburgerImg.classList.add("hidden");
  } else {
    hamburgerImg.classList.remove("hidden");
    closeImg.classList.add("hidden");
  }
}
