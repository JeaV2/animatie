let ufo;
let fox;
let USH = 300;
let direction = -2;
let triggered = false;
let ufoSound = new Audio('../content/audio/ufo-landing.mp3');

function setup(){
  createCanvas(windowWidth, windowHeight);
  ufoSound.play();
}

function preload(){
  ufo = loadImage('../content/img/gnarp-in-ufo-tractorbeam.png');
  fox = loadImage('../content/img/fox.png');
}

function draw(){
  background(0, 255, 255);
  clear();
  
  image(fox, (windowWidth*0.5)-200, USH + 200, 0, 0); 

  image(ufo, (windowWidth*0.5)*0.5, USH, 0, 0);
  
  if (USH === -600){
    console.log(`Spaceship lowered to ${USH}`);
  }
  else{
    USH += direction;
  }
  console.log(USH);

  if (USH === -600 && triggered === false) {
    triggered = true;
    window.location.href = '/page4.html';
  }
  else {
    return;
  }


}
