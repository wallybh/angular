'use strict';

describe('Directive: ClientPanel', function () {

  // load the directive's module
  beforeEach(module('foxbitApiApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<-client-panel></-client-panel>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the ClientPanel directive');
  }));
});
