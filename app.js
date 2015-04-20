
angular.module('portfolioApp',['ngRoute', 'ui.router'])

.config(function($stateProvider){

	$stateProvider.state('lists', {
		url: '/:lists',
		templateUrl: 'views/lists.html'
	})
	
})