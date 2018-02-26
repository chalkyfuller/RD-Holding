angular.module('RustyDaisy', ['ngRoute', 'ngMaterial'])
.config(function($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl: 'templates/home.tmpl.html'
		});
});
