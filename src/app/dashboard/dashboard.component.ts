import { Component, OnInit } from '@angular/core';
import { Http, Response }          from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { AuthService } from '../auth-service/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  private apiUrl: string = 'http://localhost:8080/posts/';

  recentPosts: Array<any> = [];
  userPosts: Array<any> = [];

  constructor(private http: Http, private authService: AuthService) { }

  ngOnInit() {
    this.getRecentPosts().then((data) => {
        this.recentPosts = JSON.parse(data._body);
      }, (error) =>{
        console.log(error);
      })
    this.getUserPosts().then((data) => {
        this.userPosts = JSON.parse(data._body);
      }, (error) =>{
        console.log(error);
      })
  }

  getRecentPosts(): Promise<any> {
    return this.http.get(this.apiUrl + 'recent')
                    .toPromise();
  }

  getUserPosts(): Promise<any> {
    return this.http.get(this.apiUrl + 'user/' + this.authService.user._id)
                    .toPromise();
  }

}
