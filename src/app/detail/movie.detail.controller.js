(function() {
    'use strict';

    angular
        .module('app')
        .controller('DetailController', DetailController);

    DetailController.$inject = ['$stateParams', 'movieService']

    function DetailController($stateParams, movieService) {
        var vm = this;

        vm.movieID = $stateParams.imdbID;

        movieService.movieDetails($stateParams.imdbID).then(
            function(data) {
            	vm.movieData = data;
            	console.log(vm.movieData)
            },
            function(error) {

            }
        );
    }

})();
