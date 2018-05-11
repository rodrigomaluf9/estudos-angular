import { ServicoService } from './servico.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  iterpolacao: string;
  lista: Array<string>;

  constructor(private servico: ServicoService) { 
    this.iterpolacao = "Interpolação";
    this.lista = this.servico.getLista();
  }

  ngOnInit() {
  }

}
