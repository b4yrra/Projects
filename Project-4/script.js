const showBtn = document.getElementById("showBtn");
const show = document.querySelector(".show");
const body = document.getElementById("body");
const modalShow = document.getElementById("modalShow");
const closeBtn = document.getElementById("closeBtn");
const overlay = document.getElementById("overlay");
const shown = document.querySelector(".shown");

showBtn.addEventListener("click", () => {
  modalShow.classList.add("show");
  overlay.classList.add("shown");
});

closeBtn.addEventListener("click", () => {
  modalShow.classList.remove("show");
  overlay.classList.remove("shown");
});
