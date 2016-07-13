describe('festival-details', function () {
    var component,
        testHelper;

    beforeEach(module('festivalApp.mocks'));
    beforeEach(module('festivalsPage'));

    beforeEach(inject(function (_testHelper_) {
        testHelper = _testHelper_;
    }));

    it('should sort the festivals alphabetically', function(){
        createController();
        component.festivals = [{name: 'b'}, {name: 'a'}, {name: 'be'}, {name: 'a'}];
        component.sortFestivals();
        expect(component.festivals).toEqual([{name: 'a'}, {name: 'a'}, {name: 'b'}, {name: 'be'}]);
    });

    it('should call festival service on load', function(){
        spyOn(testHelper.festivalServiceMock, 'getFestivals').and.callThrough();
        createController();
        expect(testHelper.festivalServiceMock.getFestivals).toHaveBeenCalled();
    });

    function createController() {
        component = testHelper.createComponentController('festivalsPage', ['festivalService']);
        testHelper.scopeMock.$digest();
    }
});