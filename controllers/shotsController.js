'use strict'

var controllers = angular.module('portfolioApp.controllers')

controllers.controller('shotsController',function($scope, pagedResult, $stateParams){

	$scope.list = new pagedResult('shots', $stateParams.list, 'shots').loadNext()
	
})