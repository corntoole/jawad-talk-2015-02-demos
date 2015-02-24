angular.module('root', [])
  .controller("index", function ($scope) {
    $scope.value = 1;
    $scope.isBold = function () { return $scope.value % 2 === 0; };
    $scope.isItalic = function () { return $scope.value % 3 === 0; };
    $scope.isUnderlined = function () { return $scope.value % 5 === 0; };
  });