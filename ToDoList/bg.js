const body = document.querySelector("body");


const IMG_NUMBER = 6;


function handleImgLoad() {
    console.log("finished loading");
}



function paingImage(imgNumber) {
    const image = new Image;
    image.src = `/img/${imgNumber}.jpg`;
    body.prepend(image);
    image.classList.add("bgImage");
    image.addEventListener("loadend", handleImgLoad);
}


function genRandom() {
    const number = Math.floor(Math.random() * 6 + 1);
    return number;
}

function init() {
    const randomNumber = genRandom();
    paingImage(randomNumber);
}

init();