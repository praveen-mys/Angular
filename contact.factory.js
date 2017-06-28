
(function () {
    var app = angular.module("contactApp");
    app.factory("AppFactory", function () {
        return "Hello";
    });

    app.factory("AppFactory", function () {
        return "Hello from factory";
    });

    function prepareAppconf(AppFactory) {
        var val = [];
        val.name = AppFactory;//"Contact App";
        val.authot = "praveen";
        val.city = "bangalore"
        return val;
    }

    app.factory("AppCallFunc", prepareAppconf);// prepareAppconf()
})();