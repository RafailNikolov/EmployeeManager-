(function(){
    'use strict';

    angular
        .module('app')
        .config(setRoutes);

    setRoutes.$inject = ['$stateProvider', '$urlRouterProvider'];

    function setRoutes($stateProvider, $urlRouterProvider){

        $stateProvider
            .state('/', {
                url: '/',
                controller: 'EmployeesController',
                controllerAs: 'vm',
                templateUrl: 'employees/employees.view.html'
            })
            .state('/addNew', {
                url: '/addNew',
                controller: 'NewEmployeeController',
                controllerAs: 'vm',
                templateUrl: 'newEmployee/new.employee.view.html'
            })
            .state('/edit', {
                url: '/edit',
                controller: 'EditEmployeeController',
                controllerAs: 'vm',
                templateUrl: 'editEmployee/edit.employee.view.html'
            });

         $urlRouterProvider.otherwise('/');
    }

}());
