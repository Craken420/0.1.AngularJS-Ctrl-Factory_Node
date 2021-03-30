angular.module('plunkerApp')
.controller('ContactsCtrl', ['$scope', 'OfflineModel', function($scope, OfflineModel) {
    $scope.server = 'Server form angular controller';
    $scope.greet = OfflineModel.greet('Jorge');
}]);