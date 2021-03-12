import { GrpCompetences } from "../groupe-competences/grp-competences";
import { NiveauEvaluation } from "../niveau-evaluation";

export interface Competence {
    id:number,
    grpComp: GrpCompetences,
    libelle: string,
    description: string,
    niveau: NiveauEvaluation
}

