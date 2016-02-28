function TFigure(color, x, y){
	this.x = x;
	this.y = y;
	this.color = color;
	this.statement = 0;
	this.draw = function ()
	{
		this.elem1.draw();
		this.elem2.draw();
		this.elem3.draw();
		this.elem4.draw();
	}
	this.checkMove = function(movex, movey){
		for(var i = 0;i <= bheight+1; i++){
			for(var j = 0; j <= bwidth+1; j++){
				if ((((this.elem1.x+movex*block  === field[i][j].x) && (this.elem1.y+movey*block === field[i][j].y)) && (field[i][j].full === true)) ||
					(((this.elem2.x+movex*block === field[i][j].x) && (this.elem2.y+movey*block === field[i][j].y)) && (field[i][j].full === true)) ||
					(((this.elem3.x+movex*block === field[i][j].x) && (this.elem3.y+movey*block === field[i][j].y)) && (field[i][j].full === true)) ||
					(((this.elem4.x+movex*block === field[i][j].x) && (this.elem4.y+movey*block === field[i][j].y)) && (field[i][j].full === true))) {
					return(false)
				}
			}
		}
		return(true);
	}
	this.rotate = function(){
		this.statement++;
		if (this.statement > 3){
			this.statement = 0;
		}
	}
}

function TSquare(color, x, y)
{
	this.color = color;
	this.x = x;
	this.y = y;
	this.full = true;
	this.width = 32;
	this.height = 32;
	this.draw = function(){
		if (this.full){
			ctx.strokeRect(this.x, this.y, this.width, this.height);
			ctx.fillStyle = this.color;
			ctx.fillRect(this.x+3, this.y+3, this.width-6, this.height-6);
		}
		else {
			return;
		}
	}
}

function TOFigure(color, x, y, statement)
{
	this.x = x;
	this.y = y;
	this.statement = 0;
	this.color = color;
	this.elem1 = new TSquare(this.color, this.x, this.y);
	this.elem2 = new TSquare(this.color, this.x+block, this.y);
	this.elem3 = new TSquare(this.color, this.x, this.y+block);
	this.elem4 = new TSquare(this.color, this.x+block, this.y+block);
	this.move = function()
	{
		this.elem1.x = this.x;
		this.elem2.x = this.x+block;
		this.elem3.x = this.x;
		this.elem4.x = this.x+block;
		this.elem1.y = this.y;
		this.elem2.y = this.y;
		this.elem3.y = this.y+block;
		this.elem4.y = this.y+block;
	}
}

function TIFigure(color, x, y, statement)
{
	this.x = x;
	this.y = y;
	this.color = color;
	this.statement = statement;
	this.elem1 = new TSquare(this.color, this.x, this.y);
	this.elem2 = new TSquare(this.color, this.x, this.y);
	this.elem3 = new TSquare(this.color, this.x, this.y);
	this.elem4 = new TSquare(this.color, this.x, this.y);
	this.move = function()
	{
		if (this.statement === 0) {
			this.elem1.x = this.x;
			this.elem2.x = this.x;
			this.elem3.x = this.x;
			this.elem4.x = this.x;
			this.elem1.y = this.y;
			this.elem2.y = this.y - block;
			this.elem3.y = this.y + block;
			this.elem4.y = this.y + block * 2;
		}
		if (this.statement === 1) {
			this.elem1.x = this.x;
			this.elem2.x = this.x-block;
			this.elem3.x = this.x-block*2;
			this.elem4.x = this.x+block;
			this.elem1.y = this.y;
			this.elem2.y = this.y;
			this.elem3.y = this.y;
			this.elem4.y = this.y;
		}
		if (this.statement === 2) {
			this.elem1.x = this.x;
			this.elem2.x = this.x;
			this.elem3.x = this.x;
			this.elem4.x = this.x;
			this.elem1.y = this.y;
			this.elem2.y = this.y - block;
			this.elem3.y = this.y - block * 2;
			this.elem4.y = this.y + block;
		}
		if (this.statement === 3) {
			this.elem1.x = this.x;
			this.elem2.x = this.x-block;
			this.elem3.x = this.x+block*2;
			this.elem4.x = this.x+block;
			this.elem1.y = this.y;
			this.elem2.y = this.y;
			this.elem3.y = this.y;
			this.elem4.y = this.y;
		}

	}
}

