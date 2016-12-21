(function () {
    "use strict";

    var app = angular.module("carsManagement",
        [
            "common.services",
            "ui.router"
        ]);

    app.config([
        "$stateProvider",
        "$urlRouterProvider",
        function($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise("/logowanie");

            $stateProvider
                .state("home",
                {
                    url: "/",
                    templateUrl: "app/login/loginView.html",
                    controller: "loginCtrl as loginVm"
                })
                .state("loginPartial",
                {
                    url: "/logowanie",
                    templateUrl: "app/login/loginView.html",
                    controller: "loginCtrl as loginVm"
                })
            .state("registerPartial",
                {
                    url:"/rejestracja",
                    templateUrl: "app/register/registerView.html",
                    controller:"registerCtrl as registerVm"
                })
            .state("bookingsPartial",
                {
                    url: "/rezerwacja",
                    templateUrl: "app/bookings/showBookingsView.html"
                })
            .state("carsPartial",
                {
                    url: "/dodajSamochod",
                    templateUrl: "app/cars/addCarView.html"
                })
        }
    ]);

}());