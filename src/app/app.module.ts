import { MeuFormModule } from './meu-form/meu-form.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import { DataBindingModule } from './data-binding/data-binding.module';
import { InputPropertyComponent } from './input-property/input-property.component';
import { OutputPropertyComponent } from './output-property/output-property.component';


@NgModule({
  declarations: [
    AppComponent,
    InputPropertyComponent,
    OutputPropertyComponent
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
