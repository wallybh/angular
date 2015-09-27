'use strict';

/**
 * @ngdoc service
 * @name myblogApp.CategoryService
 * @description
 * # CategoryService
 * Service in the myblogApp.
 */
angular.module('myblogApp')
  .service('CategoryService', function CategoryService() {
    // [1] Helper: Load categories from localStorage
    var loadModel = function() {
      var model = {
        categories: localStorage['myBlog.categories'] ?
          JSON.parse(localStorage['myBlog.categories']) : [],
        nextId: localStorage['myBlog.nextId'] ?
          parseInt(localStorage['myBlog.nextId']) : 0
      };
      return model;
    };
    // [2] Helper: Save categories to localStorage
    var saveModel = function() {
      localStorage['myBlog.categories'] = JSON.stringify(Model.categories);
      localStorage['myBlog.nextId'] = Model.nextId;
    };
    // [3] Helper: Use lodash to find a category with given ID
    var findById = function(listId) {
      return _.find(Model.categories, function(category) {
        return category.id === parseInt(listId);
      });
    };
    // [4] Return all categories or find by given ID
    this.query = function(listId) {
      if (listId) {
        return findById(listId);
      } else {
        return Model.categories;
      }
    };
    // [5] Save a new category to categories model
    this.save = function(category) {
      category.id = Model.nextId++;
      Model.categories.push(category);
      saveModel();
    };
    // [6] Remove given category from categories model
    this.remove = function(category) {
      _.remove(Model.categories, function(list) {
        return list.id === category.id;
      });
      saveModel();
    };
    // [7] Initialize Model for this singleton service
    var Model = loadModel();
  });
