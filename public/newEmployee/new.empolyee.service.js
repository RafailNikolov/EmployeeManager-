(function(){
    'use strict';

    angular
        .module('app')
        .factory('newEmployeeService', newEmployeeService);

    newEmployeeService.$inject = ['$http'];

    function newEmployeeService($http){

        return {
            sendData: sendData
        };

        function sendData(newEmployee){
            return $http.post('/api/add', newEmployee);
        }
    }
}());
