Router.configure({
	layoutTemplate:'appLayout',
	notFoundTemplate:"notFoundPage",
	yieldTemplates:{
		'appHeader': {to:'header'},
		'appFooter': {to:'footer'}
	}
});

Router.onBeforeAction(function(){
	if (!Meteor.loggingIn() && !Meteor.user()) {
		this.redirect('/');
	} else {
		this.next();
	}
}, {
	// White list routes which don't neet to be signed in
	except:[
		'pageNotFoundRoute',
		'landingPageRoute']
	}
);