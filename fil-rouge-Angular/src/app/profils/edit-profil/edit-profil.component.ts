import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Profil } from '../profil';
import { ProfilService } from '../../services/profil.service';

@Component({
  selector: 'app-edit-profil',
  templateUrl: './edit-profil.component.html',
  styleUrls: ['./edit-profil.component.css']
})
export class EditProfilComponent implements OnInit {

  id: number;
  profil='';
  profilForm: FormGroup;

  constructor(
    public profilService:ProfilService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

    ngOnInit(): void {
      this.id = +this.route.snapshot.params['id'];
      this.profilService.getOne(this.id).subscribe((data: Profil)=>{
        console.log(data);
        
        this.profil = data.libelle;
      });
      
      this.profilForm = new FormGroup({
        'libelle': new FormControl('', [Validators.required])
      });
    }
           
    updateProfil(){
      console.log(this.profilForm.value);
      this.profilService.update(this.id, this.profilForm.value).subscribe(res => {
           console.log('Profil updated successfully!');
           this.router.navigateByUrl('profils');
      })
    }

}
