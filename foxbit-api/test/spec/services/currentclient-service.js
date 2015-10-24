'use strict';

describe('Service: CurrentClientService', function () {

  // load the service's module
  beforeEach(module('foxbitApiApp'));

  // instantiate service
  var CurrentClientService;
  beforeEach(inject(function (_CurrentClientService_) {
    CurrentClientService = _CurrentClientService_;
  }));

  it('should do something', function () {
    expect(!!CurrentClientService).toBe(true);
  });

});
