module.exports = {
    RegisterComponents: function (app) {
        app.directive("url", function () {
            return {
                restrict: "E",
                link: function link(scope, element, attrs) {
                    element[0].outerHTML = "<a target='_blank' href='" + (attrs.href || attrs.link) + "'>" + (attrs.text || element.text() || attrs.link) + "</a>";
                }
            };
        });

        app.controller("theController", ["data", function(data){
            angular.extend(this, data.all);
        }]);
    }
}