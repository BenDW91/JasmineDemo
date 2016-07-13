(function () {
    angular.module('festivalDetailsPage')
        .controller('festivalDetailsController', festivalDetailsController);

    festivalDetailsController.$inject = ['$stateParams', 'festivalService'];

    function festivalDetailsController($stateParams, festivalService) {
        var vm = this;

        vm.festivalDetails = [];

        festivalService.getFestivalDetails($stateParams.festivalName.toLowerCase()).then(function (response) {
            vm.festivalDetails = response;
        });
    }
})();