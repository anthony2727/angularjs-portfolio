'use strict'
angular.module('portfolioApp.controllers',[])

.controller('shotsController',function($scope, $http){

	
    var params = {}
    params.callback = 'JSON_CALLBACK'
	var url = "https://api.dribbble.com/shots/popular"
	$scope.shots = {}
	$scope.rows = 0
	$http.jsonp(url, {params:params}).then(function(data){
		$scope.rows = data.length
		$scope.shots = data.data.shots
	})

})