'use strict';
phonecatApp
    .config(['$routeProvider','$locationProvider', function ($routeProvide,$locationProvide) {
    $routeProvide
        .when("/",
            {
                templateUrl: 'template/home.html',
                controller: 'PhoneListCtrl'
            }
        )
        .when('/phones/:phoneId', {
            templateUrl: 'template/mobile_details.html',
            controller: 'PhoneDetailsCtrl'
        });
}]);