import { Component } from '@angular/core';

import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  standalone: false,

  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.css'
})
export class CursosComponent {

  nomePortal: string;

  cursos: string[];

  constructor(private cursosService: CursosService) {
    this.nomePortal = "loiane.training";

    var servico = new CursosService();

    this.cursos = this.cursosService.getCursos();
  }
}
