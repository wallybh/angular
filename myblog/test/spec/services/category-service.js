'use strict';

describe('Service: CategoryService', function () {

  // load the service's module
  beforeEach(module('myblogApp'));

  // instantiate service
  var CategoryService;
  beforeEach(inject(function (_CategoryService_) {
    CategoryService = _CategoryService_;
  }));

  it('should do something', function () {
    expect(!!CategoryService).toBe(true);
  });

});
