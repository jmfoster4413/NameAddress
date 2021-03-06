'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
        'ngRoute',
        'getStateNames',
        'myApp.view1',
        'myApp.view2',
        'myApp.version'
    ])
    .config(['$routeProvider', function ($routeProvider) {
        console.log("in Route provider");
        $routeProvider
            .when('/view1', {
                templateUrl: 'view1/view1.html',
                controller: 'View1Ctrl'
            })
            .otherwise({redirectTo: '/view2'});
    }]);
