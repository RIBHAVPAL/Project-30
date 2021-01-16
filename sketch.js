const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground1, ground2, ground3;
var b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,b13,b14,b15,b16,b17,b18;
var polygon, ss;

var engine, world;

function setup(){
    var canvas = createCanvas(1400,670);
    engine = Engine.create();
    world = engine.world;

    polygon = new Polygon(50,200,60);
    ss = new SlingShot(polygon.body,{x: 100, y: 200});
    ground1 = new Ground(400,500,300,20);
    ground2 = new Ground(1150,400,300,20);
    ground3 = new Ground(700,655,1400,30);
    b1 = new Box(330,235,30,40);
    b2 = new Box(360,235,30,40);
    b3 = new Box(390,235,30,40);
    b4 = new Box(420,235,30,40);
    b5 = new Box(450,235,30,40);
    b6 = new Box(360,195,30,40);
    b7 = new Box(390,195,30,40);
    b8 = new Box(420,195,30,40);
    b9 = new Box(390,155,30,40);
    b10 = new Box(1080,135,30,40);
    b11 = new Box(1110,135,30,40);
    b12 = new Box(1140,135,30,40);
    b13 = new Box(1170,135,30,40);
    b14 = new Box(1200,135,30,40);
    b15 = new Box(1110,95,30,40);
    b16 = new Box(1140,95,30,40);
    b17 = new Box(1170,95,30,40);
    b18 = new Box(1140,75,30,40);
    
  
}

function draw(){
background("black")
Engine.update(engine);
    
    ground1.display();
    ground2.display();
    ground3.display();
    b1.display();
    b2.display();
    b3.display();
    b4.display();
    b5.display();
    b6.display();
    b7.display();
    b8.display();
    b9.display();
    b10.display();
    b11.display();
    b12.display();
    b13.display();
    b14.display();
    b15.display();
    b16.display();
    b17.display();
    b18.display();
    polygon.display();
    ss.display();

    

}

function mouseDragged(){
    
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});

}


function mouseReleased(){
  ss.fly();

}





