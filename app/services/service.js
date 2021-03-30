angular.module('plunkerApp')
.factory('OfflineModel', function() {
    return {
        greet: function  (name) {
            return 'Hi: ' + name;
        }
    }
});