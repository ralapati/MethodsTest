/**
 * Created by RaghuRam on 31/05/2015.
 */

'use strict';

angular.module('methodsTestApp', ['ngResource']);

angular.module('methodsTestApp').config(function ($routeProvider, $locationProvider) {

    $locationProvider.html5Mode(true);

    $routeProvider
        .when('/', {
            templateUrl: '/partials/main',
            controller: 'mainController'
        });
});

angular.module('methodsTestApp').controller('mainController', function($scope) {
   $scope.myVar = 'Hello MEAN App';
});

