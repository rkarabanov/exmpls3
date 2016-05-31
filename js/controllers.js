'use strict';

phonecatApp.controller('PhoneListCtrl',['$scope','$http', '$location', 'Phone',
    function ($scope, $http, $location, Phone) {
  $scope.phones=Phone.query();
     
}]);

phonecatApp.controller('PhoneDetailsCtrl',
    ['$scope', '$http', '$location', '$routeParams',
        function ($scope, $http, $location, $routeParams) {
            $scope.phoneId = $routeParams.phoneId;
            getPhones($http, $routeParams).success(function (data) {
                $scope.phone  = data;
                $scope.mainImgUrl = data.images[0];
            });
            $scope.setImage = function (imageUrl) {
                $scope.mainImgUrl = imageUrl;
            };
        }
    ]);