const renderPro = document.querySelector(".products");
const all = document.getElementById("allBtn");
const breakBtn = document.getElementById("breakBtn");
const lunch = document.getElementById("lunchBtn");
const shakes = document.getElementById("shakesBtn");
const dinner = document.getElementById("dinnerBtn");

const products = [
  {
    type: "Breakfast",
    img: "./img/delight.jpg",
    name: "Country Delight",
    price: "$20.99",
    about:
      "Enim eius, obcaecati dolores laborum id nostrum error sint iste. Laborum sint consequuntur sit a omnis, ipsum voluptate? Voluptate eum ut numquam?",
  },

  {
    type: "Lunch",
    img: "./img/diner.webp",
    name: "Diner Double",
    price: "$13.99",
    about:
      "Enim eius, obcaecati dolores laborum id nostrum error sint iste. Laborum sint consequuntur sit a omnis, ipsum voluptate? Voluptate eum ut numquam?",
  },

  {
    type: "Shakes",
    img: "./img/milkshake.jpg",
    name: "Milkshake",
    price: "$6.99",
    about:
      "Enim eius, obcaecati dolores laborum id nostrum error sint iste. Laborum sint consequuntur sit a omnis, ipsum voluptate? Voluptate eum ut numquam?",
  },

  {
    type: "Breakfast",
    img: "./img/delight.jpg",
    name: "Country Delight",
    price: "$20.99",
    about:
      "Enim eius, obcaecati dolores laborum id nostrum error sint iste. Laborum sint consequuntur sit a omnis, ipsum voluptate? Voluptate eum ut numquam?",
  },

  {
    type: "Lunch",
    img: "./img/diner.webp",
    name: "Diner Double",
    price: "$13.99",
    about:
      "Enim eius, obcaecati dolores laborum id nostrum error sint iste. Laborum sint consequuntur sit a omnis, ipsum voluptate? Voluptate eum ut numquam?",
  },

  {
    type: "Shakes",
    img: "./img/milkshake.jpg",
    name: "Milkshake",
    price: "$6.99",
    about:
      "Enim eius, obcaecati dolores laborum id nostrum error sint iste. Laborum sint consequuntur sit a omnis, ipsum voluptate? Voluptate eum ut numquam?",
  },

  {
    type: "Breakfast",
    img: "./img/delight.jpg",
    name: "Country Delight",
    price: "$20.99",
    about:
      "Enim eius, obcaecati dolores laborum id nostrum error sint iste. Laborum sint consequuntur sit a omnis, ipsum voluptate? Voluptate eum ut numquam?",
  },

  {
    type: "Lunch",
    img: "./img/diner.webp",
    name: "Diner Double",
    price: "$13.99",
    about:
      "Enim eius, obcaecati dolores laborum id nostrum error sint iste. Laborum sint consequuntur sit a omnis, ipsum voluptate? Voluptate eum ut numquam?",
  },

  {
    type: "Shakes",
    img: "./img/milkshake.jpg",
    name: "Milkshake",
    price: "$6.99",
    about:
      "Enim eius, obcaecati dolores laborum id nostrum error sint iste. Laborum sint consequuntur sit a omnis, ipsum voluptate? Voluptate eum ut numquam?",
  },

  {
    type: "Breakfast",
    img: "./img/delight.jpg",
    name: "Country Delight",
    price: "$20.99",
    about:
      "Enim eius, obcaecati dolores laborum id nostrum error sint iste. Laborum sint consequuntur sit a omnis, ipsum voluptate? Voluptate eum ut numquam?",
  },

  {
    type: "Lunch",
    img: "./img/diner.webp",
    name: "Diner Double",
    price: "$13.99",
    about:
      "Enim eius, obcaecati dolores laborum id nostrum error sint iste. Laborum sint consequuntur sit a omnis, ipsum voluptate? Voluptate eum ut numquam?",
  },

  {
    type: "Shakes",
    img: "./img/milkshake.jpg",
    name: "Milkshake",
    price: "$6.99",
    about:
      "Enim eius, obcaecati dolores laborum id nostrum error sint iste. Laborum sint consequuntur sit a omnis, ipsum voluptate? Voluptate eum ut numquam?",
  },
];

const render = (product) => {
  let element = "";

  product.forEach((products) => {
    const product = printProduct(products);

    element += product;
  });

  renderPro.innerHTML = element;
};

const printProduct = (products) => {
  return `<div class="prod-flex">
      <img
        class="image"
        src="${products.img}"
        alt=""
      />
      <div class="prod-texts">
        <div class="prod-title">
          <div class="title">${products.name}</div>
          <div class="price">${products.price}</div>
        </div>
        <p class="prod-abt">${products.about}</p>
      </div>
    </div>`;
};

all.addEventListener("click", () => {
  render(products);
});

breakBtn.addEventListener("click", () => {
  const breakfastItems = products.filter((product) => {
    return product.type === "Breakfast";
  });
  render(breakfastItems);
});

lunch.addEventListener("click", () => {
  const lunchItems = products.filter((product) => {
    return product.type === "Lunch";
  });
  render(lunchItems);
});

shakes.addEventListener("click", () => {
  const shakeItems = products.filter((product) => {
    return product.type === "Shakes";
  });
  render(shakeItems);
});

render(products);