function TTFigure(color, x, y, statement)
{
	this.x = x;
	this.y = y;
	this.color = color;
	this.statement = statement;
	this.elem1 = new TSquare(this.color, this.x, this.y);
	this.elem2 = new TSquare(this.color, this.x, this.y);
	this.elem3 = new TSquare(this.color, this.x, this.y);
	this.elem4 = new TSquare(this.color, this.x, this.y);
	this.move = function()
	{
		if (this.statement === 0){
			this.elem1.x = this.x;
			this.elem2.x = this.x-block;
			this.elem3.x = this.x;
			this.elem4.x = this.x+block;
			this.elem1.y = this.y;
			this.elem2.y = this.y;
			this.elem3.y = this.y - block;
			this.elem4.y = this.y;
		}
		if (this.statement === 1) {
			this.elem1.x = this.x;
			this.elem2.x = this.x;
			this.elem3.x = this.x;
			this.elem4.x = this.x+block;
			this.elem1.y = this.y;
			this.elem2.y = this.y - block;
			this.elem3.y = this.y + block;
			this.elem4.y = this.y;
		}
		if (this.statement === 2){
			this.elem1.x = this.x;
			this.elem2.x = this.x-block;
			this.elem3.x = this.x;
			this.elem4.x = this.x+block;
			this.elem1.y = this.y;
			this.elem2.y = this.y;
			this.elem3.y = this.y+block;
			this.elem4.y = this.y;
		}
		if (this.statement === 3){
			this.elem1.x = this.x;
			this.elem2.x = this.x;
			this.elem3.x = this.x;
			this.elem4.x = this.x-block;
			this.elem1.y = this.y;
			this.elem2.y = this.y - block;
			this.elem3.y = this.y + block;
			this.elem4.y = this.y;
		}

	}
}

function TJFigure(color, x, y, statement)
{
	this.x = x;
	this.y = y;
	this.color = color;
	this.statement = statement;
	this.elem1 = new TSquare(this.color, this.x, this.y);
	this.elem2 = new TSquare(this.color, this.x, this.y);
	this.elem3 = new TSquare(this.color, this.x, this.y);
	this.elem4 = new TSquare(this.color, this.x, this.y);
	this.move = function() {
		if (this.statement === 0) {
			this.elem1.x = this.x;
			this.elem2.x = this.x;
			this.elem3.x = this.x;
			this.elem4.x = this.x - block;
			this.elem1.y = this.y;
			this.elem2.y = this.y - block;
			this.elem3.y = this.y + block;
			this.elem4.y = this.y + block;
		}
		if (this.statement === 1) {
			this.elem1.x = this.x;
			this.elem2.x = this.x + block;
			this.elem3.x = this.x - block;
			this.elem4.x = this.x - block;
			this.elem1.y = this.y;
			this.elem2.y = this.y;
			this.elem3.y = this.y - block;
			this.elem4.y = this.y;
		}
		if (this.statement === 2) {
			this.elem1.x = this.x;
			this.elem2.x = this.x;
			this.elem3.x = this.x;
			this.elem4.x = this.x + block;
			this.elem1.y = this.y;
			this.elem2.y = this.y - block;
			this.elem3.y = this.y + block;
			this.elem4.y = this.y - block;
		}
		if (this.statement === 3) {
			this.elem1.x = this.x;
			this.elem2.x = this.x + block;
			this.elem3.x = this.x + block;
			this.elem4.x = this.x - block;
			this.elem1.y = this.y;
			this.elem2.y = this.y;
			this.elem3.y = this.y + block;
			this.elem4.y = this.y;
		}
	}

}

