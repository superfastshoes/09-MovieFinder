(function(){
	'use strict';

	angular
		.module('app')
		.factory('movieService', movieService);

	movieService.$inject = ['$http', '$q'];

	function movieServices($http, q){

		var service = {
			movieResults: movieResults	
			};
			return service;

			function movieResults(movieSearch){
				var deffered = $q.defer();

				$http.get('http://img.omdbapi.com/?i=' + movieSearch + '&apikey=7723bd31')
					 .then(function(response){
					 	deffered.resolve(response.data);
					 	console.log(response.data)
					 },
					 function(err){
					 	deffered.reject(err);
					 	console.log(err)
					 }
				);
			return deffered.promise;
		}	
	}

})();