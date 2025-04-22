const hour = document.querySelector('.hour-hand');
const minute = document.querySelector('.minute-hand');
const second = document.querySelector('.second-hand');

function setClock() {
    const date = new Date();

    const seconds = date.getSeconds();
    const minutes = date.getMinutes();
    const hours = date.getHours();

    const secondDeg = (seconds / 60) * 360;
    const minuteDeg = (minutes / 60) * 360;
    const hourDeg = (hours / 12) * 360;

    second.style.transform = `rotate(${secondDeg}deg)`;
    minute.style.transform = `rotate(${minuteDeg}deg)`;
    hour.style.transform = `rotate(${hourDeg}deg)`;
}

setInterval(setClock, 1000);
