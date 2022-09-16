var startRectangle,startRectangleImg
var restartButton, restartButtonImg
var ladyRunning, ladyRunningImg
var spikes, spikesImg
var forestBg, forestBgImg

function preload(){
  startRectangleImg = loadImage("rectangeBasicStarter.png")
  restartButtonImg = loadImage("restartButton.png")
  ladyRunningImg = loadAnimation("ladyRunning1.png","ladyRunning2.png","ladyRunning3.png","ladyRunning4.png","ladyRunning5.png")
  spikesImg = loadImage("spikes.png")
  forestBgImg = loadImage("forestBg.jpg")
}

function setup(){
  createCanvas(windowWidth,windowHeight)
  
  //startRectangle = createSprite(width/3,height/3, 50, 50)
  //startRectangle.addImage(startRectangleImg)
  
  //restartButton = createSprite(width/7,height/7, 20, 20)
  //restartButton.addImage(restartButtonImg)

  //spikes = createSprite(width/2,height/2, 40, 40)
  //spikes.addImage(spikesImg)

  forestBg = createSprite(300,450,width,height);
  forestBg.addImage("forestBg",forestBgImg);
  forestBg.x = forestBg.width/2;
  //forestBg.velocityX = -2


  ladyRunning = createSprite(width/2,height -200, 100, 100)
  ladyRunning.addAnimation("ladyRunning",ladyRunningImg)
  ladyRunning.scale = 1.5
}

function draw(){
  background(0)

  if (forestBg.x < 0){
    forestBg.x = forestBg.width/2;
  }

  drawSprites()

}