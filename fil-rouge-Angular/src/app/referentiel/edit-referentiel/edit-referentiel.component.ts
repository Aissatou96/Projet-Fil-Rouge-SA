import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ReferentielService } from 'src/app/services/referentiel.service';
import { Referentiel } from '../referentiel';

@Component({
  selector: 'app-edit-referentiel',
  templateUrl: './edit-referentiel.component.html',
  styleUrls: ['./edit-referentiel.component.css']
})
export class EditReferentielComponent implements OnInit {

  id: number;
  ref: Referentiel;
  RefForm: FormGroup;
  grpCompetences:string[]=[
    'Developpement Frontend',
    'Developpement Backend',
    'Design Web'
  ];


  constructor(
    private refService:ReferentielService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.refService.getOne(this.id).subscribe((data: Referentiel)=>{
      this.ref = data;
    });
    
    this.RefForm = new FormGroup({
      'libelle': new FormControl('', [Validators.required]),
      'presentation': new FormControl('', Validators.required),
      'grpComp': new FormControl('', Validators.required),
      'programme': new FormControl('', Validators.required),
      'evaluation': new FormControl('', Validators.required),
      'admission': new FormControl('', Validators.required)
    });
  }

  updateRef(){
    this.refService.update(this.id, this.RefForm.value).subscribe(res => {
      console.log('Referentiel updated successfully!');
      this.router.navigateByUrl('refs');
    })
  }

}
