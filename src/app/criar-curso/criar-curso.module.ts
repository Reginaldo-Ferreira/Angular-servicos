import { CommonModule } from '@angular/common';// BrowserModule é usado no mudulo principal, CommonModule para modulo de funcionalidades 
import { NgModule } from '@angular/core';


import { CursosService } from '../cursos/cursos.service';
import { CriarCursoComponent } from './criar-curso.component';
import { ReceberCursoCriadoComponent } from '../receber-curso-criado/receber-curso-criado.component';

@NgModule({
  declarations: [
    CriarCursoComponent,
    ReceberCursoCriadoComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[CriarCursoComponent],//para expor o CriarCursoComponent deve ser colocado no export
  //providers: [CursosService /** colocando o serviço no providers do modulo principal a instancia do cursosService fica disponivel par toda a aplicaço */]
})
export class CriarCursoModule { }
