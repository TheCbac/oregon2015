
var Surface 			= require('famous/core/Surface');
var ImageSurface 		= require('famous/surfaces/ImageSurface');
var ContainerSurface 	= require('famous/surfaces/ContainerSurface');
var StateModifier   	= require('famous/modifiers/StateModifier');
var Transform 			= require('famous/core/Transform');

// third block - hosts
hostBlockSurface = function() {

	var hostsBlockContainer = new ContainerSurface({
		size: [undefined, getBlockHeight()]
	});

	/* Create a surface for Craig */
	var craigPictureSurface = new ImageSurface({
		content : '/pictures/CraigCheney.jpg',
		size: [true,300],

	});

	var craigStateModifier = new StateModifier({
		transform: Transform.translate(0, 0, 1),
        origin: [0.5, 0.5],
        align: [0.15, 0.5],});


	/* Create a surface for Kale */
	var kalePictureSurface = new ImageSurface({
		content : '/pictures/KaleRogers.jpg',
		size: [true,300],

	});

	var kaleStateModifier = new StateModifier({
		transform: Transform.translate(0, 0, 1),
        origin: [0.5, 0.5],
        align: [0.4, 0.5],});

	/* create the text block */
	var hostsBlockTitleText = new Surface({
		content: "<p>Meet the Hosts</p>",
	        size: [undefined, undefined],
	        properties: {
	            backgroundColor: "gray",
	            color: "black",
	            lineHeight: '40px',
	            textAlign: 'center',
	            fontSize: '4em',
	            opacity: '0.5'
	        }
	});

	var hostBlockDescriptionText = new Surface({
		content: "This is the text where we call kale a bitch <p> Cuz he is a bitch </p>",
	        size: [true, true],
	        properties: {
	            backgroundColor: "gray",
	            color: "black",
	            lineHeight: '40px',
	            textAlign: 'left',
	            fontSize: '1em',
	        }
	});

	var hostBlockDescriptionMod = new StateModifier({
		origin: [0.5, 0.5],
        align: [0.75, 0.5],
    });
	

	hostsBlockContainer.add(hostsBlockTitleText);
	hostsBlockContainer.add(hostBlockDescriptionMod).add(hostBlockDescriptionText);
	hostsBlockContainer.add(craigStateModifier).add(craigPictureSurface);
	hostsBlockContainer.add(kaleStateModifier).add(kalePictureSurface);
	
	return hostsBlockContainer;
};