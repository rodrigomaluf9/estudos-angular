import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import { DataBindingModule } from './data-binding/data-binding.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DataBindingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
