(function(){
    angular.module('festivalFilters')
        .filter('maxRating', function() {
            return function(input, filterOn) {
                var filteredList = input;

                if(filterOn){
                    filteredList = input.filter(function(item){
                        return item.rating === 5;
                    })
                }

                return filteredList;
            };
        });
})();