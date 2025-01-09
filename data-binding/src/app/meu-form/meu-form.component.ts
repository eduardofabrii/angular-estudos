import { Component } from '@angular/core';

@Component({
  selector: 'app-meu-form',
  standalone: false,

  templateUrl: './meu-form.component.html',
  styleUrl: './meu-form.component.css'
})
export class MeuFormComponent {
  nome: string = '';

  pessoa: any = {
    nome: '',
    idade: ''
  };
}
