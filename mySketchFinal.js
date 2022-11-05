var Engine = Matter.Engine,
    Bodies = Matter.Bodies,
		Runner = Matter.Runner,
    Composite = Matter.Composite,
		World = Matter.World;
var engine;
var runner;
var world;
var treeBodies=[],treeBody;
var ballBodies=[],ballBody;
var groundBodies=[],groundBody;
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

  for(let i=0;i<100;i++){
    treeBody=new Balls({x:width/2,y:520+i*10,r:50,mode:false,tree:true});
    treeBodies.push(treeBody);
  }

  var numX=width/70;

  let x1=windowWidth/2-45;
  let y1=200+(height-300)/numX;
  let x2=windowWidth/2-numX*45;
  let y2=200+numX*(height-300)/numX;

  let barw=dist(x1,y1,x2,y2);
  let vec=createVector(x2-x1,y2-y1);
  let bara=vec.heading();
  groundBody=new ObjectBox({
    x:(x1+x2)/2,y:(y1+y2)/2,w:barw,h:30,a:bara
  });

  x1=windowWidth/2+45;
  y1=200+(height-300)/numX;
  x2=windowWidth/2+numX*90-numX*45;
  y2=200+numX*(height-300)/numX;

  barw=dist(x1,y1,x2,y2);
  vec=createVector(x2-x1,y2-y1);
  bara=vec.heading();
  groundBody=new ObjectBox({
    x:(x1+x2)/2,y:(y1+y2)/2,w:barw,h:30,a:bara
  });

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
	for(let i=0;i<treeBodies.length;i++){
		treeBodies[i].draw();
	}
	for(let i=0;i<ballBodies.length;i++){
		ballBodies[i].draw();
	}

}
