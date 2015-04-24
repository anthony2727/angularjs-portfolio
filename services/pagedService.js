var services = angular.module('portfolioApp.services')

services.factory('pagedResult', function(dribbble){

	return function(method, type, collection_name){

		var self = this
		self.params = {page: 0}
		var collection = this[collection_name] = []
		
		this.loadNext = function(){
			++self.params.page
			var promise = dribbble[method](type, self.params)
			promise.then(function(result){
				[].push.apply(collection, result.data[collection_name]);			
			})

			return this
		}
	}
})