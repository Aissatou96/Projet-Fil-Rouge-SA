import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { ProfilService } from '../../services/profil.service';

@Component({
  selector: 'app-create-profil',
  templateUrl: './create-profil.component.html',
  styleUrls: ['./create-profil.component.css']
})
export class CreateProfilComponent implements OnInit {

  profilForm: FormGroup;

  constructor(
    private profilService : ProfilService,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.profilForm = new FormGroup({
      'libelle': new FormControl('', [Validators.required])
    });
  }
    
  createProfil(){
    console.log(this.profilForm.value);
    this.profilService.create(this.profilForm.value).subscribe(res => {
         console.log('Profil created successfully!');
         this.router.navigateByUrl('profils');
    })
  }

}
