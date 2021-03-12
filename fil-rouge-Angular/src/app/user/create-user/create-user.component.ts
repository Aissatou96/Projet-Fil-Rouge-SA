import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { User } from '../models/user';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  imageUrl = '';
  userForm:FormGroup;
  image: File;
  options:string[]=['ADMIN', 'FORMATEUR', 'CM', 'APPRENANT'];

  constructor(
    private userService : UserService,
    private router:Router
    ) { }

  ngOnInit():void {
    this.userForm = new FormGroup({
      'prenom': new FormControl(),
      'nom': new FormControl(),
      'email':new FormControl(),
      'username':new FormControl(),
      'password':new FormControl(),
      'statut':new FormControl(),
      'type': new FormControl(),
      'avatar': new FormControl()
    });
   }
   SelectedFile(file: FileList){
     this.image = file.item(0);
     const reader =new FileReader();
     reader.onload= (event: any)=>{
       this.imageUrl = event.target.result;
     };
     reader.readAsDataURL(this.image);
   }

   createUser(){
     const user = new FormData();
     user.append('prenom',this.userForm.value.prenom);
     user.append('nom',this.userForm.value.nom);
     user.append('email',this.userForm.value.email);
     user.append('username',this.userForm.value.prenom);
     user.append('password',this.userForm.value.password);
     user.append('statut',this.userForm.value.statut);
     user.append('type',this.userForm.value.type);
     user.append('avatar',this.image);
     console.log(this.userForm.value);
    this.userService.create(user).subscribe(
      (res) => {
      console.log('User created successfully!');
      this.router.navigateByUrl('users');
    },(error)=>{
      console.log(error);
      
    });

  }


  
}
