
// Demonstration of Craig Reynolds' "Flocking" behavior
//Modified from Daniel Shiffman's Nature of Code
// See: http://www.red3d.com/cwr/
// Rules: Cohesion, Separation, Alignment

var flock;

var beta = 0.0;

var sepslider, alislider, cohslider;
var sepp, alip, cohp;

function setup() {

	createCanvas(700, 700);
	flock = new Flock();
	// Add an initial set of boids into the system
	for (var i = 0; i < 75; i++) {
		var b = new Boid(random(width), random(height));
		flock.addBoid(b);
	}

	//sliders to control flock
	sepslider = createSlider(1, 100, 55);
	sepslider.position(width + 10, 40);
	alislider = createSlider(1, 100, 60);
	alislider.position(width + 10, 80);
	cohslider = createSlider(1, 100, 45);
	cohslider.position(width + 10, 120);
	//titles for sliders
	sepp = createP("separation: ");
	sepp.position(width+10,10);
	alip = createP("alignment: ");
	alip.position(width+10,50);
	cohp = createP("cohesion: ");
	cohp.position(width+10,90);
}

function draw() {
	background(0, 50, 82);
	flock.run();
	beta += 0.25;
}
