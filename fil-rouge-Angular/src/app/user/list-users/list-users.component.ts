import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../../services/user.service';
import { Subject } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();

  users : User[] = [];
  @ViewChild(DataTableDirective) dtElement: DataTableDirective;
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true,
      autoWidth: true,
      order: [[0, 'desc']],
      lengthMenu: [5,6,7]
    };
    this.userService.getAll().subscribe((data: User[])=>{
      this.users=data['hydra:member'];
      this.dtTrigger.next();
      console.log(this.users);
    }) 
    
  }

  
  
  deleteUser(id){
    this.userService.delete(id).subscribe(res => {
         this.users = this.users.filter(item => item.id !== id);
         console.log('User deleted successfully!');
    })
  }

}
