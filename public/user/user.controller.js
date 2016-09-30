(function() {
    'use strict';

    angular
        .module('app')
        .controller('UserController', UserController);

    UserController.$inject = ['identify', '$state'];

    /* @ngInject */
    function UserController(identify, $state) {
        var vm = this;

        vm.user = '';
        vm.logOut = logOut;
        getUserName();

    /////////////////////////////////////////

        function getUserName(){
            vm.user = identify.currentUser().name;
        }

        function logOut(){
            identify.logOut();
            vm.user = '';
            $state.go('/login');
        }

    }
})();
