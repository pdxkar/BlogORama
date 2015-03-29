var routeApp = angular.module('myApp', ['ngRoute']);

routeApp.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'task.html'
        })
        .when('/technology', {
            templateUrl: 'technology.html'
        })
.otherwise({redirectTo:"/technology"});

});