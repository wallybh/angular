'use strict';

describe('Service: ClientService', function () {

  // load the service's module
  beforeEach(module('foxbitApiApp'));

  // instantiate service
  var ClientService;
  beforeEach(inject(function (_ClientService_) {
    ClientService = _ClientService_;
  }));

  it('should do something', function () {
    expect(!!ClientService).toBe(true);
  });

});
