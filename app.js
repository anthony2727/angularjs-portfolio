angular.module('portfolioApp.services', [])
angular.module('portfolioApp.controllers',[])

var main = angular.module('portfolioApp',['ngRoute', 'ui.router','portfolioApp.controllers', 'portfolioApp.services', 'portfolioApp.controllers'])

main.config(function($stateProvider){

	$stateProvider.state('shots', {
		url: '/:list',
		templateUrl: 'views/lists.html',
		controller: 'shotsController'
	})

	$stateProvider.state('shot', {
		url: '/shot/:id',
		templateUrl: 'views/shot.html',
		controller: 'shotController'
	})

})