import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildStudentComponent } from './child-student/child-student.component';
import { ParentStudentComponent } from './parent-student/parent-student.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildStudentComponent,
    ParentStudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