function TLFigure(color, x, y, statement)
{
	this.x = x;
	this.y = y;
	this.color = color;
	this.statement = statement;
	this.elem1 = new TSquare(this.color, this.x, this.y);
	this.elem2 = new TSquare(this.color, this.x, this.y);
	this.elem3 = new TSquare(this.color, this.x, this.y);
	this.elem4 = new TSquare(this.color, this.x, this.y);
	this.move = function() {
		if (this.statement === 0) {
			this.elem1.x = this.x;
			this.elem2.x = this.x;
			this.elem3.x = this.x;
			this.elem4.x = this.x + block;
			this.elem1.y = this.y;
			this.elem2.y = this.y - block;
			this.elem3.y = this.y + block;
			this.elem4.y = this.y + block;
		}
		if (this.statement === 1) {
			this.elem1.x = this.x;
			this.elem2.x = this.x - block;
			this.elem3.x = this.x - block;
			this.elem4.x = this.x + block;
			this.elem1.y = this.y;
			this.elem2.y = this.y;
			this.elem3.y = this.y + block;
			this.elem4.y = this.y;
		}
		if (this.statement === 2) {
			this.elem1.x = this.x;
			this.elem2.x = this.x;
			this.elem3.x = this.x;
			this.elem4.x = this.x - block;
			this.elem1.y = this.y;
			this.elem2.y = this.y - block;
			this.elem3.y = this.y + block;
			this.elem4.y = this.y - block;
		}
		if (this.statement === 3) {
			this.elem1.x = this.x;
			this.elem2.x = this.x - block;
			this.elem3.x = this.x + block;
			this.elem4.x = this.x + block;
			this.elem1.y = this.y;
			this.elem2.y = this.y;
			this.elem3.y = this.y - block;
			this.elem4.y = this.y;
		}
	}

}

function TZFigure(color, x, y, statement)
{
	this.x = x;
	this.y = y;
	this.color = color;
	this.statement = statement;
	this.elem1 = new TSquare(this.color, this.x, this.y);
	this.elem2 = new TSquare(this.color, this.x, this.y);
	this.elem3 = new TSquare(this.color, this.x, this.y);
	this.elem4 = new TSquare(this.color, this.x, this.y);
	this.move = function() {
		if (this.statement === 0) {
			this.elem1.x = this.x;
			this.elem2.x = this.x;
			this.elem3.x = this.x - block;
			this.elem4.x = this.x + block;
			this.elem1.y = this.y;
			this.elem2.y = this.y + block;
			this.elem3.y = this.y;
			this.elem4.y = this.y + block;
		}
		if (this.statement === 1) {
			this.elem1.x = this.x;
			this.elem2.x = this.x;
			this.elem3.x = this.x - block;
			this.elem4.x = this.x - block;
			this.elem1.y = this.y;
			this.elem2.y = this.y - block;
			this.elem3.y = this.y + block;
			this.elem4.y = this.y;
		}
		if (this.statement === 2) {
			this.elem1.x = this.x;
			this.elem2.x = this.x;
			this.elem3.x = this.x + block;
			this.elem4.x = this.x - block;
			this.elem1.y = this.y;
			this.elem2.y = this.y - block;
			this.elem3.y = this.y;
			this.elem4.y = this.y - block;
		}
		if (this.statement === 3) {
			this.elem1.x = this.x;
			this.elem2.x = this.x;
			this.elem3.x = this.x + block;
			this.elem4.x = this.x + block;
			this.elem1.y = this.y;
			this.elem2.y = this.y + block;
			this.elem3.y = this.y - block;
			this.elem4.y = this.y;
		}
	}

}

