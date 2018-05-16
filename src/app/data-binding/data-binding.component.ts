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

  nomeDoCurso: string = 'Angular';

  valorInicial: number= 15;
  
  constructor(private servico: ServicoService) { 
    this.iterpolacao = "Interpolação";
    this.lista = this.servico.getLista();
  }

  onMudouValor(evento){
    console.log(evento.novoValor);
  }

  ngOnInit() {
  }

}
