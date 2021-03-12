import { Component, OnInit } from '@angular/core';
import { ReferentielService } from 'src/app/services/referentiel.service';
import { Referentiel } from '../referentiel';

@Component({
  selector: 'app-list-referentiels',
  templateUrl: './list-referentiels.component.html',
  styleUrls: ['./list-referentiels.component.css']
})
export class ListReferentielsComponent implements OnInit {

  refs : Referentiel[] = [];

  constructor(public refService : ReferentielService) { }

  ngOnInit(): void {
    this.refService.getAll().subscribe((data: Referentiel[])=>{
      this.refs = data['hydra:member'];
      console.log(this.refs);
    })  
  }
  
  deleteRef(id){
    this.refService.delete(id).subscribe(res => {
         this.refs = this.refs.filter(item => item.id !== id);
         console.log('Referentiel deleted successfully!');
    })
  }


}
