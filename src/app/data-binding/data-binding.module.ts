import { ServicoService } from './servico.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataBindingComponent } from './data-binding.component';
import { DataBindingDetalheComponent } from './data-binding-detalhe/data-binding-detalhe.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DataBindingComponent,
    DataBindingDetalheComponent
  ],
  exports: [DataBindingComponent],
  providers:[ServicoService]
})
export class DataBindingModule { }
