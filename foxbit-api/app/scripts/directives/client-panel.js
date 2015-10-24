'use strict';

/**
 * @ngdoc directive
 * @name foxbitApiApp.directive:ClientPanel
 * @description
 * # ClientPanel
 */
angular.module('foxbitApiApp')
  .directive('clientPanel', function ($route,ClientService) {
    return {
      templateUrl: '/views/templates/client-panel.html',
      restrict: 'E',
      link: function postLink($scope) {
        $scope.client = {};

        $scope.client = ClientService.first();

        $scope.createClient = function () {
          ClientService.save($scope.client);
          $route.reload();
        };

        $scope.deleteList = function () {
          ClientService.remove($scope.client);
          $scope.client = {};
          $route.reload();
        };
      }
    };
  });
