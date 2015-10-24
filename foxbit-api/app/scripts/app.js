'use strict';

/**
 * @ngdoc overview
 * @name foxbitApiApp
 * @description
 * # foxbitApiApp
 *
 * Main module of the application.
 */
angular
  .module('foxbitApiApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/orderbook.html',
        controller: 'OrderbookCtrl',
        controllerAs: 'orderbook'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/orderbook', {
        templateUrl: 'views/orderbook.html',
        controller: 'OrderbookCtrl',
        controllerAs: 'orderbook'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
