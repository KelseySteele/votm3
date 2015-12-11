(function () {
    'use strict';
    var app = angular.module('votm', ['ngRoute', 'ngSanitize', 'ui.bootstrap']);

    //app.controller('PanelController', function () {
    //    this.tab = 1;
    //    this.setTab = function (setTab) {
    //        this.tab = setTab;
    //    };
    //    this.isSelected = function (checkTab) {
    //        return this.tab === checkTab;
    //    };
    //})

    //replaced this: angular.module('votm', ['ngRoute', 'ngSanitize']) with app

    app.config(['$routeProvider', function ($routeProvider) {

        $routeProvider.when('/home', {
            templateUrl: 'views/home.html'
        })
        .when('/overview', {
            templateUrl: 'views/overview.html',
            controller: 'overviewCtrl',
            controllerAs: 'octrl'
        })
        .when('/instructions', {
            templateUrl: 'views/instructions.html',
            controller: 'instructionsCtrl',
            controllerAs: 'ictrl'
        })
         .when('/faq', {
             templateUrl: 'views/faq.html',
             controller: 'faqCtrl',
             controllerAs: 'fctrl'
         })
        .when('/checklist', {
            templateUrl: 'views/checklist.html',
            controller: 'checklistCtrl',
            controllerAs: 'cctrl'
        })
        .otherwise({ redirectTo: '/home' });

    }]);



})();


