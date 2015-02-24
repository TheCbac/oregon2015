
var Surface = require('famous/core/Surface');

dateBlockSurface= function(){
    var dateBlock = new Surface({
    	content: "<p>July 2015</p> ",
            size: [undefined, getBlockHeight()],
            properties: {
                backgroundColor: "Black",
                color: "white",
                lineHeight: '50px',
                textAlign: 'center',
                fontSize: '4em',
                textShadow: ["2px", "2px","#ff0000"],
            }
    });

    return dateBlock;
};