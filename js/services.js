'use strict';
phonecatApp.service('PhoneDetailsCtrl', function () {
    this.getPhones();
});

function getPhones($http, $routeParams) {
    var url = 'phones/' + $routeParams.phoneId + '.json';
    return $http.get(url);
}
