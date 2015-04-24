var controllers = angular.module('portfolioApp.controllers')

controllers.controller('navController', function($location, $scope){
	
	this.isActive = function(site){
		return site == $location.path() ? true : false;
	}
	
})

