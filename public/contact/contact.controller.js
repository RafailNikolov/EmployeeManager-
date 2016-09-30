(function(){
    'use strict';

    angular
        .module('app')
        .controller('ContactController', ContactController);

        function ContactController(){
            var vm = this;

            vm.title = "Contact Page";
            vm.e_mail = "nikolov_rafail@yahoo.com";
            vm.gitHub = "https://github.com/RafailNikolov/";

            //TODO Display Contact INFO
        }
}());
