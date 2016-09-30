(function(){
    'use strict';

    angular
        .module('app')
        .controller('RegisterController', RegisterController);

    RegisterController.$inject = [
        'RegisterService',
        '$state',
        '$mdDialog',
        'LoginService',
        'identify'
    ];

    function RegisterController(RegisterService, $state, $mdDialog, LoginService, identify){
        var vm = this;

        vm.title = 'Register';
        vm.user = {};
        vm.repeatPassword = '';
        vm.checkPasswords = checkPasswords;
        vm.register = register;

    //////////////////////////////////////////////////////

        var alertDialogSuccess = $mdDialog.alert()
          .clickOutsideToClose(true)
          .title('SUCCESS !')
          .textContent('Welcome to Employee Manager')
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
          .title("Passwords don't match!")
          .textContent('passwords must be the same.')
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

        var alertDialogRegError = $mdDialog.alert()
          .clickOutsideToClose(true)
          .title("Not Registered.")
          .textContent('Try other user name.')
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


        function checkPasswords(){
            if(vm.user.password != vm.repeatPassword){
                $mdDialog.show(alertDialogError);
            } else {
                register();
            }
        }

        function register(){
            RegisterService.sendData(vm.user)
                .then(function(response){
                    if(response.data){
                        autoLogin(response.data);
                    } else {
                        $mdDialog.show(alertDialogRegError);
                    }
                });
        }

        function autoLogin(userObj){
            LoginService.sendData(userObj)
                .then(function(response){
                    if(response.data){
                        identify.loginSuccess(response.data);
                        $mdDialog.show(alertDialogSuccess).then(function(){
                            $state.go('/employees');
                        });
                    } else {
                        $mdDialog.show(alertDialogError);
                    }
                });
        }
    }
}());
