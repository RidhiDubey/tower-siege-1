const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var gameState = "onSling";
function preload(){
    polygon_img=loadImage("polygon.png");
}
function setup(){
    var canvas = createCanvas(1000,1000);
    engine = Engine.create();
    world = engine.world;

    var options={
        'restitution':0.8,
        'friction':0.2,
        'density':0.4
    }
    polygon=Bodies.circle(50,200,20,options);
    World.add(world,polygon);

    sling=new SlingShot(this.polygon,{x:100,y:200});

    hex1=new Hex(400,550);
    hex2=new Hex(450,550);
    hex3=new Hex(500,550);
    hex4=new Hex(550,550);
    hex5=new Hex(600,550);
    hex6=new Hex(450,500);
    hex7=new Hex(500,500);
    hex8=new Hex(550,500);
    hex9=new Hex(600,500);
    hex10=new Hex(500,450);
    hex11=new Hex(550,450);
    hex12=new Hex(550,450);
    hex13=new Hex(650,450);
    hex14=new Hex(700,400);

    hex15=new Hex(100,450);
    hex16=new Hex(200,450);
    hex17=new Hex(250,450);
    hex18=new Hex(300,450);
    hex19=new Hex(450,450);
    hex20=new Hex(200,400);
    hex21=new Hex(250,100);
    hex22=new Hex(200,150);
    hex23=new Hex(350,200);
    hex24=new Hex(250,250);
    hex25=new Hex(300,400);
    hex26=new Hex(450,450);
    hex27=new Hex(300,350);
    hex28=new Hex(250,300);

    
    fill(12,72,72);
    ground1=new Ground(600,600,500,30);
    ground2=new Ground(100,500,500,30);
    ground3=new Ground(0,1000,1000,30);
    
}

function draw(){
    background("black");
    Engine.update(engine);

    
    imageMode(CENTER);
    image(polygon_img,polygon.position.x,polygon.position.y,40,40);
    
    hex1.display();
    hex2.display();
    hex3.display();
    hex4.display();
    hex5.display();
    hex6.display();
    hex7.display();
    hex8.display();
    hex9.display();
    hex10.display();
    hex11.display();
    hex12.display();
    hex13.display();
    hex14.display();

    hex15.display();
    hex16.display();
    hex17.display();
    hex18.display();
    hex19.display();
    hex20.display();
    hex21.display();
    hex22.display();
    hex23.display();
    hex24.display();
    hex25.display();
    hex26.display();
    hex27.display();
    hex28.display();
    ground1.display();
    ground2.display();
    sling.display();

    textSize(25);
    fill("white");
    text("Drag the hexagonal stone, and release it to lauch it towards the blocks.",200,200);
    

    
}



function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    sling.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32){
       sling.attach(this.polygon);
    }
}

