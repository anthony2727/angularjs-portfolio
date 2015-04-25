var services = angular.module('portfolioApp.services')

services.factory('github', function($http, githubCredentials){

	var baseUrl = 'https://api.github.com';
    
	function load(url){
		return $http.get(url + '?client_id='+githubCredentials.client_id+'&client_secret='+githubCredentials.client_secret);
	}

	return function(){

		this.profile = function(user){
			var profileUrl = baseUrl + '/users/' + user; 
			return load(profileUrl)
		};

		this.repos = function(user){
			var repoUrl = baseUrl+ '/users/' + user + '/repos';
			return load(repoUrl)
		};

		this.gists = function(user){
			var repoUrl = baseUrl+ '/users/' + user + '/gists';
			return load(repoUrl)
		};

	};

});

