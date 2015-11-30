angular.module('CalculatorApp', [])
    .controller('CalculatorController', function($scope) {
        $scope.result = function() {
            if ($scope.operator == '+') {
                return $scope.a + $scope.b + $scope.c;
            }
            if ($scope.operator == '-') {
                return $scope.a - $scope.b - $scope.c;
            }
            if ($scope.operator == '*') {
                return $scope.a * $scope.b * $scope.c;
            }
            if ($scope.operator == '/') {
                return $scope.a / $scope.b / $scope.c;
            }
        };
    });
