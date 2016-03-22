'use strict';

angular.module('myApp.view1', ['ngRoute'])

.controller('View1Ctrl', ['$scope', 'StatesService', function($scope, StatesService) {
  console.log("In ViewCtrl");
  // $scope.theseStates = StatesService;

  StatesService.getAllStates()
      .then(getSuccess)
      .catch(getFailure);

  function getSuccess(states) {
    $scope.theseStates = states;
    $scope.selectedState = $scope.theseStates[1];
  }

  function getFailure() {

  }
  // States.getStates()
  //     .success(function (state) {
  //       $scope.states = state;
  //     })
  //     .error("");
  // $scope.states = States.getStates();
  // console.log("ViewCtrl - scope.states: " + $scope.states.states);
  // $scope.selectedState = $scope.states[1];
}]);

