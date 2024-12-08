import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrimeiroComponent } from "./primeiro-projeto/meu-primeiro.component";
import { MeuPrimeiro2Component } from './meu-primeiro2/meu-primeiro2.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PrimeiroComponent, MeuPrimeiro2Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Projeto n°1';
}
