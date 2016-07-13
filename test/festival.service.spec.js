describe('festival service', function () {
    var festivalService, $httpBackend, testHelper, $rootScope;

    beforeEach(module('festivalApp.mocks'));
    beforeEach(module('festivalService'));

    beforeEach(inject(function (_festivalService_, _$httpBackend_, _testHelper_, _$rootScope_) {
        festivalService = _festivalService_;
        $httpBackend = _$httpBackend_;
        testHelper = _testHelper_;
        $rootScope = _$rootScope_;
    }));

    beforeEach(function () {
        jasmine.addMatchers({
            toBeAPromise: function () {
                return {
                    compare: function (promise) {
                        return {
                            pass: !!promise.then,
                            message: "Expected " + promise + " to be a promise."
                        };
                    }
                }
            }
        });
    });

    describe('getFestivals', function () {
        var festivalsMock;
        beforeEach(function () {
            festivalsMock = $httpBackend.whenGET('../data/festivals.json').respond(200, 'test');
        });

        it('should be defined', function () {
            expect(festivalService).toBeDefined();
        });

        it('should return a promise', function () {
            expect(festivalService.getFestivals()).toBeAPromise();
        });

        it('should call the correct festivals url', function () {
            festivalService.getFestivals();
            $httpBackend.flush();
            $httpBackend.expectGET('../data/festival.json');
        });

        it('should return the data given by the response', function () {
            festivalService.getFestivals().then(function (response) {
                expect(response).toBe('test');
            });
            $httpBackend.flush();
        });

        it('should return the data given by the response', function () {
            festivalsMock.respond(500, {test: 'testError'});
            festivalService.getFestivals().catch(function (reason) {
                expect(reason.data).toEqual({test: 'testError'});
            });
            $httpBackend.flush();
        });

        it('should return the status code given by the response', function () {
            festivalsMock.respond(500, {test: 'testError'});
            festivalService.getFestivals().catch(function (reason) {
                expect(reason.status).toEqual(500);
            });
            $httpBackend.flush();
        });
    });


    it('should call the correct festivalDetails url when getFestivalDetails is being triggered', function () {
        $httpBackend.whenGET('../data/testing.json').respond({});
        festivalService.getFestivalDetails('testing');
        $httpBackend.flush();
        $httpBackend.expectGET('../data/testing.json');
    });
})
;