function TSFigure(color, x, y, statement)
{
	this.x = x;
	this.y = y;
	this.color = color;
	this.statement = statement;
	this.elem1 = new TSquare(this.color, this.x, this.y);
	this.elem2 = new TSquare(this.color, this.x, this.y);
	this.elem3 = new TSquare(this.color, this.x, this.y);
	this.elem4 = new TSquare(this.color, this.x, this.y);
	this.move = function() {
		if (this.statement === 0) {
			this.elem1.x = this.x;
			this.elem2.x = this.x;
			this.elem3.x = this.x - block;
			this.elem4.x = this.x + block;
			this.elem1.y = this.y;
			this.elem2.y = this.y + block;
			this.elem3.y = this.y + block;
			this.elem4.y = this.y;
		}
		if (this.statement === 1) {
			this.elem1.x = this.x;
			this.elem2.x = this.x;
			this.elem3.x = this.x - block;
			this.elem4.x = this.x - block;
			this.elem1.y = this.y;
			this.elem2.y = this.y + block;
			this.elem3.y = this.y - block;
			this.elem4.y = this.y;
		}
		if (this.statement === 2) {
			this.elem1.x = this.x;
			this.elem2.x = this.x;
			this.elem3.x = this.x + block;
			this.elem4.x = this.x - block;
			this.elem1.y = this.y;
			this.elem2.y = this.y - block;
			this.elem3.y = this.y - block;
			this.elem4.y = this.y;
		}
		if (this.statement === 3) {
			this.elem1.x = this.x;
			this.elem2.x = this.x;
			this.elem3.x = this.x + block;
			this.elem4.x = this.x + block;
			this.elem1.y = this.y;
			this.elem2.y = this.y - block;
			this.elem3.y = this.y + block;
			this.elem4.y = this.y;
		}
	}

}

var fgr = new TFigure("white", 0, 0);

TOFigure.prototype = fgr;
TIFigure.prototype = fgr;
TTFigure.prototype = fgr;
TJFigure.prototype = fgr;
TLFigure.prototype = fgr;
TZFigure.prototype = fgr;
TSFigure.prototype = fgr;


