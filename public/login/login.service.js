(function(){
    'use strict';

    angular
        .module('app')
        .factory('LoginService', LoginService);

        LoginService.$inject = ['$http'];

    function LoginService($http){

        return {
            sendData: sendData,
        }

        ////////////////////////////////////////

        function sendData(obj){
            return $http.post('api/login', obj);
        }

    }
}());
