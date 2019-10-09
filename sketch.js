var balls = [];
var Circle;
var Circledos;
// var Light;


function preload(){


  myBall = new Ball(50, 100, 20);
  myBall.size = 20;

  myCircle = new Circle(100, 100, 40);
  myCircle.size = 100;

  myCircledos = new Circledos(windowWidth/5, 100, 40);
  myCircledos.size = 100;

  // myLight = new Light(50, 100, 20);
  // myLight.size = 20;
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  textFont('akkurat');


}

function draw() {

  fill("yellow");
  stroke("yellow");
  textSize(15);
  text('move the mouse to find out how much the waether can be terrible today', 50, 50);


  myBall.move();
  myBall.display();

  myCircle.move();
  myCircle.display();

  myCircledos.move();
  myCircledos.display();

  // myLight.move();
  // myLight.display();



  for(var b = 0; b < balls.length; b += 5){
      balls[b].move();
      balls[b].display();
    }

}

//rain
function Ball(_x, _y, _diameter) {
  this.size= _diameter;
  this.x = _x;
  this.y = _y;
  this.speed = 2;

  var xIncrease = this.speed;
  var yIncrease = this.speed;

  this.move = function(){
    this.x = this.x + random(0,0);
    this.y = this.y + random(0,0);
  }

  this.display = function() {
    var c = map (mouseX, 0, width, 0, 100);
    noStroke(100);
    fill(c);
    ellipse(this.x, this.y, this.size)
  }
}

function mouseMoved(){
  var r = random(3,20);
  var d = new Ball(mouseX, mouseY, r);
  balls.push(d);
}

function mousePressed(){
  var r = random(3,20);
  var d = new Ball(mouseX, mouseY, r);
  balls.push(d);
}




//nuvola
function Circle(_a,_b,_diameter){
  this.size= _diameter;
  this.a = _a;
  this.b = _b;
  this.speed = 2;

  var aIncrease = this.speed;
  var bIncrease = this.speed;

  this.move = function() {
    this.a += aIncrease * 25 ;
    this.b += bIncrease * 20;

    //vertical bouncing
    if (this.a > windowHeight || this.a < 0) {
      aIncrease = - aIncrease;
    }

    //orizontal bouncing
    if (this.b > windowWidth/6 || this.b < 0) {
      bIncrease = - bIncrease;
    }}

  this.display = function() {
    ellipse(this.a, this.b, this.size)
  }}


//nuvola
function Circledos(_z,_l,_diameter){
  this.size= _diameter;
  this.z = _z;
  this.l = _l;
  this.speed = 2;

  var zIncrease = this.speed;
  var lIncrease = this.speed;

  this.move = function() {
    this.z += zIncrease * 25 ;
    this.l += lIncrease * 20;

    //vertical bouncing
    if (this.z > windowHeight || this.z < 0) {
      zIncrease = - zIncrease;
    }

    //orizontal bouncing
    if (this.l > windowWidth/6 || this.l < 0) {
      lIncrease = - lIncrease;
    }}

  this.display = function() {
    ellipse(this.z + windowWidth/2, this.l, this.size)
  }}

  //
  // //lighting
  // function Light(_g, _h, _diameter) {
  //   this.size= _diameter;
  //   this.g = _g;
  //   this.h = _h;
  //   this.speed = 2;
  //
  //   var gIncrease = this.speed;
  //   var hIncrease = this.speed;
  //
  //   if (this.g > windowHeight || this.g < 0) {
  //     gIncrease = - gIncrease + random(-5,5);
  //   }
  //
  //   // this.move = function(){
  //   //   this.g = this.g + random(-5,5);
  //   //   this.h = this.h + random(-5,5);
  //   // }
  //
  //   this.display = function() {
  //
  //     noStroke();
  //     fill("yellow");
  //     ellipse(this.x, this.y, this.size)
  //   }
  // }
