import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DadosService {
  readonly dados: [
    ['janeiro', 33],
    ['fevereiro', 68],
    ['março', 25],
    ['abril', 14],
    ['maio', 41],
    ['junho', 42],
    ['julho', 23],
    ['agosto', 19],
    ['setembro', 27],
    ['outubro', 8],
    ['novembro', 45],
    ['dezembro', 15]

  ]
  constructor() { }
  obterDados(): Observable<any>{
    return new Observable(
      obervable => {
        obervable.next(this.dados);
        obervable.complete();
      }
    )
  }
}
