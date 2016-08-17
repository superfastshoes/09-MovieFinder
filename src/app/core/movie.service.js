(function() {
    'use strict';

    angular
        .module('app')
        .factory('movieService', movieService);

    movieService.$inject = ['$http', '$q'];

    function movieService($http, $q) {

        var service = {
            movieResults: movieResults,
            movieDetails: movieDetails
        };
        return service;

        ///////////////////////////////////////////////////////////////////////////			
        function movieResults(movieSearch) {
            var deffered = $q.defer();

            $http.get('http://www.omdbapi.com/?s=' + movieSearch)
                .then(function(response) {
                        deffered.resolve(response.data);
                        console.log(response.data)
                    },
                    function(err) {
                        deffered.reject(err);
                        console.log(err)
                    }
                );
            return deffered.promise;
        }
        ///////////////////////////////////////////////////////////////////////////

        function movieDetails(movieId) {
            var deffered = $q.defer();

            $http.get('http://www.omdbapi.com/?i=' + movieId)
                .then(function(response) {
                        deffered.resolve(response.data);
                        console.log(response.data)
                    },
                    function(err) {
                        deffered.reject(err);
                        console.log(err)
                    }
                );
            return deffered.promise;
        }
        ///////////////////////////////////////////////////////////////////////////

        ///////////////////////////////////////////////////////////////////////////			
    }

})();
