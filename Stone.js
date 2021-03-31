class Stone{
	constructor(x,y,r)
	{
	var options ={
		restitution:0.5,
	    friction:1,
		density:0
	
	}
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
		World.add(world, this.body);

	}
	display()
	{
			var stonepos=this.body.position;		
			push()
			translate(stonepos.x, stonepos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("red");
			fill("darkblue");
            ellipseMode(RADIUS);
			ellipse(this.body.position.x,this.body.position.y,20,20);
			pop()
	}