import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { QuillEditorModule } from 'ngx-quill-editor';

import { AppComponent } from './app.component';
import { TopNavigationComponent } from './top-navigation/top-navigation.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { PostsListComponent } from './posts-list/posts-list.component';
import { EditPostComponent } from './edit-post/edit-post.component';

const appRoutes: Routes = [
  { path: 'posts', component: AppComponent,
    children: [
      { path: '', component: PostsListComponent },
      { path: 'edit/:id', component: EditPostComponent },
      { path: 'new', component: EditPostComponent }
    ] 
  }
];


@NgModule({
  declarations: [
    AppComponent,
    TopNavigationComponent,
    SideMenuComponent,
    PostsListComponent,
    EditPostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    QuillEditorModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
