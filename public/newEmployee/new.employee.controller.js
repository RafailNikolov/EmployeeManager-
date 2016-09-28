(function(){
    'use strict';

    angular
        .module('app')
        .controller('NewEmployeeController', NewEmployeeController);

    NewEmployeeController.$inject = ['newEmployeeService', '$state', 'identify'];

    function NewEmployeeController(newEmployeeService, $state, identify){
        init();

        var vm = this;

        vm.newEmployee = {
            opt1: false,
            opt2: false,
            opt3: false,
            opt4: false,
            opt5: false
        };
        vm.sendData = sendData;

        function sendData(){
            newEmployeeService.sendData(vm.newEmployee)
                .then(function(response){
                if(response.data.created){
                    alert('Success.');
                    $state.go('/employees');
                } else {
                    alert('Failed.');
                }
            });
        }

        function init(){
            if(!identify.isAuthenticated()){
                $state.go('/login');
            }
        }

    }
}());
