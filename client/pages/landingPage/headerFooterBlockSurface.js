var ImageSurface 		= require('famous/surfaces/ImageSurface');
var ContainerSurface 	= require('famous/surfaces/ContainerSurface');
var Surface 			= require('famous/core/Surface');
var StateModifier   	= require('famous/modifiers/StateModifier');
var Transform 			= require('famous/core/Transform');

/* Block for the Header */
headerBlockSurface = function() {

	var headerBlockContainer = new ContainerSurface({
		size: [undefined, 100]
	}
	);

	var headerBlock = new Surface({
		size:[undefined, undefined],
		//content: "The Frontier",
		properties: {
			backgroundColor: 'gray',
			lineHeight: "100px",
			textAlign: "center",
			
		}
	});

	var headerBlockMod = new StateModifier({
		opacity : 0.0
	});

	var frontierArrowLogo = new ImageSurface({
		content:"/pictures/frontier-arrows.png",
		size: [true, 45],
	});

	var frontierHamburger = new ImageSurface({
		content:"/pictures/hamburger.png",
		size: [true, 30],
	});

	hamburgerMod = new StateModifier({
		transform: Transform.translate(0, 0, 1),
        origin: [0.5, 0.5],
        align: [0.95, 0.5],});

	frontierArrowMod = new StateModifier({
		transform: Transform.translate(0, 0, 1),
        origin: [0.5, 0.5],
        align: [0.05, 0.5],});

	var frontierMainLogo = new ImageSurface({
		content:"/pictures/frontier.png",
		size: [true, 75],
		origin:[0.5,0.5],
		align: [0.5,0.5]
	});


	headerBlockContainer.add(headerBlockMod).add(headerBlock);
	//headerBlockContainer.add(frontierMainLogo);

	headerBlockContainer.add(hamburgerMod).add(frontierHamburger);
	headerBlockContainer.add(frontierArrowMod).add(frontierArrowLogo);

	return headerBlockContainer;
};



/* Block for the footer */
footerBlockSurface = function() {
	var footerBlock = new Surface({
		content: "FooterBlock ",
	        size: [undefined, window.innerHeight - getBlockHeight()/1.5],
	        properties: {
	            backgroundColor: "gray",
	            color: "#404040",
	            // lineHeight: '200px',
	            textAlign: 'center'
	        }
	});

	return footerBlock;
};