(function(){
    'use strict';

    angular
        .module('app')
        .controller('AboutController', AboutController);

        function AboutController(){
            var aboutCtrl = this;

            aboutCtrl.title = "About Page";
            aboutCtrl.infoObj = {
                tab1: 'Employee info.',
                tab2: 'Create an employee info.',
                tab3: 'Edit an employee info.'
            }


            //TODO Display About INFO
        }
}());
