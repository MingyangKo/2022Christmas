class ObjectBox{
	constructor(args){
		this.x=args.x;
		this.y=args.y;
		this.w=args.w;
		this.h=args.h;
		this.a=args.a ||0;
		this.isG=args.isG || false;
		this.body=Bodies.rectangle(
			this.x,this.y,this.w,this.h,{
				isStatic: true,
				angle: this.a,
				friction:0
			});

		Composite.add(world,this.body);
	}
	update(){

	}
	draw(){
		var pos=this.body.position;
		var ang=this.body.angle;
		push();
		//fill('red');
		if(this.isG) fill('#4ec768');
		translate(pos.x,pos.y);
		rotate(ang);
		rectMode(CENTER);
		rect(0,0,this.w,this.h);
		pop();
	}
}
