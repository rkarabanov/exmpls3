'use strict';
phonecatApp.service('PhoneDetailsService', ['$http', function ($http) {
    return {getPhones: getPhones};

    function getPhones(phoneId) {
        var url = 'phones/' + phoneId + '.json';
        return $http.get(url);
    }
}]);
