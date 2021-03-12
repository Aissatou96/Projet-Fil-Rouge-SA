import {GrpCompetences} from '../groupe-competences/grp-competences';
export interface Referentiel {
    id: number,
    libelle: string,
    presentation: string,
    grpComp: GrpCompetences,
    programme: string,
    evaluation: string,
    admission: string
}
