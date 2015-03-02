famous.polyfills;
famous.core.famous;

/* Requires */
var mainContext = famous.core.Engine.createContext();
//var layout = new famous.views.HeaderFooterLayout();
var Scrollview = require('famous/views/Scrollview');
var EventHandler 		= require('famous/core/EventHandler');



//var aspectRatio = (window.innerWidth/window.innerHeight);

/* add event listener for window resize */
var addEvent = function(elem, type, eventHandle){
	if (elem === null || typeof(elem) == 'undefined') return;
	if ( elem.addEventListener ) {
		elem.addEventListener( type, eventHandle, false);
	} else if (elem.attachEvent) {
		elem.attachEvent( "on" + type, eventHandle);
	} else {
		elem["on"+type]=eventHandle;
	}
};


var getRatio = function(){
	aspectRatio = (window.innerWidth/window.innerHeight);
	console.log(aspectRatio);
};


addEvent(window, "resize", getRatio);

/* height for the vertical size of the blocks */
getBlockHeight = function() {
	var winHeight = window.innerHeight;
	//console.log(window.innerHeight);
	return winHeight;
};

getHeaderHeight = function() {
	return 100;
};




//var backgroundBlock = backgroundImageBlock.create();

// layout.content.add(backgroundBlock);
//layout.add(backgroundBlock);
//mainContext.add(backgroundBlock);


/* Header block */
//layout.header.add(headerBlockSurface());


/* Create the Scroll view */


var scroll = new Scrollview();
var surfaces = [];
scroll.sequenceFrom(surfaces);

/* No real need to have the header anymore */
// var headerBlock = headerBlockSurface();
// headerBlock.pipe(scroll);
// surfaces.push(headerBlock);

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



var eventHandler = new EventHandler();

hostBlock.on('mouseover', function(event){
	console.log("test");
	console.log(aspectRatio);
	eventHandler.emit('swapPictures');
});

eventHandler.on('swapPictures', function() {
	console.log("swap");
});




/* Create the main context */
//layout.content.add(scroll);
mainContext.add(scroll);
//mainContext.add(backgroundImageBlock());



