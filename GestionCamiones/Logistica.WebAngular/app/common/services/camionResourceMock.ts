module app.common {

    var mockResource = angular
        .module("camionResourceMock",
        ["ngMockE2E"]);

    mockResource.run(mockRun);

    mockRun.$inject = ["$httpBackend"];
    function mockRun($httpBackend: ng.IHttpBackendService): void {
        var camiones: app.domain.ICamion[] = [];
        var camion: app.domain.ICamion;

        camion = new app.domain.Camion(1, "Matri-12345", "Marca-12345", "Modelo-12345", "L-X-V",
            "Centro");
        camiones.push(camion);

        camion = new app.domain.Camion(2, "Matri-67890", "Marca-67890", "Modelo-67890", "M-J-S",
            "Norte");
        camiones.push(camion);

        camion = new app.domain.Camion(3, "Matri-2468", "Marca-2468", "Modelo-2468", "D-X-V",
            "Sur");
        camiones.push(camion);

        camion = new app.domain.Camion(4, "Matri-3690", "Marca-3690", "Modelo-3690", "M-X-S",
            "Oeste");
        camiones.push(camion);
        
        var camionUrl = "/api/camiones";

        $httpBackend.whenGET(camionUrl).respond(camiones);

        var editingRegex = new RegExp(camionUrl + "/[0-9][0-9]*", '');
        $httpBackend.whenGET(editingRegex).respond(function (method, url, data) {
            var camion = { idCamion: 0 };
            var parameters = url.split('/');
            var length = parameters.length;
            var id = parameters[length - 1];

            if (id != undefined) {
                for (var i = 0; i < camiones.length; i++) {
                    
                        camion = camiones[i];
                        
                    }
                }
            
            return [200, camion, {}];
        });

        // Catch all for testing purposes
        $httpBackend.whenGET(/api/).respond(function (method, url, data) {
            return [200, camiones, {}];
        });

        // Pass through any requests for application files
        $httpBackend.whenGET(/app/).passThrough();
    }
}