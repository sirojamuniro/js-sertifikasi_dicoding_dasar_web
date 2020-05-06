document.getElementById("myBtn").addEventListener("click", displayDate);

function displayDate() {
    document.getElementById("demo").innerHTML = Date();
}
document.getElementById("myBtn1").addEventListener("click", function() {
    alert("Selamat Datang saya Siroja Muniro");
});

var btn = document.getElementById('myBtn2');

function random(number) {
    return Math.floor(Math.random() * (number + 1));
}

btn.onclick = function() {
    var rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
    document.body.style.backgroundColor = rndCol;
}