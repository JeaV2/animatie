let ufo;
let USH = 300;
let direction = -1;

function setup(){
  createCanvas(windowWidth, windowHeight);
}

function preload(){
  ufo = loadImage('../content/img/gnarp-in-ufo-tractorbeam.png');
  fox = loadImage('../content/img/fox.png');
}

function draw(){
  clear();
  background(0, 255, 255, 100);
  
  image(fox, (windowWidth*0.5)-180, 600, 0, 0);

  image(ufo, (windowWidth*0.5)*0.5, USH, 0, 0);
  
  if (USH === 300){
    direction = -1;
    console.log(`Spaceship lowered to ${USH}`);
}
  
  USH += direction;
  console.log(USH);
}
