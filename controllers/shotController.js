angular.module('portfolioApp.controllers')

.controller('shotController',function(dribbble, $stateParams, $scope){
	var id = $stateParams.id
	$scope.shot = {}
	dribbble.shot(id).then(function(result){
		$scope.shot = result.data
		console.log(result.data)
	})

})