'use strict';

/**
 * @ngdoc function
 * @name stockDogApp.controller:WatchlistCtrl
 * @description
 * # WatchlistCtrl
 * Controller of the stockDogApp
 */
angular.module('stockDogApp')
  .controller('WatchlistCtrl', function($scope, $routeParams, $modal, WatchlistService, CompanyService) {
    // [1] Initializations
    $scope.companies = CompanyService.query();
    $scope.watchlst = WatchlistService.query($routeParams.listId);
    $scope.stocks = $scope.watchlst.stocks;

    $scope.newStock = {teste: 1};
    var addStockModal = $modal({
      scope: $scope,
      templateUrl: 'views/templates/addstock-modal.html',
      show: false
    });
    // [2] Expose showStockModal to view via $scope
    $scope.showStockModal = function() {
      addStockModal.$promise.then(addStockModal.show);
    };
    // [3] Call the WatchlistModel addStock() function and hide the modal
    $scope.addStock = function() {
      $scope.watchlst.addStock({
        listId: $routeParams.listId,
        company: $scope.newStock.company,
        shares: $scope.newStock.shares
      });
      addStockModal.hide();
      $scope.newStock = {};
    };

  });
