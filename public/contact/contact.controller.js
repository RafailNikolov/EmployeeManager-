(function(){
    'use strict';

    angular
        .module('app')
        .controller('ContactController', ContactController);

        function ContactController(){
            var contactCtrl = this;

            contactCtrl.title = "Contact Page";
            contactCtrl.e_mail = "nikolov_rafail@yahoo.com";
            contactCtrl.gitHub = "https://github.com/RafailNikolov/";

            //TODO Display Contact INFO
        }
}());
