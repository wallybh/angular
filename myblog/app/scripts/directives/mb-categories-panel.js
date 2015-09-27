'use strict';

/**
 * @ngdoc directive
 * @name myblogApp.directive:mbCategoriesPanel
 * @description
 * # mbCategoriesPanel
 */
angular.module('myblogApp')
  // [1] Register directive and inject dependencies
  .directive('mbCategoriesPanel', function($location, $modal, CategoryService) {
      return {
        templateUrl: 'views/templates/category-panel.html',
        restrict: 'E',
        scope: {},
        link: function($scope) {
          // [2] Initialize variables
          $scope.category = {};

          var addListModal = $modal({
            scope: $scope,
            templateUrl: 'views/templates/addlist-modal.html',
            show: false
          });

          // [3] Bind model from service to this scope
          $scope.categories = CategoryService.query();

          // [4] Display addlist modal
          $scope.showModal = function() {
            addListModal.$promise.then(addListModal.show);
          };

          // [5] Create a new category from fields in modal
          $scope.createList = function() {
            CategoryService.save($scope.category);
            addListModal.hide();
            $scope.category = {};
          };
          // [6] Delete desired category and redirect to home
          $scope.deleteList = function(list) {
            CategoryService.remove(list);
            $location.path('/');
          };
        }
        };
      });
