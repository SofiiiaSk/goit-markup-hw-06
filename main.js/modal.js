const modal = document.querySelector("#modal");
const openButton = document.querySelector(".one-button");
const closeButton = document.querySelector(".modal-close");
const mobileMenu = document.querySelector(".mobile-menu");
const burgerButton = document.querySelector(".burger-button");
const mobileCloseButton = document.querySelector(".mobile-menu-close");

function openModal() {
  modal.classList.add("is-open");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  modal.classList.remove("is-open");
  document.body.style.overflow = "";
}

openButton.addEventListener("click", openModal);
closeButton.addEventListener("click", closeModal);

modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    closeModal();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && modal.classList.contains("is-open")) {
    closeModal();
  }
});

function setMobileMenu(open) {
  mobileMenu.classList.toggle("is-open", open);
  burgerButton.setAttribute("aria-expanded", String(open));
  document.body.style.overflow = open ? "hidden" : "";
}

burgerButton.addEventListener("click", () => setMobileMenu(true));
mobileCloseButton.addEventListener("click", () => setMobileMenu(false));
