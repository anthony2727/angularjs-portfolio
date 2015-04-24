var services = angular.module('portfolioApp.services')

services.factory('dribbble', function($http){

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