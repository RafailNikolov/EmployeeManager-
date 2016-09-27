(function(){
    'use strict';

    angular
        .module('app')
        .controller('AboutController', AboutController);

        function AboutController(){
            var vm = this;

            vm.title = "About Page";
            vm.infoObj = {
                tab1: 'Employee info.',
                tab2: 'Create an employee info.',
                tab3: 'Edit an employee info.'
            }


            //TODO Display About INFO
        }
}());
