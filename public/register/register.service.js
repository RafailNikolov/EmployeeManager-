(function(){
    'use strict';

    angular
        .module('app')
        .factory('RegisterService', RegisterService);

    RegisterService.$inject = ['$http'];

    function RegisterService($http){
        //TODO
        return {
            sendData: sendData
        }

        function sendData(userObj){
            return $http.post('api/register', userObj);
        }
    }
}());
