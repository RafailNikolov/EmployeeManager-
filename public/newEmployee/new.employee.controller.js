(function(){
    'use strict';

    angular
        .module('app')
        .controller('NewEmployeeController', NewEmployeeController);

    NewEmployeeController.$inject = ['newEmployeeService', '$state'];

    function NewEmployeeController(newEmployeeService, $state){
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
                    $state.go('/');
                } else {
                    alert('Failed.');
                }
            });
        }

    }
}());
