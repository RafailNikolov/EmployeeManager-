(function(){
    'use strict';

    angular
        .module('app')
        .factory('employeesFactory', employeesFactory);

    employeesFactory.$inject = ['$http'];

    function employeesFactory($http){

        var service = {
            getEmployees: getEmployees,
            deleteEmployee: deleteEmployee
        };

        return service;

///////////////////////////////////////

        function getEmployees(){
            return $http.get('api/get');
        }

        function deleteEmployee(empl_id){
            return $http.delete('api/del/' + empl_id);
        }

    }
}());
