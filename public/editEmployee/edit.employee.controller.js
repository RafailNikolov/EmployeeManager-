(function(){
    'use strict';

    angular
        .module('app')
        .controller('EditEmployeeController', EditEmployeeController);

    EditEmployeeController.$inject = ['editEmployeeService', '$location'];

    function EditEmployeeController(editEmployeeService, $location){
        var vm = this;

        vm.editEmployee = editEmployeeService.getEmployeeObj();
        vm.sendData = sendData;

        function sendData(){
            editEmployeeService.sendData(vm.editEmployee)
                .then(function(response){
                    if(response.data.edited){
                        alert('Success.');
                        $location.path('/');
                        $location.path();
                    } else {
                        alert('Failed.');
                    }
                });
        }

    }
}());
