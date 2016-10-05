(function(){
    'use strict';

    angular
        .module('app')
        .controller('EditEmployeeController', EditEmployeeController);

    EditEmployeeController.$inject = [
        'editEmployeeService',
        '$state',
        '$mdDialog',
        'identify'
    ];

    function EditEmployeeController(editEmployeeService, $state, $mdDialog, identify){
        init();

        var editEmplCtrl = this;

        editEmplCtrl.editEmployee = editEmployeeService.getEmployeeObj();
        editEmplCtrl.confirmEdit = confirmEdit;

        ////////////////////////////////////////////////////////

        function sendData(){
            editEmployeeService.sendData(editEmplCtrl.editEmployee)
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
                            height: 20
                          })
                          .closeTo({
                            left: 1500
                          })

                        $mdDialog.show(alertDialog).then(function(){
                            $state.go('/employees');
                        });
                    } else {
                        //TODO
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
