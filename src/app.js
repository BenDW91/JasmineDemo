(function(){
    angular.module('festivalApp', ['festivalsPage', 'festivalDetailsPage', 'festivalService', 'festivalRoutes']);
    angular.module('festivalsPage', ['festivalFilters']);
    angular.module('festivalRoutes', ['ui.router']);
    angular.module('festivalDetailsPage', []);
    angular.module('festivalService', []);
    angular.module('festivalFilters', []);
})();