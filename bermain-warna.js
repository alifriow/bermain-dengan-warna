const tombolUbahWarna = document.getElementById("tombolUbahWarna");
tombolUbahWarna.addEventListener("click", function () {
    // document.body.style.backgroundColor = "lightblue";
    document.body.classList.toggle("biru-muda");
});

const tombol = document.createElement("button");
const button = document.createTextNode("Ini Tombol");
tombol.appendChild(button);
tombol.setAttribute("type", "button");

// document.body.appendChild(tombol);
tombolUbahWarna.after(tombol);

tombol.addEventListener("click", function () {
    const r = Math.round(Math.random() * 255 + 1);
    const g = Math.round(Math.random() * 255 + 1);
    const b = Math.round(Math.random() * 255 + 1);
    document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
});

const sliderMerah = document.querySelector("input[name=sliderMerah]");
const sliderHijau = document.querySelector("input[name=sliderHijau]");
const sliderBiru = document.querySelector("input[name=sliderBiru]");

sliderMerah.addEventListener("input", function () {
    const r = sliderMerah.value;
    document.body.style.backgroundColor = "rgb(" + r + ",100,100)";
});

sliderHijau.addEventListener("input", function () {
    const r = sliderMerah.value;
    const g = sliderHijau.value;
    document.body.style.backgroundColor = "rgb(" + r + "," + g + ",100)";
});

sliderBiru.addEventListener("input", function () {
    const r = sliderMerah.value;
    const g = sliderHijau.value;
    const b = sliderBiru.value;
    document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";

});

document.body.addEventListener("mousemove", function (event) {
    // posisi mouse
    // console.log(event.clientY, event.clientX);
    // ukuran browser
    // console.log(window.innerWidth, window.innerHeight);

    const xPos = Math.round((event.clientX / window.innerWidth) * 255);
    const yPos = Math.round((event.clientY / window.innerWidth) * 255);

    document.body.style.backgroundColor = "rgb(" + xPos + "," + yPos + ",100)";
});