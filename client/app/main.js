famous.polyfills;
famous.core.famous;

// Make sure DOM got a body ...

var mainContext = famous.core.Engine.createContext();
//var renderController = new famous.views.RenderController();
var layout = new famous.views.HeaderFooterLayout();
var Surface = require('famous/core/Surface');
var Scrollview = require('famous/views/Scrollview');
var ScrollSync = require('famous/inputs/ScrollSync');

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


var image = new Surface ({
	content:"Test",
	size: [undefined, 300],
	 properties: {
            backgroundColor: "blue",
            color: "#404040",
            lineHeight: '200px',
            textAlign: 'center'
        }
	});

// image.pipe(scroll);
// surface.push(image);

for(var i = 0; i < 8; i++) {
    var temp =new Surface({
        content: "panel " + (i + 1),
        size: [undefined, 400],
        properties: {
            backgroundColor: "hsl(" + (i * 360 / 8) + ", 100%, 50%)",
            color: "#404040",
            lineHeight: '200px',
            textAlign: 'center'
        }
    });

    temp.pipe(scroll);
    surfaces.push(temp);
}

layout.content.add(scroll);

layout.footer.add(new Surface({
    size: [undefined, 50],
    content: "Footer",
    properties: {
        backgroundColor: 'gray',
        lineHeight: "50px",
        textAlign: "center"
    }
}));

mainContext.add(layout);

    // var surfaces = [];
    // var counter = 0;

    // for (var i = 0; i < 10; i++) {
    //     surfaces.push(new famous.core.Surface({
    //          content: "Surface: " + (i + 1),
    //          size: [200, 200],
    //          properties: {
    //              backgroundColor: "hsl(" + (i * 360 / 10) + ", 100%, 50%)",
    //              lineHeight: "200px",
    //              textAlign: 'center'
    //          }
    //     }));
    // }

    // renderController.show(surfaces[0]);

    // famous.core.Engine.on("click", function() {
    //     var next = (counter++ + 1) % surfaces.length;
    //     this.show(surfaces[next]);
    // }.bind(renderController));

    // mainContext.add(new famous.core.Modifier({align: [0.5, 0.5], origin: [0.5, 0.5]})).add(renderController);


