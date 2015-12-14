(function () {
    'use strict';

    angular.module('votm').controller('kascarouselController', function () {
        var self = this; //the data for the kascarouselController
        self.slides = slides; //get the data from the variable called slides
   });
        var slides = [
            {
                image: 'images/carousel/any-location.jpg',
                text: 'Broadcast from any location'
            },
            {
                image: 'images/carousel/police-camera.jpg',
                text: 'Encrypted and reliable software solution'
            },
            {
                image: 'images/carousel/recording-video.jpg',
                text: 'Fast, easy, secure live broadcasting'
            },
            {
                image: 'images/carousel/soccer.jpg',
                text: 'View on any Internet-connected device'
            }

        ]
    
})();
