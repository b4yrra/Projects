const sections = document.querySelectorAll(".section");
const question = document.querySelector(".question");

sections.forEach((sec) => {
  const btn = sec.querySelector(".buttons");
  const abt = sec.querySelector(".about");
  const titleSec = sec.querySelector(".title");

  btn.addEventListener("click", () => {
    if (abt.classList.contains("show")) {
      abt.classList.toggle("show", false);
      titleSec.style.borderBottom = "none";
      btn.textContent = "+";
    } else {
      abt.classList.toggle("show", true);
      titleSec.style.borderBottom = "1px solid grey";
      btn.textContent = "-";
    }
  });
});
