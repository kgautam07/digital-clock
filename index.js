const hr = document.getElementById("hour");
const min = document.getElementById("minutes");
const sec = document.getElementById("seconds");
const msec = document.getElementById("milliseconds");
const ampmE1 = document.getElementById("ampm");

function updateClock() {
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let ms = new Date().getMilliseconds();
  let ampm = "AM";

  if (h > 12) {
    h = h - 12;
    ampm = "PM";
  }
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;
  sm = ms < 10 ? "0" + ms : ms;

  hr.innerText = h;
  min.innerText = m;
  sec.innerText = s;
  msec.innerText = ms;
  ampm, (innerText = ampm);
  setTimeout(() => {
    updateClock();
  }, 1);
}

updateClock();
