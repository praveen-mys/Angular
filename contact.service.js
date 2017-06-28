
//IIFI function to execute immediatly
(
    function () {
        var app = angular.module("contactApp");
        function AppConf() {
            // var this =[];
            this.name = AppFactory;//"Contact App";
            this.authot = "praveen";
            this.city = "bangalore"
            //return this;
        }

        app.service("AppServiceserv", AppConf); // new AppConf()
    }
)();