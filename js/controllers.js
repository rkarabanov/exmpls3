'use strict';
var phonecatApp=angular.module('phonecatApp',['ngRoute','ngResource']);

phonecatApp.controller('PhoneListCtrl',['$scope','$http', '$location', 'Phone',
    function ($scope, $http, $location, Phone) {
  $scope.phones=Phone.query();
     
}]);