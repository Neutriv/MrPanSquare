lvl = 1;
life = 3; //zainicjowanie początkowej liczby żyć
(function () {
    var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
    window.requestAnimationFrame = requestAnimationFrame;
})();

var canvas = document.getElementById("canvas"),
    ctx = canvas.getContext("2d"),
    width = 1350,
    height = 550,
    player = { //własciwości gracza
        x: 100,
        y: 300,
        width: 125,
        height: 71,
        speed: 3,
        velX: 0,
        velY: 0,
        jumping: false,
        grounded: false
    },
    keys = [],
    friction = 0.8, //właściwości fizyki
    gravity = 0.4;

var boxes = []; //tablica bloczków

var drawScene1 = function() { //funkcja rysująca level 1
boxes.push({ //wymiary bloczków
	x: -20,
	y: -100,
	width: 50,
    height: 800
});
boxes.push({
    x: 0,
    y: height - 30,
    width: width,
    height: 50
});
boxes.push({
    x: 750,
    y: 450,
    width: 125,
    height: height
});
boxes.push({
    x: 875,
    y: 375,
    width: 125,
    height: height
});
boxes.push({
    x: 1000,
    y: 300,
    width: 125,
    height: height
});
boxes.push({
    x: 1125,
    y: 225,
    width: 225,
    height: height
});
ctx.fillStyle = "#ff0066"; //kolor bloczków level 1

document.getElementById("napis").innerHTML = "Arrow keys to move and space to jump."; //napisy level 1
document.getElementById("napis_pl").innerHTML = "* Użyj strzałek by się poruszać i spacji by skakać. *";
};

var drawScene2 = function() { //funkcja rysująca level 2
boxes.push({
    x: 0,
    y: 225,
    width: 600,
    height: 800
});

ctx.fillStyle = "#00e6b8"; //kolor bloczków level 2

document.getElementById("napis").innerHTML = "It isn't mario.Go left!"; //napisy level 2
document.getElementById("napis");
document.getElementById("napis");
document.getElementById("napis_pl").innerHTML = "* To nie Mario.Idź w lewo! *";
document.getElementById("napis_pl");
document.getElementById("napis_pl");


};

var drawScene3 = function(){ //funkcja rysująca level 3
boxes.push({
    x: 1200,
    y: 400,
    width: 150,
    height: height
});
boxes.push({
    x: 800,
    y: 300,
    width: 100,
    height: height
});
boxes.push({
    x: 400,
    y: 200,
    width: 100,
    height: height
});
boxes.push({
    x: 0,
    y: 100,
    width: 100,
    height: height
});
ctx.fillStyle = "#4dff4d"; //kolor bloczków level 3

document.getElementById("napis").innerHTML = "Jump dude, Jump!"; //napisy level 3
document.getElementById("napis");
document.getElementById("napis");
document.getElementById("napis_pl").innerHTML = "* Skacz kolego, Skacz! *";
document.getElementById("napis_pl");
document.getElementById("napis_pl");
}

var drawScene4 = function(){ //funkcja rysująca level 4
boxes.push({
    x: 1200,
    y: 100,
    width: 220,
    height: height
});
boxes.push({
    x: 755,
    y: 300,
    width: 50,
    height: height
});
boxes.push({
    x: -50,
    y: 500,
    width: 400,
    height: height
});
ctx.fillStyle = "#e600ac"; //kolor bloczków level 4

document.getElementById("napis").innerHTML = "You can do this.Just do it!"; //napisy level 4
document.getElementById("napis");
document.getElementById("napis");
document.getElementById("napis_pl").innerHTML = "* Uda Cię się.Poprostu to zrób! *";
document.getElementById("napis_pl");
document.getElementById("napis_pl");
}

canvas.width = width;
canvas.height = height;

