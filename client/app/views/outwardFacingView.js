var View 			= require('famous/core/View');
var Surface 		= require('famous/core/Surface');
var Transform 		= require('famous/core/Transform');
var StateModifier 	= require('famous/modifier/StateModifier');

outwardFacingView = function () {
	View.apply(this, arguments);
};

outwardFacingView.prototype = Object.create(View.prototype);
outwardFacingView.prototype.constructor = outwardFacingView;




outwardFacingView.DEFAULT_OPTIONS = {};