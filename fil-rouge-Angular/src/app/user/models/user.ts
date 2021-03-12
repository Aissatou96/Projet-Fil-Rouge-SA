import { Profil } from "src/app/profils/profil";

export interface User {
        id:number,
        avatar?:string,
        prenom:string,
        nom:string,
        email:string,
        username:string,
        password:string,
        statut:string,
        profil: Profil
}
