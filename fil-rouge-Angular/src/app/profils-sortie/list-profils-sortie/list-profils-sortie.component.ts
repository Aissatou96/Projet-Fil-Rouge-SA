import { Component, OnInit } from '@angular/core';
import {ProfilSortie} from '../profil-sortie';
import {ProfilSortieService} from '../../services/profil-sortie.service';

@Component({
  selector: 'app-list-profils-sortie',
  templateUrl: './list-profils-sortie.component.html',
  styleUrls: ['./list-profils-sortie.component.css']
})
export class ListProfilsSortieComponent implements OnInit {

  profilsSor : ProfilSortie[] = [];

  constructor(public profilSortieService : ProfilSortieService) { }

  ngOnInit(): void {
    this.profilSortieService.getAll().subscribe((data: ProfilSortie[])=>{
      this.profilsSor = data['hydra:member'];
      console.log(this.profilsSor);
    })  
  }
  
  deleteProfilS(id){
    this.profilSortieService.delete(id).subscribe(res => {
         this.profilsSor = this.profilsSor.filter(item => item.id !== id);
         console.log('Profil de Sortie deleted successfully!');
    })
  }


}
