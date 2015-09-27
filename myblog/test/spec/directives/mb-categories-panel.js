'use strict';

describe('Directive: mbCategoriesPanel', function () {

  // load the directive's module
  beforeEach(module('myblogApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<mb-categories-panel></mb-categories-panel>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the mbCategoriesPanel directive');
  }));
});
