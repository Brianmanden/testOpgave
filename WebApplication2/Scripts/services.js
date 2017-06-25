(function () {
    'use strict';

    function apiService($http, $log, $q) {

        var endpoint = "http://swapi.co/api/";
        var resourceType, query, result;

        this.getData = function (resource, searchString) {
            switch (resource) {
                case "people":
                    console.log("people");
                    resourceType = "people/";
                    break;

                case "species":
                    console.log("species");
                    resourceType = "species/";
                    break;

                case "planets":
                    console.log("planets");
                    resourceType = "planets/";
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
                    console.log("default");
            }

            query = endpoint + resourceType +  "?search=" + searchString;

            console.log(query);

            var deferred = $q.defer();
            $http.get(query)
                .then(function (response) {
                    if (response.data.count > 0) {

                        var dataObj = response.data.results[0];

                        deferred.resolve({
                            msg: 'Results:',
                            name: dataObj.name,
                            height: dataObj.height,
                            mass: dataObj.mass,
                            gender: dataObj.gender
                        });
                    } else {
                        deferred.resolve({
                            msg: 'Nothing found'
                        });
                    }
                    console.log(response.data);
                    result = response.data.results[0];
                    //deferred.resolve(result);
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