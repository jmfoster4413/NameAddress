'use strict';

/* Services */

var getStateNames = angular.module('getStateNames', []);

getStateNames.factory('StatesService', ['$http', StatesService]);

function StatesService($http) {
  return {
    getAllStates: getAllStates
  };

  function getAllStates() {
    return $http({
      method: 'GET',
      url: 'Data/' + "States.json"
    })
        .then(sendResponseData)
        .catch(sendGetBooksError);
    
    function sendResponseData(response) {
      console.log("sendResponseData - response.data: " + response.data.states);
      return response.data.states;
    }

    function sendGetBooksError(response) {
      return {};
    }

  }
}
