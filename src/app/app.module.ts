import { MeuFormModule } from './meu-form/meu-form.module';
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
    DataBindingModule,
    MeuFormModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
