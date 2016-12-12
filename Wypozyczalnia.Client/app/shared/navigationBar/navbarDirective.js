(function() {
    var app = angular.module('navigation-bar', []);

    app.directive("navigationBar",
        function() {
            return {
                restrict: 'E',
                templateUrl: 'navigation-bar.html',
                controller: function() {
                    
                }
            }
        })
}());