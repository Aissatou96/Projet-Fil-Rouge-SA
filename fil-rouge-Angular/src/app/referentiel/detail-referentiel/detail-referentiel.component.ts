import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReferentielService } from 'src/app/services/referentiel.service';
import { Referentiel } from '../referentiel';

@Component({
  selector: 'app-detail-referentiel',
  templateUrl: './detail-referentiel.component.html',
  styleUrls: ['./detail-referentiel.component.css']
})
export class DetailReferentielComponent implements OnInit {

  id: number;
  ref: Referentiel;

  constructor(
    private refService: ReferentielService,
    private route: ActivatedRoute

  ) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.params['id']; 
    this.refService.getOne(this.id).subscribe((data: Referentiel)=>{
      this.ref = data['hydra:member'];
    });
  }

}
