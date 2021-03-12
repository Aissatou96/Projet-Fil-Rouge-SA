import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from '../models/user';
import { NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels } from '@techiediaries/ngx-qrcode';

@Component({
  selector: 'app-detail-user',
  templateUrl: './detail-user.component.html',
  styleUrls: ['./detail-user.component.css']
})
export class DetailUserComponent implements OnInit {

  elementType = NgxQrcodeElementTypes.URL;
  correctionLevel = NgxQrcodeErrorCorrectionLevels.HIGH;
  value: any;
  id: number;
  user: User;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.params['id']; 
    this.userService.getOne(this.id).subscribe((data: User)=>{
      this.user = data;
      this.value = `
        Prenom: ${data.prenom}
        Nom: ${data.nom}
        Email: ${data.email}
        Username: ${data.username}
        Type: ${data['@type']}

      `;
      console.log(data);
    });

  }

  print(){
    window.print();
  }
}
