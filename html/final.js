const targetDate = new Date("2026-06-30");

const dayEl = document.getElementById("days-count");
const hrsEl = document.getElementById("hours-count");
const minsEl = document.getElementById("mins-count");
const secsEl = document.getElementById("secs-count");

const todayEl = document.getElementById("todays-date");

todayEl.textContent = new Date().toLocaleDateString("en-CA");

function updateCounter() {
  const now = new Date();
  let diffTime = targetDate - now;

  diffTime = Math.floor(diffTime / 1000);

  dayEl.textContent = Math.floor(diffTime / 86400);
  hrsEl.textContent = Math.floor((diffTime % 86400) / 3600);
  minsEl.textContent = Math.floor((diffTime % 3600) / 60);
  secsEl.textContent = diffTime % 60;
}

updateCounter();
setInterval(updateCounter, 1000);
