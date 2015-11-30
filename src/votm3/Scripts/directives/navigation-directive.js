(function () {
    'use strict';

    angular.module('votm')
        .directive('navigationDirective', [function () {
            return {
                templateUrl: '/views/navigation.html'
            }

        }]);
})();