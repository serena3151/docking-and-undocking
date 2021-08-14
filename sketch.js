var bg
var spacecraft1img, spacecraft2img, spacecraft3img, spacecraft4img, issImg
var spacecraft, iss
var hasDocked = false

function preload(){
bg = loadImage("spacebg.jpg")
spacecraft1img = loadImage("spacecraft1.png")
spacecraft2img = loadImage("spacecraft2.png")
spacecraft3img = loadImage("spacecraft3.png")
spacecraft4img = loadImage("spacecraft4.png")
issImg = loadImage("iss.png")
}


function setup() {
  createCanvas(800,600);
  spacecraft = createSprite(700, 380, 50, 50);
  spacecraft.addImage(spacecraft1img)
  spacecraft.scale = 0.3
  iss = createSprite(300,300,50,50)
  iss.addImage(issImg)
  iss.scale = 0.8
}

function draw() {
  background(bg)  
  if(hasDocked === false){
    spacecraft.x = spacecraft.x + random(-1,1)

    if(keyDown(UP_ARROW)){
      spacecraft.addImage(spacecraft2img)
      spacecraft.y = spacecraft.y -2
      
    }
    if(keyDown(DOWN_ARROW)){
      spacecraft.y = spacecraft.y +2
    }
    if(keyDown(LEFT_ARROW)){
      spacecraft.addImage(spacecraft3img)
      spacecraft.x = spacecraft.x -2
  
      
    }
    if(keyDown(RIGHT_ARROW)){
      spacecraft.addImage(spacecraft4img)
      spacecraft.x = spacecraft.x +2
      
    }
  }
  if(spacecraft.x  < iss.x-10 && spacecraft.y < iss.y+70){
    hasDocked = true
    fill("white")
    textSize(20)
    text("docking successful", 100,500)
  }
  drawSprites();
}