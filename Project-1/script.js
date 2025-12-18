const numCount = document.getElementById("countNum");
const incBtn = document.getElementById("inc");
const decBtn = document.getElementById("dec");
const resBtn = document.getElementById("res");

let num = numCount.textContent;

incBtn.addEventListener("click", () => {
  num++;
  numCount.textContent = num;
});

decBtn.addEventListener("click", () => {
  num--;
  numCount.textContent = num;
});

resBtn.addEventListener("click", () => {
  num = 0;
  numCount.textContent = num;
});
