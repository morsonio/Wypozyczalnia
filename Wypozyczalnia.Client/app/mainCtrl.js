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
            email: "",
            password: "",
            confirmPassword: ""
        };

        main.login = function() {
            main.userData.grant_type = "password";
            main.userData.userName = main.userData.email;

            userAccount.login.loginUser(main.userData,
                function(data) {
                    main.isLoggedIn = true;
                    main.message = "";
                    main.password = "";
                    main.token = data.access_token;
                },
                function(response) {
                    main.password = "";
                    main.isLoggedIn = false;
                    main.message = response.statusText + "\r\n";
                    if (response.data.exceptionMessage) {
                        main.message += response.data.exceptionMessage;
                    }
                    if (response.data.error) {
                        main.message += response.data.error;

                    }
                });
        }

        main.registerUser = function() {
            userAccount.registration.registerUser(main.userData,
                function(data) {
                    main.message = "... Registration succesful";
                    main.login();
                },
                function(response) {
                    main.isLoggedIn = false;
                    main.message = response.statusText + "\r\n";
                    if (response.data.ExceptionMessage) {
                        main.message += response.data.ExceptionMessage;
                    }
                    if (response.data.ModelState) {
                        for (var key in response.data.ModelState) {
                            main.message += response.data.ModelState[key] + "\r\n";
                        }
                    }
                });
        }
    };
}());