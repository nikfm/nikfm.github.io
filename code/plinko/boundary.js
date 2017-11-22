// A fixed boundary class

// A boundary is a simple rectangle with x,y,width, height and rotation angle
function Boundary(x_, y_, w_, h_, a_) {

	this.x = x_;
	this.y = y_;
	this.w = w_;
	this.h = h_;
	this.a = a_

	var fd = new box2d.b2FixtureDef();
	fd.density = 3.0;
	fd.friction = 0.6;
	fd.restitution = 0.4;

	// But we also have to make a body for box2d to know about it

	var bd = new box2d.b2BodyDef();

	bd.type = box2d.b2BodyType.b2_staticBody;
	bd.position.x = scaleToWorld(this.x);
	bd.position.y = scaleToWorld(this.y);
	bd.angle = this.a;
	fd.shape = new box2d.b2PolygonShape();
	fd.shape.SetAsBox(this.w / (scaleFactor * 2), this.h / (scaleFactor * 2));

	//Create Body and Attach Fixture
	this.body = world.CreateBody(bd).CreateFixture(fd);

  this.killBody = function() {
    world.DestroyBody(this.body);
  };
	// Draw the boundary, if it were at an angle we'd have to do something fancier
	this.display = function() {
		fill(227);
		//fill(202,1);
		strokeWeight(2);
		rectMode(CENTER);
		push();
		translate(this.x,this.y);
		rotate(this.a);
		ellipse(0, 0, this.w, this.h);
		pop();
	};
}
