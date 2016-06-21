module app {
    var main = angular.module("camionManagement",
        ["ngRoute",
            "common.services",
            "camionResourceMock"]);

    main.config(routeConfig);

    routeConfig.$inject = ["$routeProvider"];
    function routeConfig($routeProvider: ng.route.IRouteProvider): void {

        $routeProvider
            .when("/camionList",
            {
                templateUrl: "/app/camiones/camionListView.html",
                controller: "CamionListCtrl as vm"
            })
            .when("/camionDetail/:IdCamion",
            {
                templateUrl: "/app/camiones/camionDetailView.html",
                controller: "CamionDetailCtrl as vm"
            })
            .otherwise("/camionList");
    }
    
}