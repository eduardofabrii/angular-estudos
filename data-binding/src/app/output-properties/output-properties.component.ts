import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-contador',
  standalone: false,

  templateUrl: './output-properties.component.html',
  styleUrl: './output-properties.component.css'
})
export class OutputPropertiesComponent {
  @Input() numero: number = 0;
  @Output() mudouValor = new EventEmitter();

  decrementar() {
    this.numero--;
    this.mudouValor.emit({novoValor: this.numero})
  }

  incrementar() {
    this.numero++;
    this.mudouValor.emit({novoValor: this.numero})
  }
}
