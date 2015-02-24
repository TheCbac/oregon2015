var Surface = require('famous/core/Surface');

// fourth block - group description
groupBlockSurface = function(){
	var groupBlock = new Surface({
	content: "<p>Our Group</p>",
        size: [undefined, getBlockHeight()],
        properties: {
            backgroundColor: "black",
            color: "white",
             lineHeight: '40px',
            textAlign: 'center',
            fontSize: '4em',
        }
	});

	return groupBlock;

};