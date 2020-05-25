var bg,button,pl,nt;

var road,plr;

var boy,note;

var player;

var gameState=0;


function preload(){
  bg=loadImage('images/sp.jpg')
  pl=loadImage('images/welcome.png')
  nt=loadImage('images/image.jpg')
  road=loadImage('images/daytime.png')
  plr=loadImage('images/boyLeft.png')


}

function setup() {
  
  createCanvas(displayWidth,displayHeight);

  
  button=createButton("tap to continue")
  button.position(600,500);
   button.mousePressed(()=>{
    gameState=1;
    button.hide();
   })
  
  
   


}

function draw() {
  background(bg);
  
 if(gameState===1){
//   background("white")
//    boy=createSprite(100,400,10,10);
//    boy.addImage(pl);
//    note=createSprite(800,400,10,10);
//    note.addImage(nt);
//   note.scale=1.5;
  


   background("white")
   

   

   


    boy=createSprite(100,400,10,10);
    boy.addImage(pl);
    note =createSprite(800,400,10,10);
    note.addImage(nt);
   note.scale=1.5;

   if(keyCode === 32){
      gameState=2;
     
    
     }
    

   }
 
   if(gameState === 2){
    x=1000;
    
    
    var bgc=createSprite(500,500,10,10);
    bgc.addImage(road);
    bgc.scale=5.5;
    var player=createSprite(x,630,100,100);
    player.addImage(plr);
    player.scale=0.8;
    
    if (keyCode === 37) {
     x = x - 10;
    }
     
  }

  drawSprites();
  
  if(gameState===1){
    
    textSize(35);
    fill("red");
    text("Beware",750,300);
     textSize(15)
     fill("black")
     strokeWeight(5)
     text("Your goal is to go to the store and buy groceries for your",640,315);
     text("grandparents.On your way, you will be attacked by corona monsters.",640,330);
     text("You have to defend yourselve from the monsters and reach your goal.",640,345)
     text("Remember to collect bullets,sanitizers and masks on your way.Press",640,360);
     text("space key to shoot.Control the player with the help of arrow keys.",640,375);
     text("Press space to continue to the game.",640,390);
     textSize(35);
     fill("red");
     text("Good luck!!",750,420);
     }
  
}