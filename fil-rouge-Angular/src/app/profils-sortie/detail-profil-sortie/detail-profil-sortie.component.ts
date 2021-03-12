import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfilSortieService } from 'src/app/services/profil-sortie.service';
import { ProfilSortie } from '../profil-sortie';

@Component({
  selector: 'app-detail-profil-sortie',
  templateUrl: './detail-profil-sortie.component.html',
  styleUrls: ['./detail-profil-sortie.component.css']
})
export class DetailProfilSortieComponent implements OnInit {

  id: number;
  profilSortie: ProfilSortie;

  constructor(
    private psService: ProfilSortieService,
    private route: ActivatedRoute

  ) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.params['id']; 
    this.psService.getOne(this.id).subscribe((data: ProfilSortie)=>{
      this.profilSortie = data['hydra:member'];
    });
  }

}
