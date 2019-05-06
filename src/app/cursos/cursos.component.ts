import { Component, OnInit } from '@angular/core';

import {CursosService} from './cursos.service'

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css'],
  providers: [ CursosService]
})
export class CursosComponent implements OnInit {

  cursos: string[] =[];

  //se o modificado de acesso for 'private', esta linha abaixo não é mais necessária..
 // cursosService: CursosService;

  constructor( private cursosService: CursosService ) {
   // this.cursosService = new CursosService();// com o decorator @Injectable() esse código não mais necessário.
   }

  ngOnInit() {

    this.cursos = this.cursosService.getCursos("CursosComponent");
  /*   this.cursosService.emitirCursoCriado.subscribe(
      curso => console.log(curso)
    ); */

    // linha anterior mais simples somente adiciona o curso
    CursosService.criouNovoCurso.subscribe(curso => this.cursos.push(curso));

/*      CursosService.criouNovoCurso.subscribe(
      function(curso){
      console.log(`CursosComponent Add- ${ curso} `)
       return this.cursos.push(curso);    
      }
    );  */

  /*   CursosService.criouNovoCurso.subscribe(
      curso => this.novoCurso = curso,// variavel local para manipulção interna
      this.cursos.push(this.novoCurso),// deste jeito é adcionado nada ao array
      console.log(`CursosComponent Add- ${ this.novoCurso} `) // só execulta uma vez ...

    ); */
  }

}
