(function () {
    angular.module('festivalRoutes')
        .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

            $stateProvider
                .state('festivals-page', {
                    url: '/festivals',
                    template: '<festivals-page></festivals-page>'
                })
                .state('festival-details-page', {
                    url: '/festival-detail/:festivalName',
                    template: '<festival-details-page></festival-details-page>'
                });

            $urlRouterProvider.otherwise('/festivals')

        }])
})();