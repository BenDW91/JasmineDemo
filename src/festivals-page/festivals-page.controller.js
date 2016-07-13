(function(){
    angular.module('festivalsPage')
        .controller('festivalsPageController', festivalsPageController);

    festivalsPageController.$inject = ['festivalService'];

    function festivalsPageController(festivalService){
        var vm = this;

        vm.sortFestivals = sortFestivals;

        festivalService.getFestivals().then(function(response){
            vm.festivals = response;
            sortFestivals();
        });

        function sortFestivals(){
            vm.festivals.sort(function(a, b){
                if(a.name < b.name) return -1;
                if(a.name > b.name) return 1;
                return 0;
            })
        }
    }

})();