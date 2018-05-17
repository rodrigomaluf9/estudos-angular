import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  valor: number = 5;

  title = 'app';

  deletarCiclo: boolean = false;

  mudarValor(){
    this.valor++;
  }

  destruirClico(){
    this.deletarCiclo = true;
  }
}
