(function () {
    function TestController($scope) {
        $scope.testmethod = function (input) {
            console.log(input);
            $scope.returnVal = "input = " + input;
        }
    }

    angular
        .module('spa', [])
        .controller('TestController', ['$scope', TestController]);
})();