
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Contraint = Matter.Constraint;


function preload()
{
	
}

function setup() {
	createCanvas(1200,1000);

// making Engine and world
	engine = Engine.create();
	world = engine.world;

	
	// make Boy
	Boy1 = new Boy(150,850,300,250);


	// make stone
	stone = new Stone(50,800,100,100); 

	// make ground
	ground = new Ground(600,900,1200,50);

	// make tree
	Tree = new tree(800,550,750,700);

	//  make mangoes
		Mango1 = new mango(950,400,50);
		Mango2 = new mango(880,300,50);
		Mango3 = new mango(700,500,50);
		Mango4 = new mango(810,420,50);

	 shooter = new launcher(stone.body,{x:60,y:500});

		// run Engine
	Engine.run(engine);
  
}


// draw
function draw() {
  rectMode(CENTER);
  background(252,29,140);

  Engine.update(engine);

  ground.display();
  Boy1.display();

 stone.display();
  Tree.display();

  Mango1.display();
  Mango2.display();
   Mango3.display();
   Mango4.display();



   detectcollision(stone,Mango1);
    detectcollision(stone,Mango2);
    detectcollision(stone,Mango3);
    detectcollision(stone,Mango4);
    detectcollision(stone,Mango5);

  shooter.display();

 
 // drawSprites();
 
}

function keyPressed(){
	if(keyCode === 32){
		Matter.Body.setPositon(stone.body,{x:325,y:420})
		Launcher.attach(stone.body);

	}

}



// collision detection
function detectcollision(lstone,lmango){
mangoBodyPosition=lmango.body.postion
stoneBodyPosition=lstone.body.postion

var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
if(distance<=lmango.r+lstone.r){
	Matter.Body.setStatic(lmango.body,false);
}


}

function mouseDragged(){
	Matter.Body.setPositon(bird.body,{x: mouseX,y: mouseY});
}
