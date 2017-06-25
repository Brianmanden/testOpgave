(function () {
    'use strict';

    function SearchController($scope, apiService) {
        $scope.resourceType = "people";

        $scope.doSearch = function (resource, query) {
            apiService.getData(resource, query).then(function (data) {
                    $scope.result = data;
                });

            $scope.returnVal = "query = " + query;
            $scope.seaarchQuery = "";
        }

        $scope.populateSearch = function (resource, query) {
            $scope.resourceType = resource;
            $scope.searchQuery = query;
        }
    }

    angular
        .module('spa', [])
        .controller('SearchController', ['$scope', 'apiService', SearchController]);
})();