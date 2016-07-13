describe('max rating filter', function(){
    var maxRatingFilter,
        filterData = [
            {name: 'a', rating: 5},
            {name: 'b', rating: 1},
            {name: 'c', rating: 2},
            {name: 'd', rating: 4}
        ];

    beforeEach(module('festivalFilters'));
    
    beforeEach(inject(function(_maxRatingFilter_){
        maxRatingFilter = _maxRatingFilter_;
    }));

    it('should return the items with the maximum rating from the given list when the filter is turned on', function(){
        expect(maxRatingFilter(filterData, true)).toEqual([{name: 'a', rating: 5}]);
    });

    it('should return the full list when the filter is turned off', function(){
        expect(maxRatingFilter(filterData, false)).toEqual(filterData);
    });
});