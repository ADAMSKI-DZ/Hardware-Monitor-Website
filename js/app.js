const menuPc = document.querySelector(".menu-pc");
const menuPhone = document.querySelector(".menu-phone");
const menuBtn = document.querySelector(".menu");

menuBtn.addEventListener("click", () => {
  menuPc.classList.toggle("show");
  menuPhone.classList.toggle("show");
  menuBtn.classList.toggle("animate");
});
