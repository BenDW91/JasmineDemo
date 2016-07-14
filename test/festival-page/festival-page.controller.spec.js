describe('festival-details', function () {
    var controller,
        testHelper;

    beforeEach(module('festivalApp.mocks'));
    beforeEach(module('festivalsPage'));

    beforeEach(inject(function (_testHelper_) {
        testHelper = _testHelper_;
    }));

    it('should sort the festivals alphabetically', function(){
        createController();
        controller.festivals = [{name: 'b'}, {name: 'a'}, {name: 'be'}, {name: 'a'}];
        controller.sortFestivals();
        expect(controller.festivals).toEqual([{name: 'a'}, {name: 'a'}, {name: 'b'}, {name: 'be'}]);
    });

    it('should call festival service on load', function(){
        spyOn(testHelper.festivalServiceMock, 'getFestivals').and.callThrough();
        createController();
        expect(testHelper.festivalServiceMock.getFestivals).toHaveBeenCalled();
    });

    function createController() {
        controller = testHelper.createController('festivalsPageController', ['festivalService']);
        testHelper.scopeMock.$digest();
    }
});