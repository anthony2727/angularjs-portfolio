var services = angular.module('portfolioApp.services')

services.factory('github', function($http){

	var baseUrl = 'https://api.github.com';

	return function(){

		this.profile = function(user){

			var profileUrl = baseUrl + '/users/' + user; 
			console.log(profileUrl);
			var promise = $http.get(profileUrl);
			return promise;
		};

		this.repos = function(user){

		};

	};

});

