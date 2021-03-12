import { Competence } from "../competences/competence";
import { Referentiel } from "../referentiel/referentiel";

export interface GrpCompetences {
    id:number,
    libelle: string,
    description: string,
    competence: Competence,
    referentiel: Referentiel,
}
