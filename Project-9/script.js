const buttons = document.querySelectorAll(".cus-btn");
const historyBtn = document.getElementById("hisBtn");
const visionBtn = document.getElementById("visBtn");
const goalBtn = document.getElementById("goBtn");
const titles = document.querySelector(".titles");
const texts = document.querySelector(".texts");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    buttons.forEach((b) => b.classList.remove("selected"));
    btn.classList.add("selected");
  });
});

historyBtn.addEventListener("click", () => {
  titles.textContent = "History";
  texts.textContent =
    "races the evolution of forests from early plant life to complex ecosystems, showing their deep connection with human civilization through providing resources (wood, food), shaping landscapes (agriculture, urbanization), and influencing culture, with early forests emerging";
});

visionBtn.addEventListener("click", () => {
  titles.textContent = "Vision";
  texts.textContent =
    "refers to the goals for managing, conserving, and using forests, focusing on sustainability, climate action (carbon capture), biodiversity, and economic benefits like wood products, often involving holistic, nature-positive approaches that integrate technology (AI, satellite imaging) and partnerships for a healthier planet and future generations.";
});

goalBtn.addEventListener("click", () => {
  titles.textContent = "Goals";
  texts.textContent =
    "refers to the UN's Global Forest Goals (GFGs) within the 2030 Agenda for Sustainable Development, aiming to reverse deforestation, increase forest area, maintain carbon stocks, and support livelihoods.";
});