function update() {
    // check keys
    if (keys[38] || keys[32] || keys[87]) { //sprawdzanie klawiszy
        // up arrow or space
        if (!player.jumping && player.grounded) {
            player.jumping = true;
            player.grounded = false;
            player.velY = -player.speed * 4;
        }
    }
    if (keys[39] || keys[68]) {
        // right arrow
        if (player.velX < player.speed*2) {
            player.velX++;
        }
    }
    if (keys[37] || keys[65]) {
        // left arrow
        if (player.velX > -player.speed*2) {
            player.velX--;
        }
    }

    player.velX *= friction;
    player.velY += gravity;

    ctx.clearRect(0, 0, width, height);
    
    ctx.beginPath();
    
    player.grounded = false; //system kolizji gracza z bloczkami
    for (var i = 0; i < boxes.length; i++) {
        ctx.rect(boxes[i].x, boxes[i].y, boxes[i].width, boxes[i].height);
        
        var dir = colCheck(player, boxes[i]);

        if (dir === "l" || dir === "r") {
            player.velX = 0;
            player.jumping = false;
        } else if (dir === "b") {
            player.grounded = true;
            player.jumping = false;
        } else if (dir === "t") {
            player.velY *= -1;
        }

    }
    
    if(player.grounded){
         player.velY = 0;
    }
    
    player.x += player.velX;
    player.y += player.velY;

	ctx.shadowColor = "black"; //rysowanie ,,buźki" gracza
	ctx.fill();
    var img = document.createElement("img");
    img.src = ("face.png");
    ctx.clearRect(0, 0, player.width, player.height);
    ctx.drawImage(img, player.x, player.y, player.width, player.height);


    requestAnimationFrame(update);
	// New lvl and player creator
	
	
	
		if(lvl===1) { //punkty respawnu gracza i przeładowanie leveli
	ctx.clearRect(0,0,2000,900);	
	width = 1350,
    height = 550,
    player = {
        x: 100,
        y: 400,
        width: 125,
        height: 71,
        speed: 3,
        velX: 0,
        velY: 0,
        jumping: false,
        grounded: false
    },
	drawScene1();
	lvl++;
	};
	
	if(player.y>600 && lvl===2) {
	width = 1350,
    height = 550,
    player = {
        x: 100,
        y: 400,
        width: 125,
        height: 71,
        speed: 3,
        velX: 0,
        velY: 0,
        jumping: false,
        grounded: false
    },
	life--;
	};
	
	if(player.x>1200 && lvl===2) {
	ctx.clearRect(0,0,2000,900);
	boxes[0].y=1000,
	boxes[1].y=1000,
	boxes[2].y=1000,
	boxes[3].y=1000,
	boxes[4].y=1000,
	boxes[5].y=1000,
	width = 1350,
    height = 550,
    player = {
        x: 50,
        y: 300,
        width: 125,
        height: 71,
        speed: 3,
        velX: 0,
        velY: 0,
        jumping: false,
        grounded: false
    },
	drawScene2();
	lvl++;
	};
	
	if(player.y>600 && lvl===3){
	width = 1350,
    height = 550,
    player = {
        x: 50,
        y: 300,
        width: 125,
        height: 71,
        speed: 3,
        velX: 0,
        velY: 0,
        jumping: false,
        grounded: false
    },
	life--;
	};
	
	if(player.x<50 && lvl===3){
		ctx.clearRect(0,0,2000,900);
	boxes[0].y=1000,
	boxes[1].y=1000,
	boxes[2].y=1000,
	boxes[3].y=1000,
	boxes[4].y=1000,
	boxes[5].y=1000,
	boxes[5].y=1000,
	boxes[6].y=1000,
	width = 1350,
    height = 550,
    player = {
        x: 1300,
        y: 300,
        width: 125,
        height: 71,
        speed: 3,
        velX: 0,
        velY: 0,
        jumping: false,
        grounded: false
    },
	drawScene3();
	lvl++;
	};
	
		if(player.y>600 && lvl===4){
	width = 1350,
    height = 550,
    player = {
        x: 1300,
        y: 300,
        width: 125,
        height: 71,
        speed: 3,
        velX: 0,
        velY: 0,
        jumping: false,
        grounded: false
    },
	life--;
	}
	
	if(player.x<50 && lvl===4){
	ctx.clearRect(0,0,2000,900);
	boxes[0].y=1000,
	boxes[1].y=1000,
	boxes[2].y=1000,
	boxes[3].y=1000,
	boxes[4].y=1000,
	boxes[5].y=1000,
	boxes[5].y=1000,
	boxes[6].y=1000,
	boxes[7].y=1000,
	boxes[8].y=1000,
	boxes[9].y=1000,
	boxes[10].y=1000,
	width = 1350,
    height = 550,
    player = {
        x: 1200,
        y: 0,
        width: 125,
        height: 71,
        speed: 3,
        velX: 0,
        velY: 0,
        jumping: false,
        grounded: false
    },
	drawScene4();
	lvl++;
	}

          if(player.x<300 && lvl===5){
        document.getElementById("napis").innerHTML = "Gratulacje!" //napisy końcowe
        document.getElementById("napis_pl").innerHTML = "Autorzy: Szymon Adamski, Marcin Brzeziński, Dominik Masoń";
        var flag = document.createElement("flag");
        flag.src = ("flag.png");
        ctx.drawImage(flag, 100, 500, 100, 100); //napisy końcowe
    }

		if(player.y>600 && lvl===5){
	width = 1350,
    height = 550,
    player = {
        x: 1200,
        y: 0,
        width: 125,
        height: 71,
        speed: 3,
        velX: 0,
        velY: 0,
        jumping: false,
        grounded: false
    },

	life--;
	}
    if(life===0) {          //gameover
        location.reload();
    }
    if(life===3) {      //rysowanie serduszek
        var img = document.createElement("img");
        img.src = ("hearts.png");
        ctx.drawImage(img, 1000, 30, 60, 50);
        ctx.drawImage(img, 1075, 30, 60, 50);
        ctx.drawImage(img, 1150, 30, 60, 50);
    }
    if(life===2) {
        var img = document.createElement("img");
        img.src = ("hearts.png");
        ctx.drawImage(img, 1000, 30, 60, 50);
        ctx.drawImage(img, 1075, 30, 60, 50);
        img.src = ("like.png");
        ctx.drawImage(img, 1150, 30, 60, 50);
    }
    if(life===1) {
        var img = document.createElement("img");
        img.src = ("hearts.png");
        ctx.drawImage(img, 1000, 30, 60, 50);
        img.src = ("like.png");
        ctx.drawImage(img, 1075, 30, 60, 50);
        ctx.drawImage(img, 1150, 30, 60, 50);
    }

}

