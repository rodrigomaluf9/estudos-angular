import { Injectable } from '@angular/core';

@Injectable()
export class ServicoService {

  constructor() { }

  getLista(){
    return ['Angular','JavaScript'];
  }
}
