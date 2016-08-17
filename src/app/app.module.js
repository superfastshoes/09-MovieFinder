(function(){
	'use strict';
	
	angular
		.module('app', [ 'ui.router'])
		.config(function($urlRouterProvider, $stateProvider) {
				
			$urlRouterProvider.otherwise('/search');

			$stateProvider //Defines the pages in the application
			//Two pages to define.
				.state('search', {
					url: '/search',
					templateUrl: 'app/search/search.html', //Specifies where you can find the template file
					controller: 'SearchController as search'   //Specifies where / or the name / of the controller
				})
				.state('detail', {
					url: '/detail?movieId=/:imdbID',
					templateUrl: 'app/detail/detail.html',
					controller: 'DetailController as detail'
				});
		});

})();