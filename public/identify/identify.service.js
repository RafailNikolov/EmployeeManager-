(function(){
    'use strict';

    angular
        .module('app')
        .factory("identify", identify);

    function identify(){
        var user = {};

        return {
            currentUser: currentUser,
            isAuthenticated: isAuthenticated,
            loginSuccess: loginSuccess,
            logOut : logOut
        }

    ///////////////////////////////////////////////

        function isAuthenticated(){
            return !!this.currentUser().id;
        }

        function loginSuccess(userObj){
            user = userObj;
        }

        function currentUser(){
            return user;
        }

        function logOut(){
            user = {};
        }

    }
}());
