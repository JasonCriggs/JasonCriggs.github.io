
function Player(){
	this.x = 200;
	this.y = 325;
	this.fuel = 250;
	this.health = 250;
	this.show = function(){
		stroke(255);
		fill(255, 0, 0);
		rect(900, 0, -this.health, 10);
		image(img, this.x, this.y);
		//moving
		if((keyIsDown(65)) && (this.x >= 10)){
			this.x -= 10;
		}
		if((keyIsDown(68)) && (this.x <= 805)){
			this.x += 10;
		}
		//ground
		//jumping
		this.fuel += 5;
		if (this.fuel >= 250){
			this.fuel = 250;
		}
		if (this.health >= 250){
			this.health = 250;
		}
		//if(keyIsDown(32)){
			//if(this.y <= 325){
				//this.y = this.y / 1.35;
				//this.y = this.y * 1.15;
				//this.fuel -= 10;
			//}
		//	if(this.fuel == 0){
				//this.fuel = -1000;
			//}
			//if(this.y <= 75){
				//this.y * 1.15;
			//}
		//} 
		//gravity
		if(this.y <= 325){
			this.y *= 1.05;
		}
	this.jump = function keyPressed(){
		if(keyCode == 32){
			this.y = this.y / 1.15;
			this.fuel -= 10;
			if(this.y <= 325){
				this.y = this.y * 1.05;
			}
			if(this.fuel == 0){
				this.fuel = -700;
			}
			return false;
		}

	}

}
	//this.jump1 = function keyReleased(){
		//if(keyCode == 32){
			//this.fuel = -800;
		//}
	//}
}
