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

.factory('pagedResult', function(dribbble){
	
	return function pagedResult(list, collection_name){
		
		var params = { page:0 }
		var collection = this[collection_name] = []

	    this.loadMore = function(){
		    ++params.page
	    	dribbble.shots(list, self.params).success(function(result){
				[].push.apply(collection, result.data.collection_name)
	    	})
	    }

	    return this;
	}
})

.controller('shotsController',function($scope, pagedResult, $stateParams){

	pagedResult($stateParams.list, 'shots').loadMore()
})