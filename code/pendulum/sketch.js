var pen = [];

function setup() {
	createCanvas(700, 700);
	for (var i = 0; i < 53; i++) {
		pen[i] = new Pendulum((i + 3) * 12, createVector((i+3)*12*width / width, 10));
	}
	frameRate(30);
}

function draw() {
	background(245);
	for (var i = 0; i < pen.length; i++) {
		pen[i].update();
		pen[i].display();
	}
		stroke(0, 90);
	line(36,10,width-40,10);
}

function Pendulum(r, origin) {
	this.loc = createVector();
	this.origin = origin.copy();
	this.r = r;
	this.angle = radians(89);
	this.aVel = 0.0;
	this.aAcc = 0.0;
	this.dampening = .99;

	this.update = function() {
		var gravity = -0.9;
		this.aAcc = gravity * sin(this.angle) / this.r;
		this.aVel += this.aAcc;
		this.angle += this.aVel;
		this.aVel *= this.dampening;
	}

	this.display = function() {
		this.loc.set(this.r * sin(this.angle), this.r * cos(this.angle));
		this.loc.add(this.origin);

		stroke(0, 50);
	
		line(this.origin.x, this.origin.y, this.loc.x, this.loc.y);
		fill(15, 255-map(this.loc.y,0,height,0,255), 150);
			noStroke();
		ellipse(this.loc.x, this.loc.y, 11, 11);
	}
}