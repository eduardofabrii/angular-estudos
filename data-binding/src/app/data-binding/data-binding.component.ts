import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  standalone: false,

  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
  url: string = "https://www.linkedin.com/in/eduardofabri/";
  valor: any = 5;
  cursoAngular: boolean = false;
  urlImg = "https://picsum.photos/500/250?grayscale";

  constructor() {

  }

  getCurtirCurso() {
    const novoParagrafo = document.createElement("p");
    document.body.appendChild(novoParagrafo);

    // return true; // esse return serve para mostrar que a interpolação aceita operadores lógicos, && || etc.

    if (this.cursoAngular) {
      novoParagrafo.textContent = "Adicionou curtido";
      this.cursoAngular = false;
    } else {
      novoParagrafo.textContent = "Tirou curtida";
      this.cursoAngular = true;
    }
  }

  getValor() {
    return 9;
  }
}
