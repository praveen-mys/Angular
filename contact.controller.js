

(function () {
    var app = angular.module("contactApp");
    app.controller("contactCtrl", contactCtrl);

    function contactCtrl(ContactDataService) {
        var self = this;
        self.editmode = false;

        ContactDataService.getContatcs().then(function (data) {
            self.contacts = data;
        });
        this.selectedContact = this.contacts[0];

        this.selectContact = function (index) {
            this.selectedContact = this.contacts[index];
        }

        this.toggleEditmode = function () {
            //console.log(this.editMode);
            this.editmode = ! this.editMode;
        }
    }
})();