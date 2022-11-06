var Engine = Matter.Engine,
    Bodies = Matter.Bodies,
		Runner = Matter.Runner,
    Composite = Matter.Composite,
		World = Matter.World;
var engine;
var runner;
var world;

var groundBodies=[],groundBody;
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

  var numX=width/70;

  strokeWeight(5);
	for(let i=1;i<numX;i++){
    if(i%4==3){
      let x1=windowWidth/2+i*90-i*45;
      let y1=200+i*(height-300)/numX;
      let x2=windowWidth/2+1*90-(i+1)*45;
      let y2=200+(i+1)*(height-300)/numX;
      
      let barw=dist(x1,y1,x2,y2);
      let vec=createVector(x2-x1,y2-y1);
      let bara=vec.heading();
      groundBody=new ObjectBox({
    		x:(x1+x2)/2,y:(y1+y2)/2,w:barw,h:24,a:bara,isG:true
    	});
      groundBodies.push(groundBody);
    }
    if(i%4==1){
      let x1=windowWidth/2-i*45;
      let y1=200+i*(height-300)/numX;
      let x2=windowWidth/2+(i)*90-(i+1)*45;
      let y2=200+(i+1)*(height-300)/numX;

      let barw=dist(x1,y1,x2,y2);
      let vec=createVector(x2-x1,y2-y1);
      let bara=vec.heading();
      groundBody=new ObjectBox({
    		x:(x1+x2)/2,y:(y1+y2)/2,w:barw,h:24,a:bara,isG:true
    	});
      groundBodies.push(groundBody);
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
	for(let i=0;i<groundBodies.length;i++){
		groundBodies[i].draw();
	}
	for(let i=0;i<ballBodies.length;i++){
		ballBodies[i].draw();
	}

}
