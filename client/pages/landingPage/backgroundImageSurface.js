
var ImageSurface 		= require('famous/surfaces/ImageSurface');
var Transform 			= require('famous/core/Transform');
var ContainerSurface 	= require('famous/surfaces/ContainerSurface');
var StateModifier   	= require('famous/modifiers/StateModifier');


backgroundImageBlock = function() {
    
	var imageBlockContainer = new ContainerSurface({
			size: [undefined, undefined]
		});

	/* Background image */
	var imageBlock = new ImageSurface({
		content:"/pictures/forest-landscape.jpeg",
		size: [undefined ,undefined],
		origin: [0.5, 0.5],
	    align: [0.5, 0.5],
	    //transform: Transform.translate(0, 0, 2)
	});

	var imageBlockMod = new StateModifier({
		transform: Transform.translate(0, -100, -1),
        });

	var secondImageBlock = new ImageSurface({
		content:"/pictures/mount-hood.jpg",
		size: [undefined ,true],
		origin: [0.5, 0.5],
	    align: [0.5, 0.5],
	    //transform: Transform.translate(0, 0, -1)
	});

	var secondImageBlockMod = new StateModifier({
		transform: Transform.translate(0, 0, -2),
        });


	//imageBlockContainer.add(secondImageBlockMod).add(secondImageBlock);
	imageBlockContainer.add(imageBlockMod).add(imageBlock);


	return imageBlockContainer;

	// var create = function () {
	// 	return imageBlockContainer;
	// };


};