(function () {
    'use strict';

    angular.module('votm').controller('PanelController', function () {
        this.tab = 1;
        this.setTab = function (setTab) {
            this.tab = setTab;
        };
        this.isSelected = function (checkTab) {
            return this.tab === checkTab;
        };
    });

})();

