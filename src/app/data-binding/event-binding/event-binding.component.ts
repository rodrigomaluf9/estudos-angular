import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  valorAtual: string = '';
  valorSalvo = '';

  isMouseOver: boolean = false;

  constructor() { }

  botaoClicado() {
    alert("Clicou né?");
  }

  onKeyUp(evento: KeyboardEvent) {
    console.log(evento);
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  salvarValor(valor){
    this.valorSalvo = valor;
  }

  onMouseOverOut(){
    this.isMouseOver = !this.isMouseOver;
  }

  ngOnInit() {
  }

}
