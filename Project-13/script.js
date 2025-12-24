const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById("prev-btn");
const slides = document.querySelectorAll(".slide");

slides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});

let counter = 0;

prevBtn.addEventListener("click", () => {
  counter--;
  slider();
});

nextBtn.addEventListener("click", () => {
  counter++;
  slider();
});

console.log(counter);

const slider = () => {
  if (counter === slides.length) {
    counter = 0;
  }

  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
};
