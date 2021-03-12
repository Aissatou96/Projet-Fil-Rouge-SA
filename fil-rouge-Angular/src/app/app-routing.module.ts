import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateProfilComponent } from 'src/app/profils/create-profil/create-profil.component';
import {ListProfilsComponent} from 'src/app/profils/list-profils/list-profils.component';
import {DetailProfilComponent} from 'src/app/profils/detail-profil/detail-profil.component';
import {EditProfilComponent} from 'src/app/profils/edit-profil/edit-profil.component';
import {LoginComponent} from 'src/app/login/login.component';
import { HomeComponent } from 'src/app/home/home.component';
import { DetailUserComponent } from './user/detail-user/detail-user.component';
import { ListUsersComponent } from './user/list-users/list-users.component';
import { CreateUserComponent } from './user/create-user/create-user.component';
import { EditUserComponent } from './user/edit-user/edit-user.component';
import { CreateProfilSortieComponent } from './profils-sortie/create-profil-sortie/create-profil-sortie.component';
import { ListProfilsSortieComponent } from './profils-sortie/list-profils-sortie/list-profils-sortie.component';
import { DetailProfilSortieComponent } from './profils-sortie/detail-profil-sortie/detail-profil-sortie.component';
import { EditProfilSortieComponent } from './profils-sortie/edit-profil-sortie/edit-profil-sortie.component';
import { CreateCompetenceComponent } from './competences/create-competence/create-competence.component';
import { ListCompetencesComponent } from './competences/list-competences/list-competences.component';
import { CreateGrpCompComponent } from './groupe-competences/create-grp-comp/create-grp-comp.component';
import { ListGrpCompComponent } from './groupe-competences/list-grp-comp/list-grp-comp.component';
import { CreateReferentielComponent } from './referentiel/create-referentiel/create-referentiel.component';
import { CreatePromoComponent } from './promo/create-promo/create-promo.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EditGrpCompComponent } from './groupe-competences/edit-grp-comp/edit-grp-comp.component';
import { EditReferentielComponent } from './referentiel/edit-referentiel/edit-referentiel.component';
import { ListReferentielsComponent } from './referentiel/list-referentiels/list-referentiels.component';
import { DetailReferentielComponent } from './referentiel/detail-referentiel/detail-referentiel.component';
//import {AuthGuard} from '../../src/app/guards/auth.guard';


const routes: Routes = [
 
  { path: '', redirectTo: '/login', pathMatch: 'full'},

  { path:"login", component: LoginComponent},

  { path:"home", component: HomeComponent},

  { path: 'addProfil', component: CreateProfilComponent },
  { path:'profils', component:ListProfilsComponent }, 
  { path: 'profils/detail/:id', component: DetailProfilComponent }, 
  { path: 'profils/edit/:id', component: EditProfilComponent }, 
               
  { path:"addUser", component:CreateUserComponent },
  { path:'users', component:ListUsersComponent },
  { path:'users/detail/:id', component:DetailUserComponent},
  { path:'users/edit/:id', component:EditUserComponent},
             
  { path: 'addPS', component: CreateProfilSortieComponent },
  { path: 'profilsSortie', component:ListProfilsSortieComponent },
  { path: 'ps/detail/:id', component:DetailProfilSortieComponent },  
  { path: 'ps/edit/:id', component: EditProfilSortieComponent },
           
  { path: 'addCompet', component:CreateCompetenceComponent },
  { path:'compet', component:ListCompetencesComponent },

  { path: 'addGrpComp', component:CreateGrpCompComponent},
  { 
    path: 'grpCompet', 
    component:ListGrpCompComponent,
    children:[
                { path:'id/edit', component:EditGrpCompComponent }
             ]
  },

  { path:'addRef', component:CreateReferentielComponent},
  {
    path: 'refs', component:ListReferentielsComponent,
    children:[
              { path:'id/edit', component:EditReferentielComponent },
              { path:'id/detail', component:DetailReferentielComponent}
             ]
  },

  {path:'addPromo', component:CreatePromoComponent},

  { path:'not-found', component:PageNotFoundComponent},
  { path: '**', redirectTo:'/not-found'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
