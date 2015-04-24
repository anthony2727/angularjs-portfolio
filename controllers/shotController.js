'use strict'

var controllers = angular.module('portfolioApp.controllers')

controllers.controller('shotController',function(dribbble, $stateParams, $scope, $sce){
	var id = $stateParams.id
	$scope.shot = {}

	$scope.trust = $sce.trustAsHtml

	dribbble.shot(id).then(function(result){
		$scope.shot = result.data
	})
	
})