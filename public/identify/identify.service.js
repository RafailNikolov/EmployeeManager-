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
            loginSuccess: loginSuccess
        }

    //////////////////////////////////////

        function isAuthenticated(){
             return !!this.currentUser()._id;
        }

        function loginSuccess(userObj){
            user = userObj;
            console.log('identify');
            console.log(userObj);
        }

        function currentUser(){
            console.log(user);
            return user;
        }

    }
}());
