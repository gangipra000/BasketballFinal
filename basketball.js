class Basketball
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution:0,
			friction:1,
			density:1.2
			}
		
		this.r=r
		this.image=loadImage("basketball.png");
		this.body=Bodies.circle(x, y, this.r/2, options)
		World.add(world, this.body);

	}
	display()
	{
			var basketballpos=this.body.position;		
			push()
			translate(basketballpos.x, basketballpos.y);
			// rectMode(CENTER)
			// rotate(this.body.angle)
			fill(255,0,255)
			imageMode(CENTER);
			
			image(this.image, 0,0,this.r*2, this.r*2)
			pop()
			
	}

}