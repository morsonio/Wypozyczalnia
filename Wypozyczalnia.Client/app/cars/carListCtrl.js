(function () {
    "use strict";
    angular
        .module("carsManagement")
        .controller("CarListCtrl",
                     CarListCtrl);

    function CarListCtrl() {
        var vm = this;

        vm.cars = [
            {
                "carId": 1,
                "carBrand": "Opel",
                "carModel": "Vectra",
                "carAvailable": "true"
            },
            {
                "carId": 2,
                "carBrand": "Mazda",
                "carModel": "6",
                "carAvailable": "false"
            }
        ];
    }
}());