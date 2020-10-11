import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { FooterComponent } from './components/footer/footer.component';
import { LogoComponent } from './components/header/logo/logo.component';
import { UserLoginComponent } from './components/header/user-login/user-login.component';
import { LogoutComponent } from './components/header/logout/logout.component';
import { ControlsComponent } from './components/controls/controls.component';
import { SearchbarComponent } from './components/controls/searchbar/searchbar.component';
import { AddCourseComponent } from './components/controls/add-course/add-course.component';
import { CoursesListComponent } from './components/courses-list/courses-list.component';
import { CourseItemComponent } from './components/courses-list/course-item/course-item.component';
import { CoursesPageComponent } from './components/courses-page/courses-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BreadcrumbsComponent,
    FooterComponent,
    LogoComponent,
    UserLoginComponent,
    LogoutComponent,
    ControlsComponent,
    SearchbarComponent,
    AddCourseComponent,
    CoursesListComponent,
    CourseItemComponent,
    CoursesPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
