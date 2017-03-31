module.exports = {
    RegisterComponents: function (app) {


        app.controller("mainController", ["data", function (data) {
            this.sections = data.sections;
        }]);

        app.controller("developerController", ["data", function (data) {
            angular.extend(this, data.development);
        }]);

        app.controller("workController", ["data", function (data) {
            this.companies = data.work;
        }]);

        app.controller("petController", ["data", function (data) {
            this.projects = data.pet;
        }]);

        app.component("devCategory", {
            templateUrl: templatePath("devCategory"),
            bindings: {
                category: "<",
                inner: "<"
            }
        });

        app.component("devItem", {
            templateUrl: templatePath("devItem"),
            bindings: {
                item: "<"
            }
        });
    }
}