describe('festival-details', function () {
    var component,
        testHelper;

    beforeEach(module('festivalApp.mocks'));
    beforeEach(module('festivalDetailsPage'));

    beforeEach(inject(function (_testHelper_) {
        testHelper = _testHelper_;
    }));

    it('should call the festival service on load', function () {
        spyOn(testHelper.festivalServiceMock, 'getFestivalDetails').and.callThrough();
        createController();
        expect(testHelper.festivalServiceMock.getFestivalDetails).toHaveBeenCalled();
    });

    it('should call the festival service on load with the festival name as param (lowercase)', function(){
        spyOn(testHelper.festivalServiceMock, 'getFestivalDetails').and.callThrough();
        testHelper.$stateParamsMock.festivalName = 'TESTING';
        createController();
        expect(testHelper.festivalServiceMock.getFestivalDetails).toHaveBeenCalledWith('testing');
    });

    it('should fill the festivalDetails array when the festivalDetails call is successful', function(){
        testHelper.festivalDetails = [{test: 'testing'}];
        createController();
        expect(component.festivalDetails).toEqual([{test: 'testing'}])
    });

    function createController() {
        component = testHelper.createComponentController('festivalDetailsPage', ['festivalService', '$stateParams']);
        testHelper.scopeMock.$digest();
    }
});