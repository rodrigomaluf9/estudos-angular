import { MeuFormModule } from './meu-form/meu-form.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import { DataBindingModule } from './data-binding/data-binding.module';
import { CicloComponent } from './ciclo/ciclo.component';
import { DiretivaNgifComponent } from './diretiva-ngif/diretiva-ngif.component';
import { DiretivaNgswitchComponent } from './diretiva-ngswitch/diretiva-ngswitch.component';
import { DiretivaNgclassComponent } from './diretiva-ngclass/diretiva-ngclass.component';
import { DiretivaNgstyleComponent } from './diretiva-ngstyle/diretiva-ngstyle.component';
import { OperadorElvisComponent } from './operador-elvis/operador-elvis.component';
import { FundoAmareloDirective } from './shared/fundo-amarelo.directive';
import { DiretivasCustomizadasComponent } from './diretivas-customizadas/diretivas-customizadas.component';
import { HighlightMouseDirective } from './shared/highlight-mouse.directive';


@NgModule({
  declarations: [
    AppComponent,
    CicloComponent,
    DiretivaNgifComponent,
    DiretivaNgswitchComponent,
    DiretivaNgclassComponent,
    DiretivaNgstyleComponent,
    OperadorElvisComponent,
    FundoAmareloDirective,
    DiretivasCustomizadasComponent,
    HighlightMouseDirective
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
