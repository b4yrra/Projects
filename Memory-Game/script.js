const buttons = document.querySelectorAll(".buttons");

const foodArr = [
  {
    id: 1,
    img: "./img/cheeseburger.png",
  },

  {
    id: 2,
    img: "./img/cheeseburger.png",
  },

  {
    id: 3,
    img: "./img/fries.png",
  },

  {
    id: 4,
    img: "./img/fries.png",
  },

  {
    id: 5,
    img: "./img/hotdog.png",
  },

  {
    id: 6,
    img: "./img/hotdog.png",
  },

  {
    id: 7,
    img: "./img/pizza.png",
  },

  {
    id: 8,
    img: "./img/pizza.png",
  },
];

const flipCard = (button) => {
  if (foodArr.length === 0) {
    return;
  }

  const randomIndex = Math.floor(Math.random() * foodArr.length);
  const randomFood = foodArr[randomIndex];

  button.innerHTML = `<img class="img" src="${randomFood.img}" alt="food">`;

  foodArr.splice(randomIndex, 1);
  console.log(randomFood.id);
};

buttons.forEach((button) => {
  button.addEventListener("click", () => flipCard(button), { once: true });
});
