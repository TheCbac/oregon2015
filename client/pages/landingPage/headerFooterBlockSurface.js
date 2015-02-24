
var Surface = require('famous/core/Surface');

/* Block for the Header */
headerBlockSurface = function() {
	var headerBlock = new Surface({
		size:[undefined, 100],
		content: "The Frontier",
		properties: {
			backgroundColor: 'gray',
			lineHeight: "100px",
			textAlign: "center"
		}
	});

	return headerBlock;
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