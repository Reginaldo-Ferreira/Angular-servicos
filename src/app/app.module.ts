import { BrowserModule } from '@angular/platform-browser';// BrowserModule é usado no modulo principal
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CursoModule } from './cursos/Curso.module';
//import { CursosService } from './cursos/cursos.service';
import { CriarCursoModule } from './criar-curso/criar-curso.module';
import { LogService } from './shared/log.service';


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    CriarCursoModule,
    CursoModule
  ],

  //providers: [CursosService /** colocando o serviço no providers do modulo principal a instancia do cursosService fica disponível uma unica instância para toda a aplicaço */],
  providers:[LogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
