import { Component } from '@angular/core';

@Component({
  selector: 'app-cursos',
  standalone: false,

  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.css'
})
export class CursosComponent {
  nomePortal: string;
  cursos: string[] = ["Java", "Angular", "Node.js"];

  constructor() {
    this.nomePortal = "loiane.training";
  }
}
