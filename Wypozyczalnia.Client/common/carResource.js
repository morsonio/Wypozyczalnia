(function() {
    "use strict";

    angular
        .module("common.services")
        .factory("carResource",
                ["$resource",
                    "appSettings",
                    carResource]);

    function carResource($resource, appSettings) {
        return $resource(appSettings.serverPath + "api/Car/GetAll");
    }
}());