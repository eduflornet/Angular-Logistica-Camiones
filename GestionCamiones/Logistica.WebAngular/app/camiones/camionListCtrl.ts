module app.camionList {
    interface ICamionListModel {
        titulo: string;
        camiones: app.domain.ICamion[];
        
    }

    class CamionListCtrl implements ICamionListModel {
        title: string;
        camion: app.domain.ICamion[];

        static $inject = ["dataAccessService"];
        constructor(private dataAccessService: app.common.DataAccessService) {
            this.titulo = "Listado de Camiones";
            this.camiones = [];

            var camionResource = dataAccessService.getCamionResource();
            camionResource.query((data: app.domain.ICamion[]) => {
                this.camiones = data;
            });
        }

        camiones: typeof undefined[];
        titulo: string;
    }

    angular
        .module("camionManagement")
        .controller("CamionListCtrl",
        CamionListCtrl);
}