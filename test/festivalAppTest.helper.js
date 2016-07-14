(function () {
    angular.module('festivalApp.mocks', [])
        .factory('testHelper', testHelper);

    testHelper.$inject = ['$controller', '$q', '$rootScope'];

    function testHelper($controller, $q, $rootScope) {
        var testHelper = {
            festivals: [],
            festivalDetails: {},
            festivalServiceMock: {
                getFestivalDetails: function () {
                    return getPromise(testHelper.festivalDetails);
                },
                getFestivals: function () {
                    return getPromise(testHelper.festivals)
                }
            },
            scopeMock: $rootScope.$new(),
            getPromise: getPromise,
            $stateParamsMock: {festivalName: 'test'},
            createController: createController
        };

        return testHelper;

        function createController(controller, dependenciesToMock) {
            return $controller(controller, getMockedDependencies(dependenciesToMock));
        }

        function getMockedDependencies(dependenciesToMock) {
            var mockedDependencies = {
                $scope: testHelper.scopeMock
            };

            dependenciesToMock.forEach(function (dependency) {
                mockedDependencies[dependency] = testHelper[dependency + 'Mock'];
            });

            return mockedDependencies;
        }

        function getPromise(data) {
            var deferred = $q.defer();

            deferred.resolve(data);

            return deferred.promise;
        }
    }
})();