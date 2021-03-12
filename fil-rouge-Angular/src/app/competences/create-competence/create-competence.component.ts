import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {CompetenceService} from '../../services/competence.service';

@Component({
  selector: 'app-create-competence',
  templateUrl: './create-competence.component.html',
  styleUrls: ['./create-competence.component.css']
})
export class CreateCompetenceComponent implements OnInit {

  competForm: FormGroup;
  grpCompetences:string[]=[
                            'Developpement Frontend',
                            'Developpement Backend',
                            'Design Web'
                          ];
  niveaux:string[]=['Niveau1','Niveau2', 'Niveau3'];

  constructor(
    private competenceService: CompetenceService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.competForm = new FormGroup({
     
    });
  }

  createCompetence(){
    console.log(this.competForm.value);
    this.competenceService.create(this.competForm.value).subscribe(res => {
         console.log('Competence created successfully!');
         this.router.navigateByUrl('compet');
    })
  }

}
