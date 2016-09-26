(function() {
    'use strict';

    angular
        .module('app')
        .controller('EmployeesController', EmployeesController);

    EmployeesController.$inject = [
                                    'employeesFactory',
                                    'editEmployeeService',
                                     '$anchorScroll',
                                     '$location'
                                  ];

    function EmployeesController(employeesFactory,
        editEmployeeService, $anchorScroll, $location){

        var vm = this;

        vm.employeeToEdit = employeeToEdit;
        vm.deleteEmployee = deleteEmployee;
        vm.goToTop = goToTop;

        // Get all Employees at the initialization
        employeesFactory.getEmployees()
            .then(function(response){
            vm.results = response.data;
        });


        function employeeToEdit(empl){
            editEmployeeService.addEmployeeObj(empl);
        }

        function deleteEmployee(empl){
            employeesFactory.deleteEmployee(empl._id)
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

        function goToTop(){
            $location.hash('mainContainer');
            $anchorScroll();
        }
    }

}());
