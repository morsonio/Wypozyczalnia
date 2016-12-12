(function() {
    var app = angular.module('login-partial', []);

    app.controller('loginPartialCtrl', function () {
        this.loginForm = {};

        this.loginto = function (product) {
            product.reviews.push(this.review);
            this.review = {};
        };
    });

    app.directive("loginPartial",
        function() {
            return {
                restrict: 'E',
                templateUrl: "login-partialView.html"
            };
        });
}());