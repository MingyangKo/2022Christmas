class Balls{
	constructor(args){
		this.x=args.x;
		this.y=args.y;
		this.r=args.r;
		this.mode=args.mode;//isStatic:true/false
		this.tree=args.tree||false;
		this.body=Bodies.circle(this.x,this.y,this.r,
			{isStatic:this.mode,restitution: 0.6,friction:0.005});
		Composite.add(world,this.body);
		if(this.mode)this.body.label="pole";
		else this.body.label="ball";
		this.colorSwitch=random(['#ee6352','#3fa7d6','#fac05e','#f79d84']);
	}
	update(){

	}
	draw(){
		var pos=this.body.position;
		var ang=this.body.angle;
		push();
		if(this.mode||this.tree)fill('#4ec768');//tree
		else fill(this.colorSwitch);//balls
		translate(pos.x,pos.y);
		rotate(ang);
		circle(0,0,this.r*2);
		pop();
	}
}
