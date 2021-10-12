let cvs = document.getElementById("canvas");
let ctx = cvs.getContext("2d");
	
var bird = new Image();
var bg = new Image();
var fg = new Image();
var pipeUp = new Image();
var pipeBottom = new Image();

bird.src = "img/bird.png";
bg.src = "img/bg.png";
fg.src = "img/fg.png";
pipeUp.src = "img/pipeUp.png";
pipeBottom.src = "img/pipeBottom.png";

// Audio files
var fly = new Audio();
var score_audio = new Audio();
var game_over = new Audio();
fly.src = "audio/fly.mp3";
score_audio.src = "audio/score.mp3";
game_over.src = "audio/Game_Over.mp3";

var gap = 125;

// pushing any button
document.addEventListener("keydown", moveUp);

function moveUp () {
  yP -=25;
  fly.play();
}

//blocks
var pipeArray = [];
pipeArray[0] = {
  x: cvs.width,
  y: 0	
};

// coordinates of bird
var xP = 10;
var yP = 150;
var diff = 1.5;
var score = 0;

function draw () {
	ctx.drawImage(bg, 0, 0);

	for (let i = 0; i < pipeArray.length; i++) {
	  ctx.drawImage(pipeUp, pipeArray[i].x, pipeArray[i].y);
	  ctx.drawImage(pipeBottom, pipeArray[i].x, pipeArray[i].y + pipeUp.height + gap);  
	  pipeArray[i].x--;	// moving blocks

	  //console.log(pipeArray[i].x);
	  if (pipeArray[i].x == 60) {
		  pipeArray.push({
			x: cvs.width,
			y: Math.floor(Math.random() * pipeUp.height) - pipeUp.height // for example y: -10;
		  });
	   }

	   if (xP + bird.width >= pipeArray[i].x 
		   && xP <= pipeArray[i].x + pipeUp.width 
		   &&(yP <= pipeArray[i].y + pipeUp.height
		   || yP + bird.height >= pipeArray[i].y + pipeUp.height + gap) 
		   || yP + bird.height >= cvs.height - fg.height) {
			
			game_over.play();
			
			location.reload();
			alert("Game over");
			   
		   }

		if (pipeArray[i].x == 5) {
			score++;
			score_audio.play();
		   }
	}

	ctx.drawImage(fg, 0, cvs.height - fg.height);
	ctx.drawImage(bird, xP, yP);

	yP = yP + diff; // bird go down ))
	//alert("some text");
	
	var gradient = ctx.createLinearGradient(0, 0, cvs.width, 0);
	gradient.addColorStop("0", "magenta");
	gradient.addColorStop("0.5", "blue");
	gradient.addColorStop("1.0", "red");
	ctx.fillText("Your score : " + score, 20, cvs.height - 20);
	ctx.fillStyle = gradient;
	ctx.font = '25px Arial';

	requestAnimationFrame(draw);  // called always ;-)
}

pipeBottom.onload = draw;
