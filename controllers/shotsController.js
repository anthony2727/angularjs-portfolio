'use strict'
angular.module('portfolioApp.controllers',[])

.factory('dribbble', function($http){

	function load(resource, params){
		var params = params || {}
		params.callback = "JSON_CALLBACK"
		var url = "https://api.dribbble.com/" + resource
		return $http.jsonp(url, {params:params})
	}

	return {

		shots : function(type){
			return load('shots/' + type)
		}

	}
})

.controller('shotsController',function($scope, dribbble, $stateParams){
	
	$scope.shots = {}
	console.log($stateParams)
    dribbble.shots('popular').success(function(result){
    	console.log(result)
		$scope.shots = result.shots
    })

})