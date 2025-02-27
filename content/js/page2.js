// p5 animatie
let ufo;
let USH = -300
let triggered = false
let ufoSound = new Audio('../content/audio/ufo-landing.mp3');

function setup() {
  createCanvas(windowWidth, windowHeight);
  ufoSound.play();
}

function preload() {
  ufo = loadImage('../content/img/gnarp-in-ufo.png');
  fox = loadImage('../content/img/fox.png');
}

function draw() {
  setup();
  background(0, 255, 255);
  clear();
  image(fox, (windowWidth*0.5)-180, 600, 0, 0);

  image(ufo, (windowWidth*0.5)*0.5, USH, 0, 0);
  if (USH === 300) {
    console.log(`Spaceship lowered to ${USH}`);
  }
  else {
    USH += 1.5;
    console.log(USH);
  }
  if (USH === 300 && triggered === false) {
    triggered = true;
    setTimeout(() => {
      window.location.href = '/page3.html';
    }, 1000);
  }
  else {
    return;
  }
}

draw();