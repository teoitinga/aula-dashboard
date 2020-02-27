import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DadosService {
    readonly dados = [
        ['Janeiro', 80],
        ['Fevereiro', 68],
        ['Março', 49],
        ['Abril', 15],
        ['Maio', 25],
        ['Junho', 27],
        ['julho', 20],
        ['agosto', 19],
        ['setembro', 19],
        ['outubro', 19],
        ['novembro', 30],
        ['dezembro', 70]
    ];

	constructor() {}

	/**
	 * Retorna um observable contendo os dados a serem
	 * exibidos no gráfico.
	 *
	 * @return Observable<any>
	 */
	obterDados(): Observable<any> {
		return new Observable(observable => {
			observable.next(this.dados);
			observable.complete();
		});
	}
}
