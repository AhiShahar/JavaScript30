'use strict';

const secondHand = document.querySelector('.second-hand'),
      minuteHand = document.querySelector('.min-hand'),
      hourHand = document.querySelector('.hour-hand');

function setDate() {
  const now = new Date();

  const seconds = now.getSeconds() * 6 + 90;
  const minutes = now.getMinutes() * 6 + 90;
  const hours = (minutes - 90) * 5 + 90;

  secondHand.style.transform = `rotate(${seconds}deg)`;

  minuteHand.style.transform = `rotate(${minutes}deg)`;

  hourHand.style.transform = `rotate(${hours}deg)`;
}

setInterval(setDate, 1000);
setDate();
