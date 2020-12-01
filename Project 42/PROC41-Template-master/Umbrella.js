class Umbrella{
	constructor(x, y, r){
		var options = {
			isStatic: true
		}
		this.x = x;
		this.y = y;
		this.r = r;
		this.image = loadImage("Images/walking_1.png");
		this.body = Bodies.circle(x, y, r, options);
		World.add(world, this.body);
	}
	display(){
		var pos = this.body.position;

		push();
		translate(pos.x, pos.y);
		rectMode(CENTER);
		noStroke();
		fill("black");
		ellipse(10, -40, this.r, this.r);
		imageMode(CENTER);
		image(this.image, 0, 0, 300, 300);
		pop();
	}
}