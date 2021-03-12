// import { Component, OnInit } from '@angular/core';
// import { NgForm } from '@angular/forms';
// import { Router } from '@angular/router';
// import { AuthService } from '../services/auth.service'

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent implements OnInit {

//   constructor(
//     private router : Router,
//     private authService : AuthService
//   ) { }

//   ngOnInit(): void {
//   }

  // signIn(username, password){
  //   this.authService.login(username,password)
  //   .subscribe(result=>{
  //     if(result)
  //       this.router.navigate(['/addUser']);
  //   })
  // }
//}

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AuthService } from '../services/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
  })
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;
    error = '';

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private authService: AuthService
    ) {

    }

    ngOnInit() {
      this.loginForm = this.formBuilder.group({
          username: ['', Validators.required],
          password: ['', Validators.required]
      });

      // get return url from route parameters or default to '/'
      this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || 'home';
      console.log(this.returnUrl);
      //console.log(this.username);


  }

  // convenience getter for easy access to form fields
      get f() { return this.loginForm.controls; }

      onSubmit() {
          this.submitted = true;

          // stop here if form is invalid
          if (this.loginForm.invalid) {
              return;
          }

          this.loading = true;
          this.authService.login(this.f.username.value, this.f.password.value)
              .pipe(first())
              .subscribe({
                  next: () => {
                      this.router.navigate([this.returnUrl]);
                  }
              });
      }}
