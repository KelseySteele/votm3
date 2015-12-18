(function () {
    'use strict';

    angular.module('votm').controller('faqCtrl', ['$http', function ($http) {
        //var faq = this;
        ////data
        //faq.faqs = questions;
        //faq.categories = categories;

        var faq = this; //data for using on the faq page

        faq.faqdata = []; //Initializes overviewdata to an empty array. Page renders before recieving data, this prevents an error when the page loads.

        $http.get('/data/faq-data.json').success(function (data) {
            faq.faqdata = data; // Fills the faqdata array with information from the json file. :)
        });

        //tabs
        faq.tab = 'general';  //initialize the general tab open
        faq.faqcategory = 'general'; //initialize the filter category
        faq.faqtemplate = 'views/faqtemplate.html'; //this is the template for each panel

        //accordion settings
        faq.isFirstOpen = true; //
        faq.oneAtATime = true;

        //identify tab that was clicked
        faq.selectTab = function (setTab) {
            faq.tab = setTab;
            faq.faqcategory = setTab;  //used to set the filter for the categories
        };

        //set active tab
        faq.isSelected = function (checkTab) {
            return faq.tab === checkTab;
        };
    }]);
    
})();