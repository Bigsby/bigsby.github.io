(function () {
    "use strict";

    var appName = "bigs";

    var app = angular.module(appName, ["ngSanitize"]);

    app.controller("theController", ["$http", function($http){
        var vm = this;
        $http.get("data/all.json").then(function(response){
            angular.extend(vm, response.data);
        });
    }]);

    app.directive("url", function(){
        return {
            restrict: "E",
            link: function link(scope, element, attrs) {
                element.html("<a target='_blank' href='" + attrs.link + "'>" + (attrs.text || attrs.link) + "</a>");
            }
        };
    });

    app.config(["$sceProvider", function($sceProvider){
        $sceProvider.enabled(false);
    }]);

    angular.bootstrap(document, [appName]);
})();