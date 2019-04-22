(function(){
    'use strict';

    angular.module('swApp').config(['$routeProvider', '$locationProvider',
             function($routeProvider, $locationProvider) {

            $routeProvider            

            .when('/', {
                templateUrl: 'app/views/list.html',
                controller: 'listController'
            })

            .when('/details', {
                templateUrl: 'app/views/details.html',
                controller: 'detailsController'
            })

            .otherwise({redirectTo: '/'});


            $locationProvider.hashPrefix('');

        }]);
})();

