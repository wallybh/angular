'use strict';

/**
 * @ngdoc service
 * @name foxbitApiApp.ClientService
 * @description
 * # ClientService
 * Service in the foxbitApiApp.
 */
angular.module('foxbitApiApp')
  .service('ClientService', function() {
    var modelName = "FoxBitApi.Clients";

    var loadModel = function() {
      var model = {
        clients: localStorage[modelName] ?
          JSON.parse(localStorage[modelName]) : []
      };

      return model;
    };

    var saveModel = function() {
      localStorage[modelName] = JSON.stringify(Model.clients);
    };

    var findById = function(clientId) {
      return _.find(Model.clients, function(client) {
        return client.id === clientId;
      });
    };

    this.save = function(client) {

      var cli = findById(client.id);

      if (cli) {
        cli.name = client.name;
      } else {
        Model.clients.push(client);
      }

      saveModel();
    };

    this.remove = function(client) {
      _.remove(Model.clients, function(item) {
        return item.id === client.id;
      });

      saveModel();
    };

    this.query = function(clientId) {
      if (clientId) {
        return findById(clientId);
      } else {
        return Model.clients;
      }
    };

    this.first = function() {
      return Model.clients[0];
    };

    var Model = loadModel();
  });
