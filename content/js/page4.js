let kitty;
let fox;
let xPos = 0;
let triggered = false;
let ufoSound = new Audio('../content/audio/ufo-flying.mp3');

function preload() {
    kitty = loadImage('../content/img/gnarp-in-ufo-tractorbeam.png'); 
    fox = loadImage('../content/img/fox.png');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    ufoSound.play();
}

function draw() {
    clear();
    
    push();
    translate(xPos + 270 + fox.width / 2, (height / 2 - fox.height / 2) + 100 + fox.height / 2);
    rotate(QUARTER_PI);
    image(fox, -fox.width / 2, -fox.height / 2);
    pop();
    
    image(kitty, xPos, height / 2 - kitty.height / 2); 
    
    xPos += 5;

    if (xPos > width) {
        if (!triggered) {
            window.location.href = "./index.html";
            triggered = true;
        }
    }
}
