
var currentImg=0;
var allImages=24;

var images=[];

$(window).load(loadImages);

function loadImages()
{
	for(i=0; i<allImages; i++)
	{
		var img=new Image();
		img.src='1024/ianwill'+(i+1)+'.jpg';
		images[images.length] = img;
	}
}

function fadeOut(){
	$('#mainImage').fadeTo(1500, 0.0, fadeIn)
}

function fadeIn(){
	currentImg = (currentImg + 1) % images.length;
	var actImg = images[currentImg];
	$('#mainImage').css({'background-image':"url('" +actImg.src + "')"});
	$('#mainImage').attr({ width: actImg.width, height: actImg.height});
	$('#mainImage').fadeTo(1500, 1.0, function(){ setTimeout(fadeOut, 5000); });
}
