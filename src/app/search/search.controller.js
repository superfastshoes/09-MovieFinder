(function(){
	'use strict';

	angular
		.module('app')
		.controller('SearchController', SearchController);

		SearchController.$inject =['movieService', '$stateParams']
	
	function SearchController(movieService, $stateParams){
		var vm = this;

		vm.searchResults = searchResults;
		vm.movieSearch ='';
		
		//vm.message = "hello from search";

		function searchResults(movie){

			movieService.movieResults(movie).then(
				function(data){
					vm.movieList = data; 
					
				}),
				
				function(error) {

				};
		}
	}

})();