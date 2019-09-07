import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from  'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';


import { AppComponent } from './app.component';
import { LiveGoldRateComponent } from './live-gold-rate/live-gold-rate.component';
import { LiveSilverRateComponent } from './live-silver-rate/live-silver-rate.component';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    LiveGoldRateComponent,
    LiveSilverRateComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
