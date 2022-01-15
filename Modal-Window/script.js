"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const closeModal = document.querySelector(".close-modal");
const showModal = document.querySelectorAll(".show-modal");
console.log(showModal);

const shModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const clModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < showModal.length; i++)
  showModal[i].addEventListener("click", shModal);

closeModal.addEventListener("click", clModal);
overlay.addEventListener("click", clModal);
document.addEventListener("keydown", function (event) {
  if (event.key == "Escape" && !modal.classList.contains("hidden")) {
    clModal();
  }
});
