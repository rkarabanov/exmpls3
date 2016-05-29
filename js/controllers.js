'use strict';
var phonecatApp=angular.module('phonecatApp',['ngRoute']);

phonecatApp.controller('PhoneListCtrl',['$scope','$http', '$location',function ($scope, $http, $location) {
    $http.get('phones/phones.json').success(function (data) {
        $scope.phones=data;
    });
    
}]);

phonecatApp.controller('PhoneDetailsCtrl',['$scope','$http', '$location', '$routeParams',function ($scope, $http, $location,$routeParams) {
  $scope.phoneId=$routeParams.phoneId;
}]);