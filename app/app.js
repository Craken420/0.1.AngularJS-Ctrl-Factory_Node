
angular.module('plunkerApp', [
    'ngRoute', // Adding `angular-route.js`
])
.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        // Default route
        .when('/', {
            templateUrl: '../views/list.html',
            controller: 'ContactsCtrl'
        })
}]);