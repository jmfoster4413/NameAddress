'use strict';

angular.module('myApp.view1', ['ngRoute'])

.controller('View1Ctrl', ['$scope', 'States', function($scope, States) {
  console.log("In ViewCtrl");
  $scope.states = States.stateInfo;
  $scope.selectedState = $scope.states[1];
}]);

