'use strict';

(function() {

    angular.module('movieApp.controllers', ['movieApp.config', 'ngRoute'])

        .config(function(apiUrl, $routeProvider)  {
            console.log('controllers module config' + apiUrl);

            $routeProvider.when('/', {
                templateUrl: 'views/home.html'
            });

            $routeProvider.when('/search',  {
                templateUrl: 'views/search.html',
                controller: 'searchCtrl'
            });

            $routeProvider.when('/collection', {
                templateUrl: 'views/collection.html'
            });


            $routeProvider.otherwise( {
                redirectTo: '/'
            });

        })}());







