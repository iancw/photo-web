
var currentImg=0;
var allImages=24;

var images=[];

$(window).load(loadImages);

function loadImages()
{
	for(i=0; i<allImages; i++)
	{
		var img=new Image();
		img.src='570/ianwill'+(i+1)+'.jpg';
		images[images.length] = img;
	}
	setTimeout(fadeOut, 5000);
}

function fadeOut(){
	$('#mainImage').fadeTo(1100, 0.0, fadeIn)
}

function fadeIn(){
	currentImg = (currentImg + 1) % images.length;
	var actImg = images[currentImg];
	$('#mainImage').css({'background-image':"url('" +actImg.src + "')"});
	$('#mainImage').attr({ width: actImg.width, height: actImg.height});
	$('#mainImage').fadeTo(800, 1.0, function(){ setTimeout(fadeOut, 5000); });
}