function getRandomInt(min, max)
{
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function control(e){
	e = e ||event;
	if (start) {
		if (!pause) {
			if (e.keyCode === 39) {
				if (!curfigure.checkMove(1, 0)) {
					return;
				}
				else {
					curfigure.x += 32;
					curfigure.move();
					draw();
				}

			}

			if (e.keyCode === 37) {
				if (!curfigure.checkMove(-1, 0)) {
					return;
				}
				else {
					curfigure.x -= 32;
					curfigure.move();
					draw();
				}

			}

			if (e.keyCode === 40) {
				if (!curfigure.checkMove(0, 1)) {
					return;
				}
				else {
					curfigure.y += 32;
					curfigure.move();
					draw();
				}

			}
			if (e.keyCode === 38) {
				curfigure.rotate();
				curfigure.move();
				if (!curfigure.checkMove(0, 0)) {
					if (curfigure.statement != 0) {
						curfigure.statement--;
						curfigure.move();
					}
					else {
						curfigure.statement = 3;
						curfigure.move();
					}
				}
				draw();
			}
		}
		if (e.keyCode === 32) {
			if (!pause) {
				pause = true;
			}
			else pause = false;
			draw();
		}
	}

}


function init()
{
	block = 32;
	bheight=16;
	bwidth=9;
	start = false;
	stop = false;
	deleteflag = false;
	linecounter = 0;
	pause = false;
	speed = 0;
	field = [];
	xsd = 0;
	ysd = 0;
	score = 0;
	s = 2;
	count = 0;
	for(var i = 0; i < bheight+2; i++){
		field[i] = [];
		for(var j = 0; j < bwidth+2; j++){
			field[i][j] = new TSquare("white", -32+xsd, -32+ysd);
			field[i][j].full = false;
			if (i === 0 || i === bheight+1){
				field[i][j].full = true;
			}
			if (j === 0 || j === bwidth+1){
				field[i][j].full = true;
			}
			xsd += block;
		}
		xsd = 0;
		ysd+=block;
	}
	figures = [TOFigure, TIFigure, TTFigure, TJFigure, TLFigure, TZFigure, TSFigure];
	colors = ["#FF6347", "#3CB371", "#90EE90", '#6495ED', '#FF7F50', '#FFA54F', '#FFD700'];
	gamefield = document.getElementById("gamefield");
	document.onkeydown = control;
	ctx = gamefield.getContext("2d");
	ctx.fillStyle = '#fff';
	ctx.strokeRect(bwidth*block, 0, 170, 50);
	ctx.strokeRect(bwidth*block, 50, 170, 170);
	ctx.strokeRect(bwidth*block, 170+50+10, 170, 50);
	ctx.strokeRect(bwidth*block, 170+50+10+50, 170, 50);
	ctx.fillStyle = '#000';
	ctx.font = '30px MagistralC';
	ctx.fillText("Next Figure:", bwidth*block+10, 40);
	ctx.font = '40px MagistralC';
	ctx.fillText("Score:", bwidth*block+20, 40+170+60);
	ctx.fillText(score, bwidth*block+20, 40+170+60+50);
	//getRandomInt(0, figures.length - 10)
	nextfigure = new figures[getRandomInt(0, figures.length - 1)](colors[getRandomInt(0, colors.length - 1)], (Math.round(bwidth/2) - 1)*block, 0, getRandomInt(0, 3));
	createFigure();
	curfigure.move();
	draw();
	gamefield.onclick = onClick;
	z = setInterval(update, 600);
}

function onClick(){
	if (stop && !start){
		stop = false;
		start = true;
		clearField();
		createFigure();
		score = 0;
		curfigure.y -= block;
	}
	if(!start){
		start = true;
	}
}

function clearField() {
	for (var i = 1; i <= bheight; i++) {
		for (var j = 1; j <= bwidth; j++) {
			field[i][j].full = false;
		}
	}
}
//getRandomInt(0, figures.length - 1)
function createFigure(){
	nextfigure.elem1.width = 32;
	nextfigure.elem2.width = 32;
	nextfigure.elem3.width = 32;
	nextfigure.elem4.width = 32;

	nextfigure.elem1.height = 32;
	nextfigure.elem2.height = 32;
	nextfigure.elem3.height = 32;
	nextfigure.elem4.height = 32;

	nextfigure.x = (Math.round(bwidth/2) - 1)*block;
	nextfigure.y = 0;
	curfigure = nextfigure;
	nextfigure = new figures[getRandomInt(0, figures.length - 1)](colors[getRandomInt(0, colors.length - 1)], (Math.round(bwidth/2) - 1)*block, 0, getRandomInt(0, 3));
	curfigure.move();
	checkTop();
	while (!curfigure.checkMove(0, 0)){
		curfigure.y += block;
		curfigure.move();
	}
}

function stopFigure() {
	count++;
	for (var i = 1; i <= bheight; i++) {
		for (var j = 1; j <= bwidth; j++) {
			if ((curfigure.elem1.x === field[i][j].x) && (curfigure.elem1.y === field[i][j].y)) {
				field[i][j].full = true;
				field[i][j].color = curfigure.elem1.color;
			}
			if ((curfigure.elem2.x === field[i][j].x) && (curfigure.elem2.y === field[i][j].y)) {
				field[i][j].full = true;
				field[i][j].color = curfigure.elem2.color;
			}
			if ((curfigure.elem3.x === field[i][j].x) && (curfigure.elem3.y === field[i][j].y)) {
				field[i][j].full = true;
				field[i][j].color = curfigure.elem3.color;
			}
			if ((curfigure.elem4.x === field[i][j].x) && (curfigure.elem4.y === field[i][j].y)) {
				field[i][j].full = true;
				field[i][j].color = curfigure.elem4.color;
			}
		}
	}
}


function deleteLine(x){
	for (var j = 1; j<=bwidth; j++){
		field[x][j].full = false;
	}
	for (var i = x; i>=1; i--){
		for (var j = 1; j<=bwidth; j++){
			if (field[i][j].full){
				field[i][j].full = false;
				field[i+1][j].full = true;
				field[i+1][j].color = field[i][j].color;
			}
		}
	}
}

function checkTop(){
	if (!curfigure.checkMove(0, 0) && !curfigure.checkMove(0, 1)  && !curfigure.checkMove(0, 2)){
			draw();
			stop = true;
			start = false;
	}
}

function globalCheck() {
	scorelines = 0;
	for (var i = 1; i <= bheight; i++) {
		deleteflag = true;
		for (var j = 1; j <= bwidth; j++) {
			if (!field[i][j].full) {
				deleteflag = false;
			}
		}
		if (deleteflag){
			deleteLine(i);
			scorelines++;
			if (scorelines == 1){
				score += 100;
			}
			if (scorelines == 2){
				score += 200;
			}
			if (scorelines == 3){
				score += 400;
			}
			if (scorelines == 4){
				score += 800;
			}
		}
	}
}

function update() {
	if (start && !pause) {
		if (curfigure.checkMove(0, 1)) {
			curfigure.y += block;
		}
		else {
			stopFigure();
			createFigure();
			draw();
		}
		curfigure.move();
		globalCheck();
	}
	draw();
}

function draw() {
	ctx.globalAlpha = 1.0;
	ctx.fillStyle = "#fff";
	ctx.fillRect(0, 0, bwidth*block, bheight*block);
	ctx.strokeRect(0, 0, bwidth*block, bheight*block);
	ctx.fillRect(bwidth*block+2, 170+50+10+50+2, 170-4, 50-4);
	ctx.fillStyle = "#000";
	ctx.fillText(score, bwidth*block+20, 40+170+60+50);
	ctx.fillStyle = "#fff";
	ctx.fillRect(bwidth*block+2, 50+2, 170-4, 170-4);
	nextfigure.x = bwidth*block+60;
	nextfigure.y = 130;
	block = 24;

	nextfigure.elem1.width = 24;
	nextfigure.elem2.width = 24;
	nextfigure.elem3.width = 24;
	nextfigure.elem4.width = 24;

	nextfigure.elem1.height = 24;
	nextfigure.elem2.height = 24;
	nextfigure.elem3.height = 24;
	nextfigure.elem4.height = 24;

	nextfigure.move();
	nextfigure.draw();
	block=32;
	if (!start && !stop){
		ctx.globalAlpha = 0.5;
		ctx.fillStyle = "#ccc";
		ctx.fillRect(0, 0, bwidth*block, bheight*block);
		ctx.fillStyle = "#000";
		ctx.globalAlpha = 0.7;
		ctx.font = '70px MagistralC';
		ctx.fillText("TETRIS", 25, Math.round(bheight/2)*block-30);
		ctx.font = '40px MagistralC';
		ctx.fillText("Click to Play", 40, Math.round(bheight/2)*block+40);
		ctx.globalAlpha = 1;
	}
	for (var i = 1; i <= bheight; i++) {
		for (var j = 1; j <= bwidth; j++) {
			field[i][j].draw();
		}
	}
	if (stop){
		ctx.globalAlpha = 0.5;
		ctx.fillStyle = "#ccc";
		ctx.fillRect(0, 0, bwidth*block, bheight*block);
		ctx.fillStyle = "#000";
		ctx.globalAlpha = 0.7;
		ctx.font = '70px MagistralC';
		ctx.fillText("TESTRIS", 25, Math.round(bheight/2)*block-30);
		ctx.font = '50px MagistralC';
		ctx.fillText("Game Over", 22, Math.round(bheight/2)*block+20);
		ctx.font = '30px MagistralC';
		ctx.fillText("Click to Play Again", 25, Math.round(bheight/2)*block+60);
		ctx.font = '40px MagistralC';
	}
	curfigure.draw();
	if (start && pause){
		ctx.globalAlpha = 0.5;
		ctx.fillStyle = "#ccc";
		ctx.fillRect(0, 0, bwidth*block, bheight*block);
		ctx.font = '60px MagistralC';
		ctx.fillStyle = "#000";
		ctx.globalAlpha = 0.6;
		ctx.fillText("PAUSE", 47, Math.round(bheight/2)*block);
		ctx.font = '40px MagistralC';
		ctx.fillText("Press SPACE", 25, Math.round(bheight/2)*block+40);
	}
}
init();
