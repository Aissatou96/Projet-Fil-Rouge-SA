import { Component, OnInit } from '@angular/core';
import { GrpCompetences } from '../grp-competences';

@Component({
  selector: 'app-list-grp-comp',
  templateUrl: './list-grp-comp.component.html',
  styleUrls: ['./list-grp-comp.component.css']
})
export class ListGrpCompComponent implements OnInit {

  grpC:GrpCompetences []=[];
  constructor() { }

  ngOnInit(): void {
  }

}
