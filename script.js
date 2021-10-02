function changeBackground(event) {
    console.log(event.target);
    event.target.style.background = "orange"
}

function backToNormal(event) {
    event.target.style.background = ""
}
