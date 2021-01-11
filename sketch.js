
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var tree,stoneObj,groundObject,launcherObject;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10;
var world,boy;
var launchingForce=100;

function preload()
{
	boy=loadImage("boy.png");
}

function setup() {
	createCanvas(1300,600);


	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.
  
    tree = new tree(1050,580);
    stoneObj = new Stone(235,420,30);
    mango1 = new Mango(855,325,34);
    mango2= new Mango(670,260,34);
    mango3 = new Mango(600,290,35);
    mango4 = new Mango(730,200,35);
    mango5 = new Mango(710,320,35);
    mango6 = new Mango(780,250,35);
    mango7 = new Mango(880,260,34);
    mango8 = new Mango(825,171,36);
    mango9 = new Mango(940,220,36);
    mango10 = new Mango(980,305,36);
    groundObject = new Ground(400,700,800,20);
    launcherObject = new launcher(stoneObj.body,{x:235,y:420});
    
    

    var render=Render.create({
      element:document.body,
      engine:engine,
      options: {
        width:1300,
        height:600,
        wireframes:false
      }
    });
	Engine.run(engine);
  
}


function draw() {
  
  background(230);
  //frameRate(2)
  //Engine.update(engine);
  textSize(25);
  text("Press Space to get a second chance to play!",50,50);
  image(boy,200,340,200,300);

  //Engine.update(engine);
  
  treeObj.display();
  stoneObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  groundObject.display();
  launcherObject.display();
  
   detectollision(stoneObj,mango1);
    detectollision(stoneObj,mango2);
    detectollision(stoneObj,mango3);
    detectollision(stoneObj,mango4);
    detectollision(stoneObj,mango5);
    detectollision(stoneObj,mango6);
    detectollision(stoneObj,mango7);
    detectollision(stoneObj,mango8);
    detectollision(stoneObj,mango9);
    detectollision(stoneObj,mango10);

 
}
function mouseDragged(){
  Matter.Body.setPosition(stoneObj.body,{x:mouseX,y:mouseY});
  
}
function mouseReleased(){
  launcherObject.fly();
  //distance=int(dist(stoneObj.x,stoneObj.y,mango1.x,mango1.y));
}
function keyPressed(){
  if(keyCode===32){
    Matter.Body.setPosition(stoneObj.body,{x:235,y:420});
    launcherObject.attach(stoneObj.body);
  }
}
function detectollision(lstone,lmango){
 /* var collision = Matter.SAT.collides(lstone,lmango);
  if(collision.collided){
    console.log("collided");
    Matter.Body.setStatic(lmango,false);
  }*/
  mangoBodyPosition=lmango.body.position;
  stoneBodyPosition=lstone.body.position;

  var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
  //console.log(distance)
  //console.log(lmango.r+lstone.r)
  if(distance<=lmango.r+lstone.r){
    //console.log(distance);
    Matter.Body.setStatic(lmango.body.false);
  }

}

