

// A reference to our box2d world
var world;

// A list we'll use to track fixed objects
var boundaries = [];
// A list for all of our particles
var particles = [];
var ON_SCREEN = 0;

var showboards = false;

function setup() {
	createCanvas(700,700);
	background(232);
	smooth(8);
	// Initialize box2d physics and create the world
	world = createWorld();

	// Add a bunch of fixed boundaries
	for(var i = 20; i<width; i += 40) {
		for(var j = 50; j<height-100; j+=40) {
			var spin = random(1);
			if(spin < 0.25) var a = -PI/3;
			else if (spin < 0.5) var a = 0;
			else if (spin < 0.75) var a = PI/2;
			else var a = PI/3;
			boundaries.push(new Boundary(i,j,30,1,a));
		}
	}
}

function draw() {
	background(232,32);

	//gravity = new box2d.b2Vec2(10,-10);
	// We must always step through time!
	var timeStep = 1.0 / 30;
	// 2nd and 3rd arguments are velocity and position iterations
	world.Step(timeStep, 10, 10);

	//seeding particles every so often
	if (random(1) < 0.5 && ON_SCREEN < 300) {
    var sz = random(2,4);
    particles.push(new Particle(random(width/4,3*width/4),-10,sz));
    ON_SCREEN++;
  }

	// Display all the boundaries
	if(showboards) {
		for (var i = 0; i < boundaries.length; i++) {
			boundaries[i].display();
		}
	}

	// Display all the particles
	for (var i = particles.length - 1; i >= 0; i--) {
		//particles[i].ApplyForce(box2d.b2Vec2(10,0),particles[i].GetWorldCenter(),true);
		particles[i].display();
		if (particles[i].done()) {
			particles.splice(i, 1);
			ON_SCREEN--;
		}
	}

}

function mousePressed() {
	showboards = !showboards;
//	if(!showboards) showboards = true;
//	else showboards = false;
}
