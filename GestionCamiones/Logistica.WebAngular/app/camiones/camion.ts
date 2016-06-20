module app.domain {
    export interface ICamion {
        idCamion: number;
        matricula: string;
        marca: string;
        modelo: string;
        diasAsignados: string;
        zona:string;
        
    }

    export class Camion implements ICamion {

        constructor(public idCamion: number,
            public matricula: string,
            public marca: string,
            public modelo: string,
            public diasAsignados: string,
            public zona:string) {
        }
        
    }
}