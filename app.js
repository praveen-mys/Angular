var app = angular.module("contactApp", []);

app.controller("headerCtrl", headerCtrl);

function headerCtrl(AppSrvFunction, AppCallFunc) {
     //this.headerAppTitle = AppNameSrvObject.name;
    //this.headerAppTitle ="this is Header for the application";
   AppSrvFunction();
//this.headerAppTitle = AppFactory;
   console.log(AppCallFunc.name);
}

app.controller("footerCtrl", footerCtrl);

function footerCtrl(AppSrvFunction) {
   // this.footerAppTitle =AppNameSrvObject.city;
   // this.footerAppTitle ="this is Footer for the application";
    AppSrvFunction();
}