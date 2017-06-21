(function () {
    'use strict';

    function SearchController($scope, apiService) {
        $scope.doSearch = function (resource, query) {
            apiService.test(resource, query);
            $scope.returnVal = "query = " + query;
        }
    }

    angular
        .module('spa', [])
        .controller('SearchController', ['$scope', 'apiService',  SearchController]);
})();