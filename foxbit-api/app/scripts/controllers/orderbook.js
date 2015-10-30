'use strict';

/**
 * @ngdoc function
 * @name foxbitApiApp.controller:OrderbookCtrl
 * @description
 * # OrderbookCtrl
 * Controller of the foxbitApiApp
 */
angular.module('foxbitApiApp')
  .controller('OrderbookCtrl', function($scope, $http, ClientService, $timeout,ngProgressFactory) {

    $scope.progressbar = ngProgressFactory.createInstance();

    $scope.getData = function() {
      $http.defaults.useXDomain = true;

      $scope.progressbar.start();

      $http.get('https://crossorigin.me/https://api.blinktrade.com/api/v1/BRL/orderbook',{params: { 'f': new Date().getTime() }})
        .success(function(data, status, headers, config) {

          $scope.progressbar.set(50);

          var bids = [];
          var asks = [];

          var client = ClientService.first();

          for (var i = 0; i < data.bids.length; i++) {
            var bid = data.bids[i];

            if (!client || client.id === bid[2]) {
              bids.push(new Bid(i + 1, bid[1], bid[0], bid[2]));
            }
          }
          $scope.progressbar.set(70);

          for (var j = 0; j < data.asks.length; j++) {
            var ask = data.asks[j];
            if (!client || client.id === ask[2]) {
              asks.push(new Bid(j + 1, ask[1], ask[0], ask[2]));
            }
          }

          $scope.progressbar.set(90);

          $scope.bids = bids;
          $scope.asks = asks;

          $scope.progressbar.complete();
        }).error(function(data, status, headers, config) {
          //log error
          $scope.progressbar.complete();
        });
      //console.log('foi');
    };

    $scope.intervalFunction = function () {
      $timeout(function () {
        $scope.getData();
        $scope.intervalFunction();
      },10000)
    };

    $scope.intervalFunction();

    function Bid(position, quantity, price, user) {
      this.position = position;
      this.quantity = quantity;
      this.price = price;
      this.user = user;
    }


  });
