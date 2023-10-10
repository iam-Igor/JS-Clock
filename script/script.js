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

const movebars = function () {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  let rotationAngleMInutes = minutes * 6.083 + 262;
  let rotationAngleHours = hours * 30.416 + 91.25;
  let rotationAngleSeconds = seconds * 6.083 + 88.25;

  let hoursbar = document.querySelector(".hoursBar");
  let minutesbar = document.querySelector(".minutesBar");
  let secondsBar = document.querySelector(".secondsBar");
  minutesbar.style.transform = `rotate(${rotationAngleMInutes}deg)`;
  hoursbar.style.transform = `rotate(${rotationAngleHours}deg)`;
  secondsBar.style.transform = `rotate(${rotationAngleSeconds}deg)`;
};

setInterval(movebars, 1000);
