const colValue = document.getElementById("colorValue");
const changeBtn = document.getElementById("changeBtn");
const color = document.getElementById("bodyColor");

const getRandomHexColor = () => {
  const randomNum = Math.floor(Math.random() * 16777215);

  let hexColor = randomNum.toString(16);

  while (hexColor.length < 6) {
    hexColor = "0" + hexColor;
  }

  return "#" + hexColor;
};

changeBtn.addEventListener("click", () => {
  colValue.innerHTML = getRandomHexColor();
  color.style.backgroundColor = getRandomHexColor();
});
