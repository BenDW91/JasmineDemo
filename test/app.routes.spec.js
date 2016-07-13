describe('routing', function () {
    var $state, $rootScope, $location;
    
    beforeEach(module('festivalRoutes'));

    beforeEach(inject(function(_$state_, _$rootScope_, _$location_){
        $rootScope = _$rootScope_;
        $state = _$state_;
        $location = _$location_;
    }));

    it('should go to the correct festivals-page url', function(){
        goTo('/festivals');
        $rootScope.$digest();

        expect($state.current).toEqual({
            url: '/festivals',
            template: '<festivals-page></festivals-page>',
            name: 'festivals-page'
        });
    });

    it('should go to the correct festivals-details url', function(){
        goTo('/festival-detail/test');
        $rootScope.$digest();

        expect($state.current).toEqual({
            url: '/festival-detail/:festivalName',
            template: '<festival-details-page></festival-details-page>',
            name: 'festival-details-page'
        });
    });

    it('should go to the default state if the url isn\'t defined', function(){
        goTo('/test/test');
        $rootScope.$digest();
        expect($state.current.url).toBe('/festivals');
    });

    function goTo(url) {
        $location.url(url);
        $rootScope.$digest();
    }

});