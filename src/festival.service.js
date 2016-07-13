(function () {
    angular.module('festivalService')
        .factory('festivalService', festivalService);

    festivalService.$inject = ['$http', '$q'];

    function festivalService($http, $q) {
        var service = {
            getFestivals: getFestivals,
            getFestivalDetails: getFestivalDetails
        };

        return service;

        function getFestivals(){
            return getDataFrom('../data/festivals.json');
        }

        function getFestivalDetails(festivalName){
            return getDataFrom('../data/' + festivalName + '.json');
        }

        function getDataFrom(call){
            var deferred = $q.defer();

            $http.get(call).then(function(response){
                deferred.resolve(response.data);
            }).catch(function(reason){
                deferred.reject(reason)
            });

            return deferred.promise;
        }
    }
})();