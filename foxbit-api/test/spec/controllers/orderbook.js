'use strict';

describe('Controller: OrderbookCtrl', function () {

  // load the controller's module
  beforeEach(module('foxbitApiApp'));

  var OrderbookCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    OrderbookCtrl = $controller('OrderbookCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(OrderbookCtrl.awesomeThings.length).toBe(3);
  });
});
