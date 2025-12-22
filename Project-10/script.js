const months = document.getElementById("month");
const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

const targetDate = new Date(2026, 4, 2, 11, 30, 0);

let duration = 0;

setInterval(() => {
  duration += 1000;

  const second = new Date(targetDate - duration).getSeconds();
  const minute = new Date(targetDate - duration).getMinutes();
  const hour = new Date(targetDate - duration).getHours();
  const day = new Date(targetDate - duration).getDay();
  const month = new Date(targetDate - duration).getMonth();

  seconds.textContent = second;
  minutes.textContent = minute;
  hours.textContent = hour;
  days.textContent = day;
  months.textContent = month;
}, 1000);
