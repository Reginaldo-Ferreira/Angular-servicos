import { Injectable,EventEmitter } from "@angular/core";

import { LogService } from '../shared/log.service';



@Injectable() // injeção de dependêcia 
export class CursosService { // a literação 'export'  torna a classe disponivel para outras

emitirCursoCriado = new EventEmitter<string>();
static criouNovoCurso = new EventEmitter<string>();//não preciso da intancia da classe acesso é direto

private cursos: string[] = [
    'angular 5', 
    'Java', 
    'Phonegap'
];

constructor(private _logService: LogService){
    console.log('CursosService Instanciado');
}

    getCursos(quemChama: String) {
        this._logService.consoleLog(`obtendo lista de cursos - ${ quemChama }`);
        return this.cursos;
    }

    addCurso(curso: string, quemChama: String){
        this._logService.consoleLog(`Criando um novo cursos [ ${ curso }] Chamada -${ quemChama }`);
        this.cursos.push(curso);
        this.emitirCursoCriado.emit(curso);
        CursosService.criouNovoCurso.emit(curso);
    }
}