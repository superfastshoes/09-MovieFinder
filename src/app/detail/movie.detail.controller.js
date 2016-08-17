(function() {
    'use strict';

    angular
        .module('app')
        .controller('DetailController', DetailController);

    DetailController.$inject = ['$stateParams', 'movieService']

    function DetailController($stateParams, movieService) {
        var vm = this;
        //vm.movieDetails = movieDetails;
        //vm.detailResults = detailResults;

        //vm.detailList = {};


        vm.movieID = $stateParams.imdbID;
       // vm.movieData = {};

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
