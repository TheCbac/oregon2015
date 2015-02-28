
var Surface = require('famous/core/Surface');
var StateModifier   = require('famous/modifiers/StateModifier');
var Transform = require('famous/core/Transform');
var ImageSurface = require('famous/surfaces/ImageSurface');
var ContainerSurface = require('famous/surfaces/ContainerSurface');

titleBlockSurface =  function() {
// block for text over image

    /*
    var nameTextBlock = new Surface({
    	content:"Oregon <p>2015</p>",
    	size: [undefined, 200],
            properties: {
                //backgroundColor: "black",
                
                color: "black",
                lineHeight: '50px',
                textAlign: 'center',
                fontSize: '4em',
            }
    });
*/

    nameImageBlock = new ImageSurface({
        content : '/pictures/frontier.png',
        size: [315,true],

    });


    pullDownImageBlock = new ImageSurface({
        content : '/pictures/pulldown.png',
        size: [50,true],

    });

    var pullDownBlockStateMod = new StateModifier({
        //transform: Transform.translate(0, 0, -1) 
        //transform: Transform.translate(0, 0, 2)
        transform: Transform.translate(0, 0, 1),
        origin: [0.5, 0.5],
        align: [0.5, 0.9],

    });


    var textBlockStateMod = new StateModifier({
        //transform: Transform.translate(0, 0, -1) 
        transform: Transform.translate(0, 0, 1),
        origin: [0.5, 0.5],
        align: [0.5, 0.4],
    });

    var imageBlockStateMod = new StateModifier({
        //transform: Transform.translate(0, 0, -1) 
        transform: Transform.translate(0, 0, 2)

    });




    // First block
    // var nameBlock = new ImageSurface({
    // 	content:"/pictures/mount-hood.jpg",
    // 	size: [undefined ,true],
    // 	origin: [0.5, 0.5],
    //     align: [0.5, 0.5],
    // });




    var container1 = new ContainerSurface({
        //size: [undefined, getBlockHeight()-100]
        size: [undefined, 500]
    });

    container1.add(pullDownBlockStateMod).add(pullDownImageBlock);
    container1.add(textBlockStateMod).add(nameImageBlock);
    //container1.add(nameBlock);


    return container1;
};