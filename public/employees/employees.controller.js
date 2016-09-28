(function() {
    'use strict';

    angular
        .module('app')
        .controller('EmployeesController', EmployeesController);

    EmployeesController.$inject = [
                                    'employeesFactory',
                                    'editEmployeeService',
                                     '$anchorScroll',
                                     '$location',
                                     '$mdDialog',
                                     'identify',
                                     '$state'
                                  ];

    function EmployeesController(employeesFactory,
        editEmployeeService, $anchorScroll, $location, $mdDialog, identify, $state){

        init();

        var vm = this;

        vm.employeeToEdit = employeeToEdit;
        vm.goToTop = goToTop;
        vm.showConfirm = showConfirm;

        // Get all Employees at the initialization
        employeesFactory.getEmployees()
            .then(function(response){
            vm.results = response.data;
        });


        /////////////////////////////////////////////////////


        function employeeToEdit(empl){
            console.log(identify.isAuthenticated());
            console.log(identify.currentUser());
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
                        alert('Employee NOT Deleted.');
                    }
                });
        }

        function goToTop(){
            $location.hash('mainContainer');
            $anchorScroll();
        }

        function showConfirm(ev, empl) {
            var confirm = $mdDialog.confirm()
                  .title('Would you like to delete' + empl.first_name +
                   ' ' + empl.last_name + '?')
                  .textContent('This employee will be permanently removed.')
                  .ariaLabel('Lucky day')
                  .targetEvent(ev)
                  .ok('Yes')
                  .cancel('Cancel');

            $mdDialog.show(confirm).then(function() {
                deleteEmployee(empl);
            }, function() {
                //TODO
            });
          }


        function init(){
            if(!identify.isAuthenticated()){
                    $state.go('/login');
            }
        }

    }

}());
