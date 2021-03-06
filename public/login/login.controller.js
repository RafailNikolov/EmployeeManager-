(function(){
    'use strict';

    angular
        .module('app')
        .controller('LoginController', LoginController);

        LoginController.$inject = [
            "LoginService",
            '$state',
            '$mdDialog',
            'identify'
        ];

    function LoginController(LoginService, $state, $mdDialog, identify){
        var loginCtrl = this;

        loginCtrl.title = 'Login Page';
        loginCtrl.user = {};
        loginCtrl.login = login;
        loginCtrl.register = register;

        init();

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
          .title('Invalid User or Password!')
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

    /////////////////////////////////////////

        function init(){
            if(identify.isAuthenticated()){
                $state.go('/employees');
            }
        }

        function login(){
            LoginService.sendData(loginCtrl.user)
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

        function register(){
            $state.go('/register');
        }

    }
}());
