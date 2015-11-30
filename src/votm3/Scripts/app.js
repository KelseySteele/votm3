(function () {
    'use strict';

    angular.module('votm', ['ngRoute', 'ngSanitize'])
        .config(['$routeProvider', function ($routeProvider) {

            $routeProvider .when('/home', {
                templateUrl: 'views/home.html'
            })
            .when('/overview', {
                templateUrl: 'views/overview.html'
            })
            .when('/instructions', {
                templateUrl: 'views/instructions.html',
                controller: 'instructionsCtrl',
                controllerAs: 'ictrl'
            })
             .when('/faq', {
                 templateUrl: 'views/faq.html',
                 controller: 'faqCtrl'
            })
            .when('/checklist', {
                 templateUrl: 'views/checklist.html'
            })
            .otherwise({ redirectTo: '/home' });

        }]);
})();
