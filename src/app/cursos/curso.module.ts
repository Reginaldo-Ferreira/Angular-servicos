import { CommonModule } from '@angular/common';// BrowserModule é usado no mudulo principal, CommonModule para modulo de funcionalidades 
import { NgModule } from '@angular/core';


import { CursosService } from '../cursos/cursos.service';
import { CursosComponent } from './cursos.component';

@NgModule({
  declarations: [
    CursosComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[CursosComponent],//para expor o CursosComponent deve ser colocado no export
  //providers: [ CursosService /** colocando o serviço no providers do modulo principal a instancia do cursosService fica disponivel par toda a aplicaço */]
})
export class CursoModule { }
