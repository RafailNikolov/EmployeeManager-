(function() {
    'use strict';

    angular
        .module('app')
        .controller('UserController', UserController);

    UserController.$inject = ['identify', '$state', '$scope', '$location'];

    /* @ngInject */
    function UserController(identify, $state, $scope, $location) {
        var vm = this;

        vm.user = '';
        vm.logOut = logOut;

        $scope.$watch(function(){
            return $location.path();
        }, getUserName);

    /////////////////////////////////////////

        function getUserName(){
            if(identify.isAuthenticated()){
                vm.user = identify.currentUser().name + ' - Log Out';
            }
        }

        function logOut(){
            identify.logOut();
            vm.user = '';
            $state.go('/login');
        }

    }
})();
