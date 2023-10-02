const hourscont = document.getElementById("hours");
const minutescont = document.getElementById("minutes");
const secondscont = document.getElementById("seconds");

const time = function () {
  const date = new Date();
  const seconds = date.getSeconds();
  const minutes = date.getMinutes();
  const hours = date.getHours();

  secondscont.textContent = seconds;
  minutescont.textContent = minutes;
  hourscont.textContent = hours;
};

setInterval(time, 1000);
