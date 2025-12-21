//
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const randomBtn = document.getElementById("surpBtn");
const container = document.getElementById("containerRv");

const reviews = [
  {
    id: 1,
    name: "Mercury",
    job: "The Speedy One",
    img: "./img/Mercury.jpg",
    text: "Tiny, crater-covered, and super hot by day (cold by night). Fastest orbit around the Sun.",
  },

  {
    id: 2,
    name: "Venus",
    job: "The Smothering Beauty",
    img: "./img/Venus.jpg",
    text: "Gorgeous cloudy cover, but surface hotter than an oven and crushing pressure.",
  },

  {
    id: 3,
    name: "Earth",
    job: "The OG Blue Planet",
    img: "./img/Earth.jpg",
    text: "Perfect temperatures (mostly), water everywhere, life galore.",
  },
];

let currentItem = 0;

nextBtn.addEventListener("click", function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  createProfileElement();
});

prevBtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  createProfileElement();
});

randomBtn.addEventListener("click", function () {
  currentItem = Math.floor(Math.random() * reviews.length);
  createProfileElement();
});

const createProfileElement = () => {
  const profile = reviews[currentItem];

  const profileHTML = `
    <div class="img-container">
      <img src="${profile.img}" id="person-img" alt="" />
    </div>
    <h4 id="author">${profile.name}</h4>
    <p id="job">${profile.job}</p>
    <p id="info">${profile.text}</p>
    `;git add
  container.innerHTML = profileHTML;
};

createProfileElement();
