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

        app.service("ContactDataService", function ($http) {
            var self = this;
            self.getContatcs = function () {
                var promise1 = $http.get("http://localhost:3000/contacts")
                  var promise2 =  promise1.then(function (response) {
                        return response.data;
                    });
            }
            return promise2;
        });
    }
)();