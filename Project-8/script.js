const navbar = document.querySelector(".navbar");
const selections = document.querySelectorAll(".custom");
const navSection = document.getElementById("navSection");

window.addEventListener("scroll", () => {
  const bgPosition = navSection.getBoundingClientRect().bottom;

  if (bgPosition <= navbar.offsetHeight) {
    navbar.classList.add("active");
    selections.forEach((s) => {
      s.classList.add("color");
    });
  } else {
    navbar.classList.remove("active");
    selections.forEach((s) => {
      s.classList.remove("color");
    });
  }
});
