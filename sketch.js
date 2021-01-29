var canvas,bg
var together
var tom,tig1,tig2,tig3
var jerry,jig1,jig2,jig3




function preload() {
 bg=loadImage("images/garden.png")
 tig1=loadImage("images/cat1.png")
 tig2=loadImage("images/cat2.png")
 tig3=loadImage("images/cat3.png")
 jig1=loadImage("images/mouse1.png")
 jig2=loadImage("images/mouse2.png","mouse3.png")
 jig3=loadImage("images/mouse4.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    tom = createSprite(870, 600);
    tom.addAnimation("tomSleeping", tig1);
    tom.scale = 0.2;

    jerry = createSprite(200, 600);
    jerry.addAnimation("jerryStanding", jig1);
    jerry.scale = 0.15;

}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide
    if(tom.x - jerry.x < (tom.width - jerry.width)/2)
    { 
        tom.velocityX=0;
        tom.addAnimation("tomLastImage", tomImg3);
        tom.x =300;
        tom.scale=0.2;
        tom.changeAnimation("tomLastImage");
        jerry.addAnimation("jerryLastImage", jerryImg3);
        jerry.scale=0.15;
        jerry.changeAnimation("jerryLastImage");
    }  
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW){
    tom.velocityX = -5; 
    tom.addAnimation("tomRunning", tig2);
    tom.changeAnimation("tomRunning");
    
    jerry.addAnimation("jerryTeasing", jig2);
    jerry.frameDelay = 25;
    jerry.changeAnimation("jerryTeasing");
}

}
