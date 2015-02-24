
var ImageSurface 		= require('famous/surfaces/ImageSurface');

backgroundImageBlock = function() {
    
	/* Background image */
	var imageBlock = new ImageSurface({
		content:"/pictures/mount-hood.jpg",
		size: [undefined ,true],
		origin: [0.5, 0.5],
	    align: [0.5, 0.5],
	});

	return imageBlock;

};