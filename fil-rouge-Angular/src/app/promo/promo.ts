import { Referentiel } from '../referentiel/referentiel';

export interface Promo {
    langue:string,
    titre:string,
    description:string,
    lieu:string,
    reference:string,
    fabrique:string,
    dateDebut:Date,
    dateFin:Date,
    referentiel:Referentiel
}
