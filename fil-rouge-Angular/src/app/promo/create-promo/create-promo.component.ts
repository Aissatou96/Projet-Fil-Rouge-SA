import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-promo',
  templateUrl: './create-promo.component.html',
  styleUrls: ['./create-promo.component.css']
})
export class CreatePromoComponent implements OnInit {

  promoForm:FormGroup;
  langue:string[]=['Français', 'Anglais'];
  fabriques:string[]=[];
  referentiels:string[]=[];
  constructor() { }

  ngOnInit(): void {

    this.promoForm = new FormGroup({
      'langue': new FormControl('', [Validators.required]),
      'titre': new FormControl('', [Validators.required]),
      'description': new FormControl('', [Validators.required]),
      'lieu': new FormControl('', [Validators.required]),
      'reference': new FormControl('', [Validators.required]),
      'fabrique': new FormControl('', [Validators.required]),
      'dateDebut': new FormControl('', [Validators.required]),
      'dateFin': new FormControl('', [Validators.required]),
      'referentiel': new FormControl('', [Validators.required])
    });
  }


  createPromo(){

  }
}
