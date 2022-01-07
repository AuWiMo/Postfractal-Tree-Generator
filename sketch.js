var angle = 0;
var slider;
var greenness = 61;

function setup() {
  createCanvas(800, 800);
  slider = createSlider(0, TWO_PI, PI / 2, 0.01);
  frameRate(5);
}

function draw() {
  if (angle != slider.value()) {
    console.log("drew");
    background(24/2, 75/2, 97/2);
    strokeJoin(ROUND);
    angle = slider.value();
    stroke(70, 0, 30);
    strokeWeight(15);
    translate(width/2, height);
    line(0, 0, 0, -200);
    translate(0, -200)
    branch(75);
  }

}

function branch(len) {
  greenness = (240 - len * 12); 
  strokeWeight(len/5);
  stroke(70, greenness, 30);
  line(0, 0, 0, -len);
  translate(0, -len);
  if (len > random(2, 6)) {
    push();
    rotate(angle*len/(len+50));
    branch(len * random(0.5, 1) );
    pop();
    push();
    rotate(-angle*len/(len+50));
    branch(len * random(0.5, 1));
    pop();
  }


}