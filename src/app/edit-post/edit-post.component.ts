import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http, Response }          from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { AuthService } from '../auth-service/auth.service';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {

  public editor;
  public editorContent = `<h3>I am Example content</h3>`;
  public editorOptions = {
    placeholder: "insert content..."
  };

  id: String;
  title: String;
  private sub: any;
  private apiUrl: string = 'http://localhost:8080/posts/';
  post: any = {
    title: 'Test Post Title'
  };
  showSuccessNotification: Boolean = false;

  constructor(private route: ActivatedRoute, private http: Http, private authService: AuthService) { }

  ngOnInit() {
    this.title = 'Add New Post';
    this.sub = this.route.params.subscribe(params => {
       this.id = params['id'];
    });

    if (this.id !== undefined) {
      this.getPost().then((data) => {
        this.post = JSON.parse(data._body);
        this.post.content = JSON.parse(data._body).fields[0];
      }, (error) =>{
        console.log(error);
      })
    }

    if (this.id !== undefined) {
      this.title = 'Edit Post';
    } else {
      this.title = 'Add New Post';
    }
  }

  getPost(): Promise<any> {
    return this.http.get(this.apiUrl + this.id)
                    .toPromise();
  }

  submitPost() {
    this.post.fields = [this.post.content];
    this.post.createdon = new Date();
    this.post.createdby = this.authService.user;
    this.http.post(this.apiUrl, this.post)
      .toPromise().then((data) => {
        console.log(data);
        this.showNotification();
      }, (error) => {
        console.log(error)
      });
  }

  updatePost() {
    this.post.fields = [this.post.content];
    this.post.modifiedon = new Date();
    this.post.modifiedby = this.authService.user;
    this.http.put(this.apiUrl + this.id, this.post)
      .toPromise().then((data) => {
        console.log(data);
        this.showNotification();
      }, (error) => {
        console.log(error)
      });
  }

  showNotification() {
    this.showSuccessNotification = true;
    setTimeout(() => {
      this.showSuccessNotification = false;
    }, 2000);
  }

  closeNotification() {
    this.showSuccessNotification = false;
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  onEditorBlured(quill) {
    // console.log('editor blur!', quill);
  }

  onEditorFocused(quill) {
    // console.log('editor focus!', quill);
  }

  onEditorCreated(quill) {
    this.editor = quill;
    // console.log('quill is ready! this is current quill instance object', quill);
  }

  onContentChanged({ quill, html, text }) {
    // console.log('quill content is changed!', quill, html, text);
  }

}
