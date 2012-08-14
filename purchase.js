//Draws to a canvas (id sampleCanvas) in purchase.html
//Uses the value of frameCheck checkbox and radio buttons in form #sizeChoice
//To draw a sample of what the image will look like framed
//Uses imagse from the 256 subfolder, which are guaranteed to be less 
//than 256 wide or 140 high

$(window).load(init);

var image = new Image();

function init()
{
  $(":checkbox, :radio").click(draw);
  draw();
}

function sampleWithFrame(){
	var ctx = $('#sampCanv')[0].getContext('2d');
	var ar = $('#sizeChoice').serializeArray();
	var extra = 0;
	var bottom = 0;

	//256 pixels...420 pixels = 20"
	if(ar.length == 2 && ar[1].value == "Frame")
	{
		extra = image.width * (3.25/20.0);
		bottom = image.height * (4.5/16.0);
	}
	var canvWidth = (extra*2 + image.width);
	var canvHeight = (extra + bottom +image.height);
	$('#sampCanv').attr({ width: canvWidth, height: canvHeight});
	ctx.fillStyle="#FFFFFF";
	ctx.strokeStyle="#000000";
	ctx.lineWidth=8;
	ctx.fillRect(0, 0, canvWidth, canvHeight);
	ctx.strokeRect(0, 0, canvWidth, canvHeight);
	ctx.strokeStyle="#CCCCCC";
	ctx.lineWidth=2;
	//Two pixels on either side of the image...
	ctx.strokeRect(extra-1, extra-1, image.width+2, image.height+2);
	ctx.drawImage(image, extra,extra);
	$('#widthSpan').html((canvWidth * 20.0/420.0)+'"');
	$('#heightSpan').html((canvHeight * 16.0/280.0)+'"');
}

function draw(){
	var ctx = $('#sampCanv')[0].getContext('2d');

	//Matt at ... 3 1/4 l,r,t and 4" bottom for 16x20...which maps to 210 x 140...
	//3.25 is x percent of 20... (x * 20 = 3.25, x = 3.25 / 20)

	image.onload = sampleWithFrame;
	var ar = $('#sizeChoice').serializeArray();
	var direct="512";
	if(ar[0].value == "8x10")
	{
		direct="256";
	}
	image.src = direct+'/ianwill24.jpg';
	//Image already loaded, callback won't be hit, so call manually...
	sampleWithFrame();
}