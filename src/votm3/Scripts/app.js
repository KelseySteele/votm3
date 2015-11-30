(function () {
    'use strict';

    angular.module('votm', ['ngRoute'])
        .config(['$routeProvider', function ($routeProvider) {

            $routeProvider .when('/home', {
                templateUrl: 'views/home.html'
            })
            .when('/overview', {
                templateUrl: 'views/overview.html'
            })
            .when('/instructions', {
                templateUrl: 'views/instructions.html'
            })
             .when('/faq', {
                 templateUrl: 'views/faq.html'
            })
            .when('/checklist', {
                 templateUrl: 'views/checklist.html'
            })
            .otherwise({ redirectTo: '/home' });

        }]);
})();
