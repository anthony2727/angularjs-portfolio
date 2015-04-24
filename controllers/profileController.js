angular.module('portfolioApp.controllers')

.controller('profileController', function(github, $stateParams, $scope){
	
	var githubService = new github();
	var username = $stateParams.user

	githubService.profile(username).then(function(result){
		$scope.profile = result.data
	});

})