function colCheck(shapeA, shapeB) { //sprawdzanie kolizji
    // get the vectors to check against
    var vX = (shapeA.x + (shapeA.width / 2)) - (shapeB.x + (shapeB.width / 2)),
        vY = (shapeA.y + (shapeA.height / 2)) - (shapeB.y + (shapeB.height / 2)),
        // add the half widths and half heights of the objects
        hWidths = (shapeA.width / 2) + (shapeB.width / 2),
        hHeights = (shapeA.height / 2) + (shapeB.height / 2),
        colDir = null;

    // if the x and y vector are less than the half width or half height, they we must be inside the object, causing a collision
    if (Math.abs(vX) < hWidths && Math.abs(vY) < hHeights) {
        // figures out on which side we are colliding (top, bottom, left, or right)
        var oX = hWidths - Math.abs(vX),
            oY = hHeights - Math.abs(vY);
        if (oX >= oY) {
            if (vY > 0) {
                colDir = "t";
                shapeA.y += oY;
            } else {
                colDir = "b";
                shapeA.y -= oY;
            }
        } else {
            if (vX > 0) {
                colDir = "l";
                shapeA.x += oX;
            } else {
                colDir = "r";
                shapeA.x -= oX;
            }
        }
    }
    return colDir;
}

document.body.addEventListener("keydown", function (e) {
    keys[e.keyCode] = true;
});

document.body.addEventListener("keyup", function (e) {
    keys[e.keyCode] = false;
});


window.addEventListener("load", function () {
    update();
});





//audio 


var i=1;
var x=document.getElementById("soundicon");

 function play() //w zaleznosci, czy klikniecie jest parzyste lub nieparzyste odpowiednio wlacza sie dzwiek i wkleja ikonke z dzwiekiem i wylacza i ikonka bez dzwieku
 {

var audio = document.getElementById("audio");

		 if(i%2==0) 
			{
			audio.play()
			var cl = x.firstChild.getAttribute('class');
				if(cl == "icon-volume-up")
				{ 
				x.firstChild.setAttribute('class','icon-volume-off');
				}
				else
				{
				x.firstChild.setAttribute('class','icon-volume-up');
				} 
			}
		else
			{
			audio.pause() 
			var cl = x.firstChild.getAttribute('class');
				if(cl == "icon-volume-up")
				{ 
				x.firstChild.setAttribute('class','icon-volume-off');
				}
				else
				{
				x.firstChild.setAttribute('class','icon-volume-up');
				} 
			}
	 i++;
 }
