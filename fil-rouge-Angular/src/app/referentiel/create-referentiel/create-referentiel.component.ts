import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ReferentielService } from '../../services/referentiel.service';

@Component({
  selector: 'app-create-referentiel',
  templateUrl: './create-referentiel.component.html',
  styleUrls: ['./create-referentiel.component.css']
})
export class CreateReferentielComponent implements OnInit {

  RefForm:FormGroup;

  grpCompetences:string[]=[
                            'Developpement Frontend',
                            'Developpement Backend',
                            'Design Web'
                          ];

  constructor(
    private refService: ReferentielService,
    private router : Router
    )
  {

  }

  ngOnInit(): void {

    this.RefForm = new FormGroup({
      'libelle': new FormControl(),
      'presentation' : new FormControl(),
      'grpComp' : new FormControl(),
      'programme': new FormControl(),
      'evaluation' : new FormControl(),
      'admission' : new FormControl()
    });

  }

  createRef(){
    console.log(this.RefForm.value);
    this.refService.create(this.RefForm.value).subscribe(res => {
      console.log('User created successfully!');
      this.router.navigateByUrl('refs');
    });
  }

}
