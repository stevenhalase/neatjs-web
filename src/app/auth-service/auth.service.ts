import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Response }          from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AuthService {

  private apiAuthUrl: string = 'http://localhost:8080/auth/';
  private apiUserUrl: string = 'http://localhost:8080/users/';

  user: any = {};

  constructor(private http: Http, private router: Router) {
    let localUser = JSON.parse(sessionStorage.getItem('neatJSProfile'));
    if (!localUser) {
      this.user = {
        username: 'Username',
        password: '',
        firstname: 'First Name',
        lastname: 'Last Name'
      }
      this.router.navigate(['login']);
    } else {
      this.user = localUser;
    }
   }

  login(): Promise<Boolean> {
    return new Promise((resolve, reject) => {
      this.http.post(this.apiAuthUrl + 'login', this.user).toPromise().then((data: any) => {
        this.user = JSON.parse(data._body);
        if (this.user) {
          sessionStorage.setItem('neatJSProfile', JSON.stringify(this.user));
          resolve(true);
        } else {
          resolve(false);
        }
      }, (error) => {
        reject(error);
      });
    });
  }

  logout() {
    sessionStorage.removeItem('neatJSProfile');
    this.user = {
        username: 'Username',
        password: '',
        firstname: 'First Name',
        lastname: 'Last Name'
      }
      this.router.navigate(['login']);
  }

  updateUser() {
    return new Promise((resolve, reject) => {
      this.http.put(this.apiUserUrl + this.user._id, this.user).toPromise().then((data: any) => {
        this.user = JSON.parse(data._body);
        if (this.user) {
          sessionStorage.setItem('neatJSProfile', JSON.stringify(this.user));
          resolve(true);
        } else {
          resolve(false);
        }
      }, (error) => {
        reject(error);
      });
    })
  }

}
