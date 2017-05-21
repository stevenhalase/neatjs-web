import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user = {
    profileimage: 'https://gitlab.com/uploads/user/avatar/56386/tt_avatar_small.jpg',
    coverimage: 'http://www.codingforums.com/attachments/html-and-css/10389d1318642535-how-make-feature-background-strip-css-bokeh-banner-jpg',
    username: 'Joe Schmoe'
  }

  showUserNameEdit: Boolean;

  constructor() {
   }

  ngOnInit() {
  }

  toggleUserNameEditor(){
    this.showUserNameEdit = !this.showUserNameEdit;
    if (this.showUserNameEdit) {
      document.getElementById("username-editor").focus();
    }
  }

}
