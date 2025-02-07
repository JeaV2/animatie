let img;
let xPos = 0;
let triggered = false;
let ufoSound = new Audio('../content/audio/ufo-landing.mp3');

function preload() {
    img = loadImage('../content/img/gnarp-in-ufo.png'); 
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    ufoSound.play();
}

function draw() {
    clear(); // Make the background transparent

    image(img, xPos, height / 2 - img.height / 2); 
    
    // Move the image to the right
    xPos += 5; // Adjust the speed by changing this value
    
    // Reset position when the image moves off-screen
    if (xPos > width) {
        if (triggered === false) {
            window.location.href = "./page2.html";
            triggered = true;
        }
        else{
            return;
        }
    }
}
