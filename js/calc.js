angular.module('CalculatorApp', [])
    .controller('CalculatorController', function($scope) {
        $scope.result = function() {
            if ($scope.a + $scope.b + $scope.c > 0) {
                return $scope.a + $scope.b + $scope.c;
            }
        };
    });
