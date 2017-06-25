(function () {
    'use strict';

    function apiService($http, $log, $q) {

        var endpoint = "http://swapi.co/api/";
        var resourceType, query, result, objProps;

        this.getData = function (resource, searchString) {
            switch (resource) {
                case "people":
                    resourceType = "people/";
                    objProps = ["name", "height", "mass", "hair_color", "skin_color", "eye_color", "birth_year", "gender"];
                    break;

                case "species":
                    resourceType = "species/";
                    objProps = ["name", "classification", "designation", "average_height", "skin_colors", "hair_colors", "eye_colors", "average_lifespan", "language"];
                    break;

                case "planets":
                    resourceType = "planets/";
                    objProps = ["name", "rotation_period", "diameter", "climate", "gravity", "terrain", "surface_water", "population"];
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
            
            var deferred = $q.defer();
            $http.get(query)
                .then(function (response) {
                    if (response.data.count > 0) {
                        var resultObj = {};
                        var dataObj = response.data.results[0];
                        var props = objProps.length;

                        resultObj["msg"] = "Results";;

                        for (var i = 0; i < props; i++){
                            resultObj[objProps[i]] = dataObj[objProps[i]];
                        }

                        deferred.resolve(resultObj);
                    } else {
                        deferred.resolve({
                            msg: 'Nothing found'
                        });
                    }

                    result = response.data.results[0];
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