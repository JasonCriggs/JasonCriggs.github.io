var traffics = [];
var player;
var enemy;
var score = 0;
var fish = 0;
//if score is high enough, if statement in draw function to tell it noLoop. Same if statement to loop the next draw function
//this is for new levels.

function preload(){
	img = loadImage('Assets/Main_char1.png');
	img1 = loadImage('Assets/Building2.png');
	img2 = loadImage('Assets/Building.png');
	img3 = loadImage('Assets/Cloud.png');
	img31 = loadImage('Assets/Cloud.png');
	img32 = loadImage('Assets/Cloud.png');
	img4 = loadImage('Assets/Car.png');
	img5 = loadImage('Assets/Enemy.png');
	img6 = loadImage('Assets/Lamp.png');
	img61 = loadImage('Assets/Lamp.png');
	img7 = loadImage('Assets/Plane.png');
	img8 = loadImage('Assets/Churger_Bing.png');
	img9 = loadImage('Assets/Bottle.png');
	img91 = loadImage('Assets/Bottle.png');
	img92 = loadImage('Assets/Bottle.png');
	img93 = loadImage('Assets/Bottle.png');
	img94 = loadImage('Assets/Bottle.png');
	img95 = loadImage('Assets/Bottle.png');
	myFont = loadFont('Assets/COMIC.ttf');
	//soundFormats('mp3');
	//sound1 = loadSound('Assets/Background.mp3');
}

function setup() {
	player = new Player();
	building = new Building();
	cloud = new Cloud();
	car = new Car();
	enemy = new Enemy();
	lamp = new Lamp();
	lamp2 = new Lamp2();
	plane = new Plane();
	churger = new Churger();
	bottle = new Bottle();
	bottle2 = new Bottle2();
	bottle3 = new Bottle3();
	bottle4 = new Bottle4();
	bottle5 = new Bottle5();
	bottle6 = new Bottle6();
	//sound1.setVolume(.05);
	//sound1.play();
	//sound1.setLoop(true);
	createCanvas(900, 600);
	
	for (var i = 0; i < 11; i++){
		traffics[i] = new Traffic(i * 100, 475);
	}
}

function draw() {
	if(score >= 0 && score < 600){
		background(50);
		textSize(15);
		fill(0, 150, 255);
		rect(0, 0, 900, 600);
		fill(51);
		rect(0, 400, 900, 200);
		fill(255,225,0);
		ellipse(150, 100, 150);
		fill(0);
		textFont(myFont);
		stroke(0);
		text('Score: ' + score, 150, 15);
		text('Health: ' + player.health, 550, 15);
		for (var i = 0; i < traffics.length; i++){
			traffics[i].show();
		}
		plane.show();
		cloud.show();
		building.show();
		lamp2.show();
		car.show();
		player.show();
		churger.show();
		enemy.show();
		lamp.show();
		bottle.show();
		bottle2.show();
		bottle3.show();
		bottle4.show();
		bottle5.show();
		bottle6.show();
		if(fish == 1){
			bottle6.x += (mouseX / 15) - 20;
			bottle6.y += (mouseY / 15) -20;
		}
		if(bottle6.x >= 9000 || bottle6.x <= -9000 || bottle6.y >= 9000 || bottle6.y <= -9000){
			bottle6.x = 105;
			bottle6.y = 5;
			fish = 0;
		}
		if(player.fuel >= 0){
			player.jump();
		}
		//if (enemy.x >= player.x - 50 && enemy.x < player.x + 50 && enemy.y <= player.y + 50 && enemy.y >= player.y - 50){
			//player.health -= 10;
			//player.x = player.x - 100;
		//}
		if (player.health <= 0){
			player.y = -50;
		}
		if (churger.x >= player.x && churger.x <= player.x + 100 && churger.y <= player.y + 100 && churger.y >= player.y){
			player.health += 20;
			churger.x = 4000;
			score += 10;
		}
		//player.jump1();
		
			
	}
	
	if(score == 600){
		background(51);
		ellipse(250, 250, 50, 50);
	}
}

function mouseClicked(){
	fish = 1;
	//if(bottle6.x == 105){
		bottle6.x = player.x + 25;
		bottle6.y = player.y + 25;
	//} else {
	//	return false;
	//}
	
}
function Bottle(){
	this.x = 5;
	this.y = 5;

	this.show = function(){
		image(img9, this.x, this.y);

	}
}
function Bottle2(){
	this.x = 25;
	this.y = 5;

	this.show = function(){
		image(img91, this.x, this.y);

	}
}

function Bottle3(){
	this.x = 45;
	this.y = 5;

	this.show = function(){
		image(img92, this.x, this.y);

	}
}
function Bottle4(){
	this.x = 65;
	this.y = 5;

	this.show = function(){
		image(img93, this.x, this.y);

	}
}


function Bottle5(){
	this.x = 85;
	this.y = 5;

	this.show = function(){
		image(img94, this.x, this.y);

	}
}
function Bottle6(){
	this.x = 105;
	this.y = 5;

	this.show = function(){
		image(img95, this.x, this.y);

	}
}








function Enemy(){
	this.x = 700;
	this.y = 355;
	player = new Player();
	this.show = function(){
		image(img5, this.x, this.y);
		this.x -= 5;
		if (this.x <= -150){
			this.x = 950;
		if (this.x == player.x){
			player.health -= 10;
		}
		}
		
	}
}


function Churger(){
	this.x = 600;
	this.y = 380;

	this.show = function(){
		image(img8, this.x, this.y);
		this.x -= 2;
		if (this.x <= -200){
			this.x = 4000;
		}
	}
}



function Traffic(x, y){
	this.x = x;
	this.y = y;

	this.show = function(){
		fill(255,255,153);
		rect(this.x, this.y, 75, 25);
		this.x -= 2;
		if(this.x <= -100){
			this.x = 900;
		}
	}
}
function Building(){
	this.x = 30;
	this.y = 145;
	this.q = 280;
	this.show = function(){
		image(img1, this.x, this.y);
		image(img2, this.q, this.y + 55);
		this.x -= 2;
		this.q -= 2
		if(this.x <= -230){
			this.x = 900;
		}
		if(this.q <= -230){
			this.q = 900;
		}
	}
}
function Cloud(){
	this.x = 350;
	this.y = 70;
	this.q = 700;
	this.u = 50;
	this.show = function(){
		image(img3, this.x, this.y);
		image(img31, this.q, this.y + 75);
		image(img32, this.u, this.y + 30);
		this.x -= .2;
		this.q -= .2;
		this.u -= .2;;
		if(this.x <= -150){
			this.x = 900;
		} 
		if(this.q <= -150){
			this.q = 900;
		}
		if(this.u <= -150){
			this.u = 900;
		}
	}
}
function Car(){
	this.x = 350;
	this.y = 480;

	this.show = function(){
		image(img4, this.x, this.y);
		this.x += 5;
		if(this.x >= 900){
			this.x = -500;
		}
	}
}
function Lamp(){
	this.x = 380;
	this.y = 300;
	this.show = function(){
		image(img6, this.x, this.y);
		this.x -= 2;
		if(this.x <= -230){
			this.x = 900;
		}
	}
}
function Lamp2(){
	this.q = 900;
	this.o = 210;
	this.show = function(){
		image(img61, this.q, this.o, 100, 200);
		this.q -= 2;
		if(this.q <= -230){
			this.q = 900;
		}
	}
}
function Plane(){
	this.x = 0;
	this.y = 60;

	this.show = function(){
		image(img7, this.x, this.y, 60, 30);
		this.x += 4;
		if(this.x >= 1800){
			this.x = -1000;
		}
	}
}