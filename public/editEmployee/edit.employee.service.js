(function(){
    'use strict';

    angular
        .module('app')
        .factory('editEmployeeService', editEmployeeService);

    editEmployeeService.$inject = ['$http'];

    function editEmployeeService($http){
        var employeeObj = {};

        return {
                addEmployeeObj: addEmployeeObj,
                getEmployeeObj: getEmployeeObj,
                sendData: sendData
            };

        function addEmployeeObj(employeeForEdit){
            employeeObj = employeeForEdit;
        }

        function getEmployeeObj(){
            return employeeObj;
        }

        function sendData(editedEmployeeObj){
            return $http.put('api/update/' + editedEmployeeObj._id, editedEmployeeObj);
        }
    }
}());
