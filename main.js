var canvas = new fabric.Canvas('myCanvas');
rocket_y=450;
rocket_x=350;

block_image_width = 5;
block_image_height = 5;

function load_img(){
	new_image();
}

function new_image()
{
	fabric.Image.fromURL("rocket.png", function(Img) {
	rocket_obj = Img;
	rocket_obj.scaleToWidth(50);
	rocket_obj.scaleToHeight(50);
	rocket_obj.set({
	top:rocket_y,
	left:rocket_x
	});
	canvas.add(rocket_obj);
	});
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if((ball_x==350)&&(rocket_y<=50)){
		canvas.remove(rocket_obj);
		console.log("You have Land on the Moon!!!");
		document.getElementById("hd3").innerHTML="You have Land on the Moon!!!";
	    document.getElementById("myCanvas").style.borderColor="red";
	}
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		if(rocket_y >=5)
		{
			
			rocket_y = rocket_y - block_image_height;
			console.log("block image height = " + block_image_height);
			console.log("When Up arrow key is pressed, X =  " + rocket_x + " , Y = "+rocket_y);
			canvas.remove(rocket_obj);
			new_image();
		}
	}

	function down()
	{
		if(rocket_y <=450)
		{
			
			rocket_y = rocket_y + block_image_height;
			console.log("block image height = " + block_image_height);
			console.log("When Down arrow key is pressed, X =  " + rocket_x + " , Y = "+rocket_y);
			canvas.remove(rocket_obj);
			new_image();
		}
	}

	function left()
	{
		if(rocket_x >5)
		{
			rocket_x = rocket_x - block_image_width;
			console.log("block image width = " + block_image_width);
			console.log("When Left arrow key is pressed, X =  " + rocket_x + " , Y = "+rocket_y);
			canvas.remove(rocket_obj);
			new_image();
		}
	}

	function right()
	{
		if(rocket_x <=1050)
		{
			rocket_x = rocket_x + block_image_width;
			console.log("block image width = " + block_image_width);
			console.log("When Right arrow key is pressed, X =  " + rocket_x + " , Y = "+rocket_y);
			canvas.remove(rocket_obj);
			new_image();
		}
	}
	
}

