(function () {
    'use strict';

    function apiService($http, $log, $q) {

        var query = "http://swapi.co/api/";
        var result;

        this.getData = function (resource, searchString) {
            switch (resource) {
                case "people":
                    console.log("people");
                    query += "people/";
                    break;

                case "species":
                    console.log("species");
                    query += "species/";
                    break;

                case "planets":
                    console.log("planets");
                    query += "planets/";
                    break;

                //case "films":
                //    console.log("films");
                //    break;

                //case "vehicles":
                //    console.log("vehicles");
                //    break;

                //case "starships":
                //    console.log("starships");
                //    break;

                default:
                    console.log("default:");
                    console.log("resource: " + resource);
                    console.log("searchString: " + searchString);
            }

            query += "?search=" + searchString;

            console.log(query);

            var deferred = $q.defer();
            $http.get(query)
                .then(function (response) {
                    console.log(response.data);
                    result = response.data.results[0];
                    deferred.resolve(result);
                },
                function (msg, code) {
                    $log.error(msg, code);
                    deferred.reject(msg);
                });

            return deferred.promise;

        };

        return this;
    }

    angular
        .module('spa')
        .service('apiService', apiService);

})();