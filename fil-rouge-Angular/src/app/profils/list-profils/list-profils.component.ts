import { Component, OnInit } from '@angular/core';
import { Profil } from '../profil';
import { ProfilService } from '../../services/profil.service';

@Component({
  selector: 'app-list-profils',
  templateUrl: './list-profils.component.html',
  styleUrls: ['./list-profils.component.css']
})
export class ListProfilsComponent implements OnInit {

  profils : Profil[] = [];

  constructor(public profilService : ProfilService) { }

  ngOnInit(): void {
    this.profilService.getAll().subscribe((data: Profil[])=>{
      this.profils = data['hydra:member'];
      console.log(this.profils);
    })  
  }
  
  deleteProfil(id){
    this.profilService.delete(id).subscribe(res => {
         this.profils = this.profils.filter(item => item.id !== id);
         console.log('Profil deleted successfully!');
    })
  }

}
