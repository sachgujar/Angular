import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MarvellousComponent } from './marvellous/marvellous.component';
import { AddMulPipe } from './pipes/add-mul.pipe';
import { MulPipe } from './pipes/mul.pipe';
import { MarvellousChkPipe } from './pipes/marvellous-chk.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MarvellousComponent,
    AddMulPipe,
    MulPipe,
    MarvellousChkPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
