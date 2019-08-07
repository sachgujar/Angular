import { BrowserModule } from '@angular/platform-browser';
import {  BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import{ BsDatepickerModule} from 'ngx-bootstrap/datepicker';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BugHeaderComponent } from './bug-header/bug-header.component';
import { BugInfoComponent } from './bug-info/bug-info.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    BugHeaderComponent,
    BugInfoComponent,
    PersonalInfoComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule ,
    AppRoutingModule,
    BsDatepickerModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
