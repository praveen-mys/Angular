

(function () {
    var app = angular.module("contactApp");
    app.value("AppNameSrvc", "My App Header and Footer !!!!");
    app.value("AppNameSrvObject", {
        "name": "praveen",
        "cell": "999999999",
        "city": "bangalore"
    });

    app.value("AppSrvFunction", function () {
        console.log("Hello");
    });

})();