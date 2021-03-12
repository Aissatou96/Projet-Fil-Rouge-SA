import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfilSortieService } from 'src/app/services/profil-sortie.service';
import { ProfilSortie } from '../profil-sortie';

@Component({
  selector: 'app-edit-profil-sortie',
  templateUrl: './edit-profil-sortie.component.html',
  styleUrls: ['./edit-profil-sortie.component.css']
})
export class EditProfilSortieComponent implements OnInit {

  id: number;
  profilSortie: ProfilSortie;
  profilSForm: FormGroup;

  constructor(
    private psService: ProfilSortieService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.params['id'];
      this.psService.getOne(this.id).subscribe((data: ProfilSortie)=>{
        this.profilSortie = data;
      });
      
      this.profilSForm = new FormGroup({
        'libelle': new FormControl('', [Validators.required])
      });
  }

  updateProfilSortie(){
    console.log(this.profilSForm.value);
      this.psService.update(this.id, this.profilSForm.value).subscribe(res => {
           console.log('Profil de Sortie updated successfully!');
           this.router.navigateByUrl('profilsSortie');
      })
  }

}
