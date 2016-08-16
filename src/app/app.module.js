(function(){
	'use strict';
	
	angular
		.module('app', [ 'ui.router'])
		.config(function($urlRouterProvider, $stateProvider) {
				
			$urlRouterProvider.otherwise('/search');

			stateProvider
				.state('search', {
					url: '/search',
					templatUrl: '/app/search/search.html',
					controller: 'SearchController as search'
				})
				.state('detail', {
					url: '/detail?movieId',
					templatUrl: '/app/detail/detail.html',
					controller: 'DetailController as detail'
				});
		});

})();