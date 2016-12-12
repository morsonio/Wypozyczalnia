(function() {
    "use strict";

    angular
        .module("common.services")
        .factory("carResource",
                ["$resource",
                    "appSettings",
                    "currentUser",
                    carResource
                ]);

    function carResource($resource, appSettings,currentUser) {
        return $resource(appSettings.serverPath + "api/Car/GetAll",
            null,
            {
                'get': {
                    headers: {
                        'Authorization': 'Bearer ' + currentUser.getProfile().token
                    }
                },
                'save': {
                    headers: {
                        'Authorization': 'Bearer ' + currentUser.getProfile().token
                    }
                },
                'update': {
                    method: 'PUT',
                    headers: {
                        'Authorization': 'Bearer ' + currentUser.getProfile().token
                    }
                }
            });
    };
}());