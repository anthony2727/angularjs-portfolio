'use strict'
angular.module('portfolioApp.controllers',[])

.controller('shotsController',function($scope, $http){

	$scope.lists;
    var params = {}
    params.callback = 'JSON_CALLBACK'
	var url = "https://api.dribbble.com/shots/popular"
	var result = {}
	$http.jsonp(url, {params:params}).then(function(data){
		result = data
	})

})