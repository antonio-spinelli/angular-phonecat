'use strict';

/* App Module */

var phonecatApp = angular.module('phonecatApp', [
  'ui.router',
  'phonecatAnimations',
  'phonecatControllers',
  'phonecatDirectives',
  'phonecatFilters',
  'phonecatServices'
]);

phonecatApp.config(
    function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/home');

        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'partials/home.html'
            })
            .state('phoneList', {
                url: '/phone-list',
                templateUrl: 'partials/phone-list.html',
                controller: 'PhoneListCtrl'
            })
            .state('phoneDetail', {
                url: '/phone-detail/:phoneId',
                templateUrl: 'partials/phone-detail.html',
                controller: 'PhoneDetailCtrl'
            });
    });
