(function() {
    "use strict";

    angular
        .module("carsManagement")
        .controller("MainCtrl",
        [
            "userAccount",
            MainCtrl
        ]);

    function MainCtrl(userAccount) {
        var main = this;
        main.isLoggedIn = false;
        main.message = "";
        main.userData = {
            userName: "",
            emain: "",
            password: "",
            confirmPassword: ""
        };

        main.login = function() {
            
        }

        main.registerUser = function() {
            userAccount.registerUser(main.userData,
                function(data) {
                    main.message = "... Registration succesful";
                    main.login();
                },
                function(response) {
                    main.isLoggedIn = false;
                    main.message = response.statusText + "\r\n";
                    if (response.data.exceptionMessage) {
                        main.message += response.data.exceptionMessage;
                    }
                    if (response.data.modelState) {
                        for (var key in response.data.modelState) {
                            main.message += response.data.modelState[key] + "\r\n";
                        }
                    }
                });
        }
    };
}());