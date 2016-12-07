(function () {
    "use strict";
    angular
        .module("carsManagement")
        .controller("CarListCtrl",
                        ["carResource",
                     CarListCtrl]);

    function CarListCtrl(carResource) {
        var vm = this;

        carResource.query(function(data) {
            vm.cars = data;
        });
    }
}());