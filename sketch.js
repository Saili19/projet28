var ground,tree;
var stone;
var mango1,mango2,mango3,mango4,mango5;
var boy ;
var chain;


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
 
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(400,660,900,20);

	tree = new Tree(550,470,20,20); 

	stone = new Stone(55,400,30,30);

	mango1 = new Mango(400,400,50,50);
	mango2 = new Mango(470,370,50,50);
	mango3 = new Mango(540,310,50,50);
	mango4 = new Mango(590,410,50,50);
	mango5 = new Mango(650,390,50,50);

	boy = new Boy(110,605,90,90);

 	chain = new Chain(stone.body, boy.body);

	 




	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(168,170,169);
  
  chain.display();
  ground.display();
  tree.display();
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  boy.display();

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);

  drawSprites();
 
}
function mouseDragged(){
	Matter.Body.setPosition(stone.body, {x: mouseX, y: mouseY});
  }
  
function mouseReleased(){
	 chain.fly();
	  
  }
/*function keyPressed(){
	if(keyCode === 32){
		Matter.Body.setPosition(stone.body,{x:235, y:420})
		boy.attach(stone.body);
	}
}*/
function detectCollision(){
mangoBodyPosition = mango.body.position;
stoneBodyPosition = stone.body.position;

var distance =dist(stoneBodyPosition.x,stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
			 if(distance<= lmango.body.r + lstone.r){
				 Matter.Body.setStatic(lmango.body,false);
			 } 
}

