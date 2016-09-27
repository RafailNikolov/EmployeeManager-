(function(){
    'use strict';

    angular
        .module('app')
        .controller('LoginController', LoginController);

        LoginController.$inject = [];

        function LoginController(){
            var vm = this;

            vm.title = 'Login Page';
        }
}());
