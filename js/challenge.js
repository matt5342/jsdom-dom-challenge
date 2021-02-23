

    let counter = window.setInterval(count, 1000);

function count() {
    let num = document.getElementById("counter");
    num.innerText = parseInt(num.innerText) + 1
}
