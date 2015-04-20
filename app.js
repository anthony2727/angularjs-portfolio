
angular.module('portfolioApp',['ngRoute', 'ui.router','portfolioApp.controllers'])

.config(function($stateProvider){

	$stateProvider.state('lists', {
		url: '/:lists',
		templateUrl: 'views/lists.html',
		controller: 'shotsController'
	})

})