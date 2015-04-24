angular.module('portfolioApp.services', [])
angular.module('portfolioApp.controllers',[])

var main = angular.module('portfolioApp',['ngRoute', 'ui.router','portfolioApp.controllers', 'portfolioApp.services', 'portfolioApp.controllers'])

main.config(function($stateProvider){
	// Lists
	$stateProvider.state('shots', {
		url: '/:list',
		templateUrl: 'views/lists.html',
		controller: 'shotsController'
	})
	// Single shot
	$stateProvider.state('shot', {
		url: '/shot/:id',
		templateUrl: 'views/shot.html',
		controller: 'shotController'
	})
	// Profile
	$stateProvider.state('profile', {
		url: '/profile/:user',
		templateUrl: 'views/profile.html',
		controller: 'profileController'
	})

})