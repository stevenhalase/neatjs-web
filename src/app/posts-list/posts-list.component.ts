import { Component, OnInit } from '@angular/core';
import { Http, Response }          from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {

  private apiUrl: string = 'http://localhost:8080/posts';
  posts: Array<any> = [];

  constructor(private http: Http) { }

  ngOnInit() {
    this.getPosts().then((data) => {
      this.posts = JSON.parse(data._body);
    }, (error) => {
      console.log(error)
    })
  }

  getPosts(): Promise<any> {
    return this.http.get(this.apiUrl)
                    .toPromise();
  }

}
