var app;
(function (app) {
    var camionList;
    (function (camionList) {
        var CamionListCtrl = (function () {
            function CamionListCtrl(dataAccessService) {
                var _this = this;
                this.dataAccessService = dataAccessService;
                this.titulo = "Listado de Camiones";
                this.camiones = [];
                var camionResource = dataAccessService.getCamionResource();
                camionResource.query(function (data) {
                    _this.camiones = data;
                });
            }
            CamionListCtrl.$inject = ["dataAccessService"];
            return CamionListCtrl;
        }());
        angular
            .module("camionManagement")
            .controller("CamionListCtrl", CamionListCtrl);
    })(camionList = app.camionList || (app.camionList = {}));
})(app || (app = {}));
