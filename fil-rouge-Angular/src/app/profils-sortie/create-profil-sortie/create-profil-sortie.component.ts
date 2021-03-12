import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import {ProfilSortieService} from '../../services/profil-sortie.service';

@Component({
  selector: 'app-create-profil-sortie',
  templateUrl: './create-profil-sortie.component.html',
  styleUrls: ['./create-profil-sortie.component.css']
})
export class CreateProfilSortieComponent implements OnInit {

  psForm: FormGroup;

  constructor(
    private profilSortieService : ProfilSortieService,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.psForm = new FormGroup({
      'libelle': new FormControl('', [Validators.required])
    });
  }
    
  createPs(){
    console.log(this.psForm.value);
    this.profilSortieService.create(this.psForm.value).subscribe(res => {
         console.log('Profil de Sortie created successfully!');
         this.router.navigateByUrl('profilsSortie');
    })
  }


}
