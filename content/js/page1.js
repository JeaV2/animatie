let img;
let xPos = 0;

function preload() {
    img = loadImage('../content/img/gnarp-in-ufo.png'); 
}

function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    clear(); // Make the background transparent

    image(img, xPos, height / 2 - img.height / 2); 
    
    // Move the image to the right
    xPos += 2; // Adjust the speed by changing this value
    
    // Reset position when the image moves off-screen
    if (xPos > width) {
        xPos = -img.width; // Move back to the left side
    }
}
