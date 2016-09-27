(function(){
    'use strict';

    angular
        .module('app')
        .controller('EditEmployeeController', EditEmployeeController);

    EditEmployeeController.$inject = [
        'editEmployeeService',
        '$state',
        '$mdDialog'
    ];

    function EditEmployeeController(editEmployeeService, $state, $mdDialog){
        var vm = this;

        vm.editEmployee = editEmployeeService.getEmployeeObj();
        vm.confirmEdit = confirmEdit;

        ////////////////////////////////////////////////////////

        function sendData(){
            editEmployeeService.sendData(vm.editEmployee)
                .then(function(response){
                    if(response.data.edited){
                        var alertDialog = $mdDialog.alert()
                          .clickOutsideToClose(true)
                          .title('SUCCESS !')
                          .textContent('New information stored.')
                          .ariaLabel('Something')
                          .ok('OK')
                          .openFrom({
                            top: -50,
                            width: 200,
                            height: 200
                          })
                          .closeTo({
                            left: 1500
                          })

                        $mdDialog.show(alertDialog).then(function(){
                            $state.go('/');
                        });
                    } else {
                        alert('Failed.');
                    }
            });
        }

        function confirmEdit(ev){
            var confirm = $mdDialog.confirm()
                  .title('Would you like to save the changes?')
                  .textContent('Employee information will be overwritten.')
                  .ariaLabel('Lucky day')
                  .targetEvent(ev)
                  .ok('Yes')
                  .cancel('Cancel');

            $mdDialog.show(confirm).then(function() {
                sendData();
            }, function() {
                alert('Failed.');
            });
        }

    }
}());
