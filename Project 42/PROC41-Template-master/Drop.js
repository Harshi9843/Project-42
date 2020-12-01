class Drop{
	constructor(x, y){
		var options = {
			restitution: 0.2,
			friction: 0.1
		}
		this.x = x;
		this.y = y;
		this.body = Bodies.circle(x, y, 10, options);
		World.add(world, this.body);
	}

	display(){
		var pos = this.body.position;
		var angle = this.body.angle;

		push();
		translate(pos.x, pos.y);
		rotate(angle);
		noStroke();
		fill("blue");
		ellipseMode(CENTER);
		ellipse(0, 0, 10, 10);
		pop();
	}

	update(){
		if(this.body.position.y > 600){
			Matter.Body.setPosition(this.body, {x: random(0, 400), y:random(0, 400)})
		}
	}
}