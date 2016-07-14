describe('festival-details', function () {
    var controller,
        testHelper;

    beforeEach(module('festivalApp.mocks'));
    beforeEach(module('festivalDetailsPage'));

    beforeEach(inject(function (_testHelper_) {
        testHelper = _testHelper_;
    }));

    beforeEach(function () {
        spyOn(testHelper.festivalServiceMock, 'getFestivalDetails').and.callThrough();
        testHelper.festivalDetails = [{test: 'testing'}];
        testHelper.$stateParamsMock.festivalName = 'TESTING';
        createController();
    });

    it('should call the festival service on load', function () {
        expect(testHelper.festivalServiceMock.getFestivalDetails).toHaveBeenCalled();
    });

    it('should call the festival service on load with the festival name as param (lowercase)', function () {
        expect(testHelper.festivalServiceMock.getFestivalDetails).toHaveBeenCalledWith('testing');
    });
    it('should fill the festivalDetails array when the festivalDetails call is successful', function () {
        expect(controller.festivalDetails).toEqual([{test: 'testing'}])
    });

    function createController() {
        controller = testHelper.createController('festivalDetailsController', ['festivalService', '$stateParams']);
        testHelper.scopeMock.$digest();
    }
});