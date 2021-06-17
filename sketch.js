const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer,stone,iron;
var rubberball;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;
    stone = new Stone(300,100,70,70);
    iron = new Iron(300,100,100,100);
    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,10);
    rubberball = new Rubber(500,100,30);
    
  


}

function draw(){
    background("lightBlue");
    Engine.update(engine);
    hammer.debug = true;
    plane.display();
    iron.display();
    hammer.display();
    rubberball.display();
    stone.display();
 
}