phonecatApp.controller('PhoneDetailsCtrl',
    ['$scope', '$http', '$location', '$routeParams',
    function ($scope, $http, $location, $routeParams) {
    $scope.phoneId = $routeParams.phoneId;
        var url = 'phones/' + $routeParams.phoneId + '.json';
        $http.get(url).success(function (data) {
            $scope.phone = data;
            $scope.mainImgUrl = data.images[0];
        });
        $scope.setImage = function (imageUrl) {
            $scope.mainImgUrl = imageUrl;
        }
    }
]);