var app;
(function (app) {
    var domain;
    (function (domain) {
        var Camion = (function () {
            function Camion(idCamion, matricula, marca, modelo, diasAsignados, zona) {
                this.idCamion = idCamion;
                this.matricula = matricula;
                this.marca = marca;
                this.modelo = modelo;
                this.diasAsignados = diasAsignados;
                this.zona = zona;
            }
            return Camion;
        }());
        domain.Camion = Camion;
    })(domain = app.domain || (app.domain = {}));
})(app || (app = {}));
