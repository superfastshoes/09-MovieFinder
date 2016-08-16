(function(){
	'use strict';

	angular
		.module('app')
		.controller('SearchController', SearchController);

		SearchController.$inject =['movieService']
	
	function SearchController(movieService){
		var vm = this;

		vm.searchResults = searchResults;
		vm.movieSearch;

		function searchResults(movie){

			movieService.movieResults(movie).then(
				function(data){
					console.log(data)
					vm.movieList = data;
				}),
				
				function(error) {

				};
		}
	}

})();