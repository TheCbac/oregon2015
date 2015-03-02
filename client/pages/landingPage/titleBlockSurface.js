
var Surface = require('famous/core/Surface');
var StateModifier   = require('famous/modifiers/StateModifier');
var Transform = require('famous/core/Transform');
var ImageSurface = require('famous/surfaces/ImageSurface');
var ContainerSurface = require('famous/surfaces/ContainerSurface');

titleBlockSurface =  function() {
// block for text over image

    
    var nameTextBlock = new Surface({
    	content:"Oregon <p>2015</p>",
    	size: [undefined, 200],
            properties: {
                //backgroundColor: "black",
                fontFamily:"GothamHTF",
                color: "black",
                lineHeight: '50px',
                textAlign: 'center',
                fontSize: '4em',
            }
    });

    var nameTextBlockMod = new StateModifier({

        //transform: Transform.translate(0, 0, 1),
        origin: [0.5, 0.5],
        align: [0.5, 0.6],

    });


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
        align: [0.5, 0.95],

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
        align: [0.95, 0.05],});

    frontierArrowMod = new StateModifier({
        transform: Transform.translate(0, 0, 1),
        origin: [0.5, 0.5],
        align: [0.05, 0.05],});

    var frontierMainLogo = new ImageSurface({
        content:"/pictures/frontier.png",
        size: [true, 75],
        origin:[0.5,0.5],
        align: [0.5,0.5]
    });




    var container1 = new ContainerSurface({
        //size: [undefined, getBlockHeight()-100]
        size: [undefined, getBlockHeight()]
    });


    var imageBlock = new ImageSurface({
        content:"/pictures/forest-landscape.jpeg",
        size: [undefined ,true],
        
        
    });

    var imageBlockMod = new StateModifier({
        transform: Transform.translate(0, 0, -1),
         // origin: [0.5, 0.5],
      //    align: [0, 0.5],
        });

    var oregonTextImage = new ImageSurface({
        content:"/pictures/oregon2015mockup.png"
    });

    var oregonTextImageMod = new StateModifier({
        size: [150, true],
        tranform: Transform.translate(0,0,1),
        origin: [0.5, 0.5],
        align: [0.5, 0.5]
    });

    container1.add(hamburgerMod).add(frontierHamburger);
    container1.add(frontierArrowMod).add(frontierArrowLogo);
    container1.add(pullDownBlockStateMod).add(pullDownImageBlock);
    container1.add(textBlockStateMod).add(nameImageBlock);
    container1.add(imageBlockMod).add(imageBlock);
    container1.add(oregonTextImageMod).add(oregonTextImage);
    // container1.add(nameTextBlockMod).add(nameTextBlock);


    return container1;
};