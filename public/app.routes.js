(function(){
    'use strict';

    angular
        .module('app')
        .config(setRoutes);

    setRoutes.$inject = [
        '$stateProvider',
        '$urlRouterProvider'
    ];

    function setRoutes($stateProvider, $urlRouterProvider){

        $stateProvider
            .state('/login', {
                url: '/login',
                controller: 'LoginController',
                controllerAs: 'loginCtrl',
                templateUrl: 'login/login.view.html'
            })
            .state('/register', {
                url: '/register',
                controller: 'RegisterController',
                controllerAs: 'registerCtrl',
                templateUrl: 'register/register.view.html'
            })
            .state('/employees', {
                url: '/employees',
                controller: 'EmployeesController',
                controllerAs: 'emplCtrl',
                templateUrl: 'employees/employees.view.html'
            })
            .state('/addNew', {
                url: '/addNew',
                controller: 'NewEmployeeController',
                controllerAs: 'newEmplCtrl',
                templateUrl: 'newEmployee/new.employee.view.html'
            })
            .state('/edit', {
                url: '/edit',
                controller: 'EditEmployeeController',
                controllerAs: 'editEmplCtrl',
                templateUrl: 'editEmployee/edit.employee.view.html'
            })
            .state('/about', {
                url: '/about',
                controller: 'AboutController',
                controllerAs: 'aboutCtrl',
                templateUrl: 'about/about.view.html'
            })
            .state('/test', {
                url: '/test',
                controller: 'TestController',
                controllerAs: 'test_ctrl',
                templateUrl: 'test/test.view.html'
            })
            .state('/contact', {
                url: '/contact',
                controller: 'ContactController',
                controllerAs: 'contactCtrl',
                templateUrl: 'contact/contact.view.html'
            });

         $urlRouterProvider.otherwise('/employees');
    }

}());
