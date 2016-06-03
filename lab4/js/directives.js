'use strict';
propertyApp.directive('favoriteButton', function (localStorageService) {

    return {

        restrict: 'A',
        replace: false,
        scope: true,
        link: function ($scope, element, attrs) {
            // console.log(element);


            $scope.toggleIcon = function () {
                //console.log(element);
                $scope.isFavorite = !$scope.isFavorite;
                //console.log($scope.isFavorite);
                if ($scope.isFavorite) {
                    localStorageService.writeFavoriteProperty($scope.propertyId);
                }
                else {
                    localStorageService.removeFavoriteProperty($scope.propertyId);
                }
            }
        }
    }
});