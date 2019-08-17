import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyAddPipe } from './my-add.pipe';
import { MyMultPipe } from './my-mult.pipe';
import { MarvellousCheckPipe } from './marvellous-check.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MyAddPipe,
    MyMultPipe,
    MarvellousCheckPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
