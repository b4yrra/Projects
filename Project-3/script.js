const menuBtn = document.getElementById("menuBtn");
// const none = document.querySelector(".hidden");
const menu = document.getElementById("hiddenMenu");

menuBtn.addEventListener("click", () => {
  if (menu.classList.contains("hidden")) {
    menu.classList.remove("hidden");
  } else {
    menu.classList.add("hidden");
  }
});
