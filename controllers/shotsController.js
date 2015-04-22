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
		shots : function(type, params){
			return load('shots/' + type, params)
		},

		shot : function(id, params){
			return load('shots/' + id, params)
		}

	}
})

.controller('shotsController',function($scope, dribbble, $stateParams){
	var page = 1
	var maxPages = null
	$scope.shots = []

    dribbble.shots($stateParams.list).success(function(result){
    	maxPages = result.pages
    	if (maxPages>0)
		$scope.shots = result.shots

    })

    $scope.loadMore = function(){
    	var params = {}
    	if (maxPages>0 && page<=maxPages){
	    	params.page = ++page
	    	dribbble.shots('popular', params).success(function(result){
				$scope.shots = $scope.shots.concat(result.shots)
	    	})
    	}
    }
})