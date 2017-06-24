(function () {
    'use strict';

    //function SearchController($scope, apiService) {
    function SearchController($scope, apiService) {
        $scope.doSearch = function (resource, query) {
            apiService.getData(resource, query).then(function (data) {
                    $scope.result = data;
                });

            $scope.returnVal = "query = " + query;
        }
    }

    angular
        .module('spa', [])
        .controller('SearchController', ['$scope', 'apiService', SearchController]);
        //.controller('SearchController', ['$scope', SearchController]);
})();