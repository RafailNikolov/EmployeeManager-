(function(){
    'use strict';

    angular
        .module('app')
        .controller('NewEmployeeController', NewEmployeeController);

    NewEmployeeController.$inject = ['newEmployeeService', '$state', 'identify', '$mdDialog'];

    function NewEmployeeController(newEmployeeService, $state, identify, $mdDialog){
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

        var alertDialogSuccess = $mdDialog.alert()
          .clickOutsideToClose(true)
          .title('Employee Created !')
          .textContent('')
          .ariaLabel('Something')
          .ok('OK')
          .openFrom({
            top: -50,
            width: 200,
            height: 20
          })
          .closeTo({
            left: 1500
        });

        var alertDialogError = $mdDialog.alert()
          .clickOutsideToClose(true)
          .title('Error Creating New Employee')
          .textContent('Try Again.')
          .ariaLabel('Something')
          .ok('OK')
          .openFrom({
            top: -50,
            width: 200,
            height: 20
          })
          .closeTo({
            left: 1500
        });


////////////////////////////////////////////////////

        function sendData(){
            newEmployeeService.sendData(vm.newEmployee)
                .then(function(response){
                if(response.data.created){
                    $mdDialog.show(alertDialogSuccess).then(function(){
                        $state.go('/employees');
                    });
                } else {
                    $mdDialog.show(alertDialogError);
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
