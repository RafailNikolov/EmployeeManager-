(function() {
    'use strict';

    angular
        .module('app')
        .controller('EmployeesController', EmployeesController);

    EmployeesController.$inject = ['employeesFactory', 'editEmployeeService'];

    function EmployeesController(employeesFactory, editEmployeeService){

        var vm = this;

        vm.employeeToEdit = employeeToEdit;
        vm.deleteEmployee = deleteEmployee;

        // Get all Employees at the initialization
        employeesFactory.getEmployees()
            .then(function(response){
            vm.results = response.data;
        });


        function employeeToEdit($index){
            editEmployeeService.addEmployeeObj(vm.results[$index]);
        }

        function deleteEmployee($index){
            employeesFactory.deleteEmployee(vm.results[$index]._id)
                .then(function(response){
                    if(response.data.ok){
                        employeesFactory.getEmployees()
                            .then(function(response){
                                vm.results = response.data;
                                alert('Employee Deleted.');
                        });
                    } else {
                        alert('Employee NOT Deleted.')
                        console.error('F*ckkkkkkkk !');
                    }
                });
        }
    }

}());
