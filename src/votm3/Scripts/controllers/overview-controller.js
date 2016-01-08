
(function () {
    'use strict';

    angular.module('votm').controller('overviewCtrl', ['$http', function ($http) {
        var overview = this; //data for using on the overview page
       
        overview.overviewdata = []; //Initializes overviewdata to an empty array. Page renders before recieving data, this prevents an error when the page loads.

        $http.get('/data/overview-data.json').success(function (data) {
            overview.overviewdata = data; // Fills the overviewdata array with information from the json file. :)
        });

        //tabs
        overview.usetab = 'VazztCaster as a Turnkey System'; //intialize use tab open
        overview.tab = 'introduction';  //initialize the general tab open
        overview.overviewcategory = 'introduction'; //initialize the filter category
        //overview.overviewuse = 'VazztCaster as a Turnkey System'; //sets the filter to only show objects from overview array with the use as the turnkey system
        overview.overviewtemplate = 'views/overviewtemplate.html'; //this is the template for each panel

        //accordion settings
        overview.isFirstOpen = true;
        //overview.oneAtATime = true;

        //identify useTab that was clicked
        overview.selectUseTab = function (setUseTab) {
            overview.usetab = setUseTab;
        };

        //Sets active use tab

        overview.isSelectedUse = function (checkUseTab) {
            return overview.usetab === checkUseTab; 
        };

        //identify tab that was clicked
        overview.selectTab = function (setTab) {
            overview.tab = setTab;
            overview.overviewcategory = setTab;  //used to set the filter for the categories
        };

        //set active tab
        overview.isSelected = function (checkTab) {
            return overview.tab === checkTab;
        };

    }]);

})();