var Engine = Matter.Engine,
    Bodies = Matter.Bodies,
		Runner = Matter.Runner,
    Composite = Matter.Composite,
		World = Matter.World;
var engine;
var runner;
var world;
var poleBodies=[],poleBody;
var ballBodies=[],ballBody;
var ballMaxVar=100;
var boun;

var noteIndex=0;
var isSoundPlaying=false;
var timeTag=0,durTime;

function setup() {
	createCanvas(windowWidth, windowHeight);
	pixelDensity(1);
	background('#45556e');
	noStroke();
	engine = Engine.create();
	world=engine.world;
	runner=Runner.create();
	Runner.run(runner, engine);
  // var numY=height/10;
  var numX=width/70;
	for(let i=0;i<numX;i++){
		for(let j=0;j<i+1;j++){
			poleBody=new Balls({
				x:windowWidth/2+j*90-i*45,y:200+i*(height-300)/numX,r:12,mode:true
			});
			poleBodies.push(poleBody);
			//circle(windowWidth/2+j*50-i*25,50+i*50,5);
		}
	}

	//ground
	boun=new ObjectBox({
		x:width/2,y:height-10,w:width,h:20
	});
  	boun=new ObjectBox({
		x:-10,y:height/2,w:20,h:height
	});
  	boun=new ObjectBox({
		x:width+10,y:height/2,w:20,h:height
	});

}

function draw() {
	background('#45556e');
	push();
	fill(255,60);
	circle(windowWidth/2,125,500);
	circle(windowWidth/2,125,300);
	circle(windowWidth/2,125,150);
	circle(windowWidth/2,125,80);
	pop();
	if(ballBodies.length>ballMaxVar){
		ballBodies.shift();
		World.remove(world,ballBodies[0].body);
	}
	let ran=int(random(18,21));
	if(frameCount % ran < 1){//60
		ballBody=new Balls({
				x:windowWidth/2+random(-1,1),y:125,r:14,mode:false
			});
		ballBodies.push(ballBody);
	}
	for(let i=0;i<poleBodies.length;i++){
		poleBodies[i].draw();
	}
	for(let i=0;i<ballBodies.length;i++){
		ballBodies[i].draw();
	}

}
