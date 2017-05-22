import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../auth-service/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  resettingPassword: Boolean = false;
  successfulLogin: Boolean = true;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  login() {
     this.authService.login().then((data) => {
      this.successfulLogin = data;
      if (this.successfulLogin === true) {
        this.router.navigate(['dashboard'])
      }
     }, (error) => {
       console.log(error);
     })
  }

}
