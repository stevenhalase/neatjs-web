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
import { SettingsComponent } from './settings/settings.component';
import { UserComponent } from './user/user.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { AuthService } from './auth-service/auth.service';

const appRoutes: Routes = [
  { path: 'login', component: LoginPageComponent },
  { path: 'dashboard', component: AdminPageComponent,
    children: [
      { path: '', component: DashboardComponent }
    ] 
  },
  { path: 'posts', component: AdminPageComponent,
    children: [
      { path: '', component: PostsListComponent },
      { path: 'edit/:id', component: EditPostComponent },
      { path: 'new', component: EditPostComponent }
    ] 
  },
  { path: 'settings', component: AdminPageComponent,
    children: [
      { path: '', component: SettingsComponent }
    ] 
  },
  { path: 'user', component: AdminPageComponent,
    children: [
      { path: '', component: UserComponent }
    ] 
  }
];


@NgModule({
  declarations: [
    AppComponent,
    TopNavigationComponent,
    SideMenuComponent,
    PostsListComponent,
    EditPostComponent,
    SettingsComponent,
    UserComponent,
    AdminPageComponent,
    LoginPageComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    QuillEditorModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
