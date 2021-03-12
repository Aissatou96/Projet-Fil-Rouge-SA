import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';

import { DataTablesModule } from "angular-datatables";


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CreateUserComponent } from './user/create-user/create-user.component';
import { DetailUserComponent } from './user/detail-user/detail-user.component';
import { ListUsersComponent } from './user/list-users/list-users.component';
import { ItemUserComponent } from './user/list-users/item-user/item-user.component';
import { CreateCompetenceComponent } from './competences/create-competence/create-competence.component';
import { ListCompetencesComponent } from './competences/list-competences/list-competences.component';
import { CreateGrpCompComponent } from './groupe-competences/create-grp-comp/create-grp-comp.component';
import { ListGrpCompComponent } from './groupe-competences/list-grp-comp/list-grp-comp.component';
import { CreateProfilComponent } from './profils/create-profil/create-profil.component';
import { ListProfilsComponent } from './profils/list-profils/list-profils.component';
import { CreateProfilSortieComponent } from './profils-sortie/create-profil-sortie/create-profil-sortie.component';
import { ListProfilsSortieComponent } from './profils-sortie/list-profils-sortie/list-profils-sortie.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CreateReferentielComponent } from './referentiel/create-referentiel/create-referentiel.component';
import { ListReferentielsComponent } from './referentiel/list-referentiels/list-referentiels.component';
import { CreatePromoComponent } from './promo/create-promo/create-promo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { DetailProfilComponent } from './profils/detail-profil/detail-profil.component';
import { EditProfilComponent } from './profils/edit-profil/edit-profil.component';
import { EditUserComponent } from './user/edit-user/edit-user.component';
import { DetailProfilSortieComponent } from './profils-sortie/detail-profil-sortie/detail-profil-sortie.component';
import { EditProfilSortieComponent } from './profils-sortie/edit-profil-sortie/edit-profil-sortie.component';
import { JwtInterceptorProviders} from './services/jwt.interceptor';
import { UploadImageComponent } from './user/upload-image/upload-image.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EditGrpCompComponent } from './groupe-competences/edit-grp-comp/edit-grp-comp.component';
import { EditReferentielComponent } from './referentiel/edit-referentiel/edit-referentiel.component';
import { DashboardFormateurComponent } from './formateur/dashboard-formateur/dashboard-formateur.component';
import { DashboardApprenantComponent } from './apprenant/dashboard-apprenant/dashboard-apprenant.component';
import { DashboardCmComponent } from './cm/dashboard-cm/dashboard-cm.component';
import { ItemReferentielComponent } from './referentiel/list-referentiels/item-referentiel/item-referentiel.component';
import { DetailReferentielComponent } from './referentiel/detail-referentiel/detail-referentiel.component';
import { ItemGrpCompComponent } from './groupe-competences/list-grp-comp/item-grp-comp/item-grp-comp.component';

//import { IfRolesDirective } from './if-roles.directive';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    CreateUserComponent,
    DetailUserComponent,
    ListUsersComponent,
    ItemUserComponent,
    CreateCompetenceComponent,
    ListCompetencesComponent,
    CreateGrpCompComponent,
    ListGrpCompComponent,
    CreateProfilComponent,
    ListProfilsComponent,
    CreateProfilSortieComponent,
    ListProfilsSortieComponent,
    SidebarComponent,
    CreateReferentielComponent,
    ListReferentielsComponent,
    CreatePromoComponent,
    HomeComponent,
    DetailProfilComponent,
    EditProfilComponent,
    EditUserComponent,
    DetailProfilSortieComponent,
    EditProfilSortieComponent,
    UploadImageComponent,
    PageNotFoundComponent,
    EditGrpCompComponent,
    EditReferentielComponent,
    DashboardFormateurComponent,
    DashboardApprenantComponent,
    DashboardCmComponent,
    ItemReferentielComponent,
    DetailReferentielComponent,
    ItemGrpCompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxQRCodeModule,
    DataTablesModule
    
  ],
  providers: [
    JwtInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
