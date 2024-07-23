function setCountdown() {
    const input = document.getElementById('dateInput').value;
    const countdownDate = new Date(input).getTime();
    localStorage.setItem('countdown', countdownDate);

    updateCountdown();
}

function updateCountdown() {
    const countdownDate = localStorage.getItem('countdown');
    if (!countdownDate) return;

    const now = new Date().getTime();
    const distance = countdownDate - now;

    if (distance < 0) {
        document.getElementById('countdown').innerHTML = "EXPIRED";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('countdown').innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";

    setTimeout(updateCountdown, 1000);
}

document.addEventListener('DOMContentLoaded', (event) => {
    updateCountdown();
});