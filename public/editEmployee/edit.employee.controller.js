(function(){
    'use strict';

    angular
        .module('app')
        .controller('EditEmployeeController', EditEmployeeController);

    EditEmployeeController.$inject = ['editEmployeeService', '$state'];

    function EditEmployeeController(editEmployeeService, $state){
        var vm = this;

        vm.editEmployee = editEmployeeService.getEmployeeObj();
        vm.sendData = sendData;

        function sendData(){
            editEmployeeService.sendData(vm.editEmployee)
                .then(function(response){
                    if(response.data.edited){
                        alert('Success.');
                        $state.go('/');
                    } else {
                        alert('Failed.');
                    }
                });
        }

    }
}());
