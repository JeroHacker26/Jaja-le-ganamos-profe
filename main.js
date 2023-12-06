canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

random_number = Math.floor(Math.random() * 4); 
console.log(random_number); 
rover_width = 100; 
rover_height = 90;



background_image = "mars.jpg";

rover_image = "rover.png";

rover_x = 10;
rover_y = 10;

function add() {
background_imgTag = new Image();
background_imgTag.onload = uploadBackground;
background_imgTag.src = remover_image;

remover_imgTag = new Image();
remover_imgTag.unload = uploadrover
remover_imgTag.src = remover_image;
}

function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.height);
}
function uploadrover() {
    ctx.drawImage(remover_imgTag, remover_x, rover_y, rover_width, rover_height);
}

window.addEventListener(                            );
function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
    if(keyPressed == '38')
    {
        up();
        console.log("arriba");
    }
    if(keyPressed == '40')
    {
        down();
        console.log("abajo");
    }
    if(keyPressed == '37')
    {
        left();
        console.log("izquierda");
    }
    if(keyPressed == '39')
    {
        right();
        console.log("derecha");
    }