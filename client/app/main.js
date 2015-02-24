famous.polyfills;
famous.core.famous;

/* Requires */
var mainContext = famous.core.Engine.createContext();
var layout = new famous.views.HeaderFooterLayout();
var Scrollview = require('famous/views/Scrollview');



/* height for the vertical size of the blocks */
getBlockHeight = function() {
	var winHeight = window.innerHeight;
	//console.log(window.innerHeight);
	return winHeight*0.9;
};



layout.content.add(backgroundImageBlock());

/* Header block */
//layout.header.add(headerBlockSurface());


/* Create the Scroll view */
var scroll = new Scrollview();
var surfaces = [];
scroll.sequenceFrom(surfaces);


var headerBlock = headerBlockSurface();
headerBlock.pipe(scroll);
surfaces.push(headerBlock);

/* Add the title block to the scrollview */
var titleBlock = titleBlockSurface();
titleBlock.pipe(scroll);
surfaces.push(titleBlock);

/* Add the date Block to the scrollview */
var dateBlock = dateBlockSurface();
dateBlock.pipe(scroll);
surfaces.push(dateBlock);


/* Add the Host Block to the scrollview */
var hostBlock = hostBlockSurface();
hostBlock.pipe(scroll);
surfaces.push(hostBlock);


/* Add the group Block to the scrollview */
var groupBlock = groupBlockSurface();
groupBlock.pipe(scroll);
surfaces.push(groupBlock);

/* Add the footer Block to the scrollview */
footerBlock = footerBlockSurface();
footerBlock.pipe(scroll);
surfaces.push(footerBlock);

/* Create the main context */
layout.content.add(scroll);
mainContext.add(layout);




