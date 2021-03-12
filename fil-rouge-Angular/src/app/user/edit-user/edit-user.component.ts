import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from '../models/user';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  id: number;
  user: User;
  imageUrl = '';
  image: File;
  userForm: FormGroup;
  profils:string[]=[
    'ADMIN', 'FORMATEUR', 'APPRENANT', 'CM'
  ];

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.params['id'];
      this.userService.getOne(this.id).subscribe((data:User)=>{
        console.log(data);
        
        this.user = data;
      });

    this.userForm = new FormGroup({
        prenom: new FormControl(),
        'nom': new FormControl(),
        'email':new FormControl(),
        'username':new FormControl(),
        'statut':new FormControl(),
        'profil': new FormControl(),
        'password': new FormControl(),
        'avatar': new FormControl()
      });
      this.userForm.patchValue({
        username: this.user.username
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
  updateUser(){
    const user = new FormData();
     user.append('prenom',this.userForm.value.prenom);
     user.append('nom',this.userForm.value.nom);
     user.append('email',this.userForm.value.email);
     user.append('username',this.userForm.value.username);
     user.append('password',this.userForm.value.password);
     user.append('statut',this.userForm.value.statut);
     user.append('type',this.userForm.value.profil);
     user.append('avatar',this.image);
     console.log(this.userForm.value);
    console.log(this.userForm.value);
      this.userService.update(this.id, user).subscribe(res => {
           console.log('User updated successfully!');
           this.router.navigateByUrl('users');
      })
  }
}
