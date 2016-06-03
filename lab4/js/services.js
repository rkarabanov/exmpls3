'use strict';
propertyApp.service('propertySearchService', ['$http', '$routeParams', 'localStorageService', function ($http, $routeParams, localStorageService) {
    return {
        getProperty: getProperty,
        getPropertyId: getPropertyId,
        getRequest: getPropertyId,
        getFindPropertyes: getFindPropertyes
    };

    function getFindPropertyes(propertyes, request) {
        let findPropertyes = [],
            arr = (request).split(' '),
            flag;
        if (request === undefined) {
            return findPropertyes;
        }
        for (let i = 0; i < propertyes.length; i++) {
            flag = true;
            for (let j of arr) {
                flag = flag && (strIndexOf(propertyes[i].keywords, j));
            }
            if (flag) {
                findPropertyes.push(propertyes[i]);
            }
        }
        if (findPropertyes.length > 0) {
            localStorageService.saveRequest(request, findPropertyes.length);
        }
        else {
            document.location.href = '#/errorPage';
        }
        return findPropertyes;
    }


    function getPropertyId() {
        for (let k in $routeParams) {
            return k;
        }
    }

    function getProperty() {
        return $http.get('propertyes/propertyes.json');
    }

}])


;