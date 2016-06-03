'use strict';

controllers

    .controller('StartCtrl', ['$scope', 'propertySearchService', 'localStorageService',
        function ($scope, propertySearchService, localStorageService) {

            propertySearchService.getProperty().success(function (data) {
                $scope.faves = localStorageService.getFaves();
                $scope.searchList = localStorageService.getSearchList();
            });
        }])

    .controller('ErrorCtrl', ['$scope', 'propertySearchService', 'localStorageService',
        function ($scope, propertySearchService, localStorageService) {

            propertySearchService.getProperty().success(function (data) {
                $scope.faves = localStorageService.getFaves();
                $scope.propertyes = data.response.listings;
            });
        }])

    .controller('PropertySearchCtrl', ['$scope', '$location', '$routeParams', 'propertySearchService', 'localStorageService',
        function ($scope, $location, $routeParams, propertySearchService, localStorageService) {
            propertySearchService.getProperty().success(function (data) {
                $scope.faves = localStorageService.getFaves();
                let propertyes = data.response.listings,
                    request = propertySearchService.getRequest();
                $scope.findPropertyes = propertySearchService.getFindPropertyes(propertyes, request);
            });

        }])

    .controller('PropertyOneCtrl', ['$scope', '$http', '$location', '$routeParams', 'propertySearchService', 'localStorageService',
        function ($scope, $http, $location, $routeParams, propertySearchService, localStorageService) {

            $scope.propertyId = propertySearchService.getPropertyId();
            $scope.isFavorite = localStorageService.isFavoriteProperty($scope.propertyId);
            propertySearchService.getProperty().success(function (data) {
                $scope.property = data.response.listings.reduce(function (res, cur) {
                    return strIndexOf(cur.lister_url, $scope.propertyId) ? cur : res;
                }, null);
                
            });
        }])

    .controller('FavorCtrl', ['$scope', 'propertySearchService', 'localStorageService',
        function ($scope, propertySearchService, localStorageService) {
            propertySearchService.getProperty().success(function (data) {
                $scope.propertyes = data.response.listings;
                $scope.fPropertyes = localStorageService.getFavoritePropertyes($scope.propertyes);

            });
        }])


;
