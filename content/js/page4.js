let kitty;
let fox;
let xPos = 0;
let triggered = false;

function preload() {
    kitty = loadImage('../content/img/gnarp-in-ufo-tractorbeam.png'); 
    fox = loadImage('../content/img/fox.png');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    clear();
    image(kitty, xPos, height / 2 - kitty.height / 2); 
    image(fox, xPos + 270, (height / 2 - fox.height / 2) + 100);
    xPos += 5;

    if (xPos > width) {
        if (triggered === false) {
            window.location.href = "./index.html";
            triggered = true;
        }
        else{
            return;
        }
    }
}
