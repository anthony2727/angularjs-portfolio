angular.module('portfolioApp.services', [])
angular.module('portfolioApp.controllers',[])
angular.module('portfolioApp.config',[])

var main = angular.module('portfolioApp',['ngRoute',
										
										  'angular-loading-bar', 
										  'ui.router',
										  'portfolioApp.controllers', 
										  'portfolioApp.services', 
										  'portfolioApp.controllers',
										  'portfolioApp.config'])

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