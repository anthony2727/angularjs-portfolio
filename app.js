
angular.module('portfolioApp',['ngRoute', 'ui.router','portfolioApp.controllers'])

.config(function($stateProvider){

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