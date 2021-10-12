// Tringle points coordinates
var aX = prompt("Enter first point of X coordinate", "20");  // 20
document.getElementById("firstX").value = aX;
//console.log(aX);
var aY = prompt("Enter first point of Y coordinate", "20");//20
document.getElementById("firstY").value = aY;

var bX = prompt("Enter second point of X coordinate", "20");//20
document.getElementById("secondX").value = bX;
var bY = prompt("Enter second point of Y coordinate", "50");//50
document.getElementById("secondY").value = bY;

var cX = prompt("Enter third point of X coordinate", "60");//60
document.getElementById("thirdX").value = cX;
var cY = prompt("Enter third point of Y coordinate", "20");//10
document.getElementById("thirdY").value = cY;

// Finding triangle sides by Pythagorean theorem
var a_Delta_X = Math.abs(aX - bX); //0
var a_Delta_Y = Math.abs(aY - bY);//30
var abSide = Math.sqrt(Math.pow(a_Delta_X, 2) + Math.pow(a_Delta_Y, 2));
console.log(abSide);
var b_Delta_X = Math.abs(bX - cX);//40
var b_Delta_Y = Math.abs(bY - cY);//30
var bcSide = Math.sqrt(Math.pow(b_Delta_X, 2) + Math.pow(b_Delta_Y, 2));
console.log(bcSide);
var c_Delta_X = Math.abs(cX - aX);//40
var c_Delta_Y = Math.abs(cY - aY);//0
var caSide = Math.sqrt(Math.pow(c_Delta_X, 2) + Math.pow(c_Delta_Y, 2));
console.log(caSide);


var btn = document.getElementById('btn');

function triangleTypeFinder(abSide, bcSide, caSide) {
    var result;
  if (abSide === 0 || bcSide === 0 || caSide === 0) {
    result = "It isn't triangle!!!";
    } else {
  if ((abSide >= bcSide) && (abSide >= caSide)) {
    if (Math.pow(abSide, 2) === (Math.pow(bcSide, 2) + Math.pow(caSide, 2))) {
        result = "Right triangle";
    } 
    else if (Math.pow(abSide, 2) < (Math.pow(bcSide, 2) + Math.pow(caSide, 2))){
      result = "Acute triangle";
    } else {
      result = "Obtuse triangle";
    }
  }
  
  else if ((bcSide >= abSide) && (bcSide >= caSide)) {
    if (Math.pow(bcSide, 2) === (Math.pow(abSide, 2) + Math.pow(caSide, 2))) {
      result = "Right triangle";
    } 
    else if (Math.pow(bcSide, 2) < (Math.pow(abSide, 2) + Math.pow(caSide, 2))){
      result = "Acute triangle";
    } else {
      result = "Obtuse triangle";
    }
  }
  else if ((caSide >= abSide) && (caSide >= bcSide)) {
    if (Math.pow(caSide, 2) === (Math.pow(abSide, 2) + Math.pow(bcSide, 2))) {
      result = "Right triangle";
    } 
    else if (Math.pow(caSide, 2) < (Math.pow(abSide, 2) + Math.pow(bcSide, 2))){
      result = "Acute triangle";
    } else {
      result = "Obtuse triangle";
      }    
    }
  }
  return result;
}


var hypotenuse = triangleTypeFinder(abSide, bcSide, caSide);
//console.log(hypotenuse);


var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');
context.font = "20px Italic";
context.fillText("Mouseover here",110,180);

function drawTriangle () {

// the triangle
context.beginPath();
context.moveTo(aX*4, aY*4);
context.lineTo(bX*4, bY*4);
context.lineTo(cX*4, cY*4);
context.closePath();
 
// the outline
context.lineWidth = 10;
context.strokeStyle = 'red';
context.stroke();
 
// the fill color
context.fillStyle = "cyan";
context.fill();

}

//drawTriangle ();

canvas.addEventListener("mouseover", drawTriangle);

btn.addEventListener("click", function () {
    var divElement = document.getElementById('myDiv');
    divElement.innerText = hypotenuse;
});

//divElement.innerText = hypotenuse;

var firstSide = document.getElementById('divId1');
firstSide.innerText = "ab side = " + abSide;

var secondSide = document.getElementById('divId2');
secondSide.innerText = "bc side = " + bcSide;

var thirdSide = document.getElementById('divId3');
thirdSide.innerText = "ca side = " + caSide;