import { Component, OnInit, Input } from '@angular/core';
import {Referentiel} from '../../referentiel';

@Component({
  selector: 'app-item-referentiel',
  templateUrl: './item-referentiel.component.html',
  styleUrls: ['./item-referentiel.component.css']
})
export class ItemReferentielComponent implements OnInit {

@Input() ref : Referentiel

  constructor() { }

  ngOnInit(): void {
  }

}
