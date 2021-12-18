var runner,runnerimg,runnermorto;
var bg,bgimg;
var bombaas;
var stat = "Play";
var bomb,bombimg,nmmale;
function bombas(){
  if(frameCount%20 == 0){
   bomb = createSprite(0,-10)
   bomb.velocityY = bg.velocityY;
   nmmale = Math.round(random(1,3));
   //console.log(nmmrale);
   bomb.scale = 0.08;
  bomb.lifeTime = 60;
   switch(nmmale){
     case 1 : bomb.x = 100;bomb.addImage(bombimg);
     break;
     case 2 : bomb.x = 200;bomb.addImage(bombimg);
     break;
     case 3 : bomb.x = 300;bomb.addImage(bombimg);
     break;
     default : break;
   }
   bombaas.add(bomb)
  }
   }
function preload(){
  //imagens pré-carregadas
  runnerimg = loadAnimation("Runner-1.png","Runner-2.png");
  runnermorto = loadAnimation("Runner-1.png");
  bgimg = loadImage("path.png");
  drink = loadImage("energyDrink.png")
  bombimg = loadImage("bomb.png")
  coin = loadImage("coin.png")
}

function setup(){
  createCanvas(400,400);
  //crie sprite aqui
  bg = createSprite(200,200);
  bg.width = 30;
  bg.height = 20
  bg.addImage(bgimg);
  bg.velocityY = 10;
  runner = createSprite(200,350);
  runner.scale = 0.05;
  runner.addAnimation("Run",runnerimg);
  runner.addAnimation("Morto",runnermorto);
  bombaas = new Group();
}

function draw() {
  background(0); 
  drawSprites();
  console.log(stat)
  if (bg.y > 400){
      bg.y = height/2.6;
  }
  if(stat == "Play"){
    
    runner.x = World.mouseX;
    if (runner.x >= 340){
      runner.x =  339;
    }
    if (runner.x <= 65){
      runner.x =  66;
    }
    bombas();
    if (runner.isTouching(bombaas)){
      console.log("tocou")
        stat = "Fim"
    }
  
}else{
bombaas.setLifetimeEach(-1);
bombaas.setVelocityYEach(0);
runner.changeAnimation("Morto")
bg.velocityY = 0;
}

  
}
