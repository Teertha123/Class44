const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies

var player, player2;
var engine,world;
var marble;
var groundImg;
var circle, sling, stone;

function preload(){
  groundImg=loadImage("Background.png");
}

function setup() {
  createCanvas(1000,800);
  engine=Engine.create();
  world=engine.world;

  stone = new Stone(100,390)
  sling = new Sling(stone.body,{x:100,y:300})
 circle = new Ellipse(500,400);
  marble = new Marble(500,400);
  marble2 = new Marble(580,280);
  marble3 = new Marble(370,290);
  marble4 = new Marble(370,400);
  marble5 = new Marble(590,500);
  marble6 = new Marble(420,530);
  marble7 = new Marble(670,370);
  marble8 = new Marble(470,190);
  marble9 = new Marble(520,590);
  marble10 = new Marble(330,460);
  marble11 = new Marble(480,290);
  marble12 = new Marble(580,400);
  marble13 = new Marble(500,640);
  marble14 = new Marble(680,460);
  marble15 = new Marble(500,470);
  marble16 = new Marble(300,340);
  marble17 = new Marble(590,190);
  marble18 = new Marble(670,280);
  marble19 = new Marble(380,560);
  marble20 = new Marble(640,340);
  player = createSprite(100,390,20,20);
  player2 = createSprite(870,390,20,20);
}

function draw() {
  background(groundImg); 
  Engine.update(engine);

  text("MouseX:"+mouseX,800,50);
  text("MouseY:"+mouseY,800,100);

 // circle = createSprite(500,400,500,500);
  //circle.addImage(groundImg)

circle.display();
marble.display();
marble2.display();
marble3.display();
marble4.display();
marble5.display();
marble6.display();
marble7.display();
marble8.display();
marble9.display();
marble10.display();
marble11.display();
marble12.display();
marble13.display();
marble14.display();
marble15.display();
marble16.display();
marble17.display();
marble18.display();
marble19.display();
marble20.display();
stone.display();
sling.display();
  drawSprites();
}