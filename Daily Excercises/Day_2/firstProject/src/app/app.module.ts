import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { InlineComponent } from './inline/inline.component';
import { EmployeeTableComponent } from './employee-table/employee-table.component';
import { FormsModule } from '@angular/forms';
import { TemperaturePipePipe } from './temperature-pipe.pipe';
import { ReversePipe } from './reverse.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    InlineComponent,
    EmployeeTableComponent,
    TemperaturePipePipe,
    ReversePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
