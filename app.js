
const items = document.querySelectorAll('.styling h1');


let futureDate = new Date(2021, 6, 15, 12, 30, 0);
const futureTime = futureDate.getTime();

function computeTime() {
    const currentTime = new Date()
    const time = futureTime - currentTime;
    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;
    const days = Math.floor(time / oneDay);
    const hours = Math.floor((time % oneDay) / oneHour);
    const minutes = Math.floor((time % oneHour) / oneMinute);
    const seconds = Math.floor((time % oneMinute) / 1000);
    const values = [days, hours, minutes, seconds]

    function timeFormat(item) {
        if (item < 10) {
            return item = `0${item}`
        }
        return item;
    }

    items.forEach(function (item, index) {
        item.innerHTML = timeFormat(values[index]);
    });
}
let countdown = setInterval(computeTime, 1000);
computeTime();