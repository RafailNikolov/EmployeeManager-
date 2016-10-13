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
        var registerCtrl = this;

        registerCtrl.title = 'Register';
        registerCtrl.user = {};
        registerCtrl.repeatPassword = '';
        registerCtrl.checkPasswords = checkPasswords;
        registerCtrl.register = register;
        registerCtrl.login = login;

        init();

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
          .textContent('Passwords must be the same.')
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

////////////////////////////////////////////////////////////

        function init(){
            if(identify.isAuthenticated()){
                $state.go('/employees');
            }
        }

        function checkPasswords(){
            if(registerCtrl.user.password != registerCtrl.repeatPassword){
                $mdDialog.show(alertDialogError);
            } else {
                register();
            }
        }

        function register(){
            RegisterService.sendData(registerCtrl.user)
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

        function login(){
            $state.go('/login');
        }
    }
}());
