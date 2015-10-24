'use strict';

/**
 * @ngdoc function
 * @name foxbitApiApp.controller:OrderbookCtrl
 * @description
 * # OrderbookCtrl
 * Controller of the foxbitApiApp
 */
angular.module('foxbitApiApp')
  .controller('OrderbookCtrl', function($scope, $http, ClientService) {

    $http.defaults.useXDomain = true;

    $http.get('https://crossorigin.me/https://api.blinktrade.com/api/v1/BRL/orderbook')
      .success(function(data, status, headers, config) {

        var bids = [];
        var asks = [];

        var client = ClientService.first();

        for (var i = 0; i < data.bids.length; i++) {
          var bid = data.bids[i];

          if (!client || client.id === bid[2]) {
            bids.push(new Bid(i + 1, bid[1], bid[0], bid[2]));
          }
        }

        for (var j = 0; j < data.asks.length; j++) {
          var ask = data.asks[j];
          if (!client || client.id === ask[2]) {
            asks.push(new Bid(j + 1, ask[1], ask[0], ask[2]));
          }
        }

        $scope.bids = bids;
        $scope.asks = asks;
      }).error(function(data, status, headers, config) {
        //log error
      });

    function Bid(position, quantity, price, user) {
      this.position = position;
      this.quantity = quantity;
      this.price = price;
      this.user = user;
    }

  });
