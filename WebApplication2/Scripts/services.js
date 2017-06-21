(function () {
    'use strict';

    function apiService() {

        this.test = function (endpoint, query) {
            switch (endpoint) {
                case "people":
                    console.log("people - " + query);
                    break;

                case "species":
                    console.log("species");
                    break;

                case "planets":
                    console.log("planets");
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
                    console.log("endpoint: " + endpoint);
                    console.log("query: " + query);
            }
        };

        return this;
    }

    angular
        .module('spa')
        .service('apiService', apiService);

})();