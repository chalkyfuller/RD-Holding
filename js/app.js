var app = angular.module('RustyDaisy', ['ngRoute', 'ngMaterial']);
app.config(function($routeProvider){
	$routeProvider.when("/",{
		templateUrl: "index.html"
	})
		.when("/home", {
			templateUrl: "templates/home.tmpl.html"
		});
});
