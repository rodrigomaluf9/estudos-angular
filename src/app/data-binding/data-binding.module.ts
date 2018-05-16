import { MeuFormModule } from './../meu-form/meu-form.module';
import { ServicoService } from './servico.service';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataBindingComponent } from './data-binding.component';
import { DataBindingDetalheComponent } from './data-binding-detalhe/data-binding-detalhe.component';
import { ClassBindingComponent } from './class-binding/class-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MeuFormModule

  ],
  declarations: [DataBindingComponent,
    DataBindingDetalheComponent,
    ClassBindingComponent,
    EventBindingComponent,
    TwoWayBindingComponent
  ],
  exports: [DataBindingComponent],
  providers:[ServicoService]
})
export class DataBindingModule { }
