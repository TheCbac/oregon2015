famous.polyfills;
famous.core.famous;

var mainContext = famous.core.Engine.createContext();
//var renderController = new famous.views.RenderController();
var layout = new famous.views.HeaderFooterLayout();
var Surface = require('famous/core/Surface');
var Scrollview = require('famous/views/Scrollview');
var ScrollSync = require('famous/inputs/ScrollSync');
var ImageSurface = require('famous/surfaces/ImageSurface');
var ContainerSurface = require('famous/surfaces/ContainerSurface');
var view = require('famous/core/View');
var StateModifier 	= require('famous/modifiers/StateModifier');
var Modifier = require('famous/core/Modifier');
var Transform = require('famous/core/Transform');

layout.header.add(new Surface({
	size:[undefined, 100],
	content: "header",
	properties: {
		backgroundColor: 'gray',
		lineHeight: "100px",
		textAlign: "center"
	}
}));

var scroll = new Scrollview();

var surfaces = [];

scroll.sequenceFrom(surfaces);


// block for text over image

var nameTextBlock = new Surface({
	content:"The Frontier <p>2015</p>",
	size: [undefined, 200],
        properties: {
            //backgroundColor: "black",
            
            color: "black",
            lineHeight: '50px',
            textAlign: 'center',
            fontSize: '4em',
        }
});
//nameTextBlock.pipe(scroll);
//surfaces.push(nameTextBlock);

var textBlockStateMod = new StateModifier({
    //transform: Transform.translate(0, 0, -1) 
    transform: Transform.translate(0, 0, 1),
    origin: [0.5, 0.5],
    align: [0.5, 0.5],
});

var imageBlockStateMod = new StateModifier({
    //transform: Transform.translate(0, 0, -1) 
    transform: Transform.translate(0, 0, 2)
});

var view1 = new view();
view1.add(nameBlock);
//surface.push(view1);  

// First block
var nameBlock = new ImageSurface({
	content:"http://www.amazingplacesonearth.com/wp-content/uploads/2012/08/mount-hood.jpg",
	size: [undefined,undefined],
	origin: [0.5, 0.5],
    align: [0.5, 0.5],
});

//nameBlock.setContent("http://www.amazingplacesonearth.com/wp-content/uploads/2012/08/mount-hood.jpg");
// nameBlock.pipe(scroll);
// surfaces.push(nameBlock);

var container1 = new ContainerSurface();
container1.add(textBlockStateMod).add(nameTextBlock);
container1.add(nameBlock);

container1.pipe(scroll);
surfaces.push(container1);

// Second block
var dateBlock = new Surface({
	content: "<p>July 2015</p> ",
        size: [undefined, 500],
        properties: {
            backgroundColor: "Black",
            color: "white",
            lineHeight: '50px',
            textAlign: 'center',
            fontSize: '4em',
            textShadow: ["2px", "2px","#ff0000"],
        }
});
dateBlock.pipe(scroll);
surfaces.push(dateBlock);


// third block - hosts
var hostsBlock = new Surface({
	content: "<p>Kale & Craig</p>",
        size: [undefined, 500],
        properties: {
            backgroundColor: "gray",
            color: "black",
            lineHeight: '40px',
            textAlign: 'center',
            fontSize: '4em',
        }
});
hostsBlock.pipe(scroll);
surfaces.push(hostsBlock);

// fourth block - group description
var groupBlock = new Surface({
	content: "<p>Our Group</p>",
        size: [undefined, 500],
        properties: {
            backgroundColor: "black",
            color: "white",
             lineHeight: '40px',
            textAlign: 'center',
            fontSize: '4em',
        }
});
groupBlock.pipe(scroll);
surfaces.push(groupBlock);


// fourth block - group description
var footerBlock = new Surface({
	content: "FooterBlock ",
        size: [undefined, 200],
        properties: {
            backgroundColor: "gray",
            color: "#404040",
            lineHeight: '200px',
            textAlign: 'center'
        }
});
footerBlock.pipe(scroll);
surfaces.push(footerBlock);


layout.content.add(scroll);

mainContext.add(layout);


