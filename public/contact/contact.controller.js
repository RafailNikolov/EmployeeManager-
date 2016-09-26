(function(){
    'use strict';

    angular
        .module('app')
        .controller('ContactController', ContactController);

        function ContactController(){
            var vm = this;

            vm.title = "Contact Page"

            //TODO Display Contact INFO
        }
}());
