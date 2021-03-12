import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Profil } from '../profil';
import { ProfilService } from '../../services/profil.service';

@Component({
  selector: 'app-detail-profil',
  templateUrl: './detail-profil.component.html',
  styleUrls: ['./detail-profil.component.css']
})
export class DetailProfilComponent implements OnInit {

  id: number;
  users: any;
  libelle = '';

  constructor(
    public profilService:ProfilService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.params['id']; 
    this.profilService.getOne(this.id).subscribe((data: any)=>{
      this.users = data.users;
      this.libelle = data.libelle;
      
      
      
    },(error)=>{console.log(error);
    });
  }

}
