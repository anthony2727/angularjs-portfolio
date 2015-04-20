'use strict'
angular.module('portfolioApp.controllers',[])

.controller('shotsController',function($scope, $http){

	
    var params = {}
    params.callback = 'JSON_CALLBACK'
	var url = "https://api.dribbble.com/shots/popular"
	$scope.shots = {}
	$http.jsonp(url, {params:params}).then(function(data){
		$scope.shots = data.data.shots
	})

})