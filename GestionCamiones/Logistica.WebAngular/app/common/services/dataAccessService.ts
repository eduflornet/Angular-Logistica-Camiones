module app.common {
    interface IDataAccessService {
        getCamionResource(): ng.resource.IResourceClass<ICamionResource>;
    }

    interface ICamionResource
        extends ng.resource.IResource<app.domain.ICamion> {

    }

    export class DataAccessService
        implements IDataAccessService {

        static $inject = ["$resource"];
        constructor(private $resource: ng.resource.IResourceService) {

        }

        getCamionResource(): ng.resource.IResourceClass<ICamionResource> {
            return this.$resource("/api/camiones/:idCamion");
        }
    }
    angular
        .module("common.services")
        .service("dataAccessService",
        DataAccessService);

}