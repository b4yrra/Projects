const numCount = document.getElementById("countNum");
const incBtn = document.getElementById("inc");
const decBtn = document.getElementById("dec");
const resBtn = document.getElementById("res");

let num = numCount.textContent;

incBtn.addEventListener("click", () => {
  num++;

  if (num > 0) {
    countNum.style.color = "green";
  } else if (num === 0) {
    countNum.style.color = "black";
  }

  numCount.textContent = num;
});

decBtn.addEventListener("click", () => {
  num--;

  if (num < 0) {
    countNum.style.color = "red";
  } else if (num === 0) {
    countNum.style.color = "black";
  }

  numCount.textContent = num;
});

resBtn.addEventListener("click", () => {
  num = 0;

  if (num === 0) {
    countNum.style.color = "black";
  }

  numCount.textContent = num;
});
