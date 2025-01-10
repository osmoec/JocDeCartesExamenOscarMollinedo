import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-jugador',
  standalone: true,
  imports: [],
  templateUrl: './jugador.component.html',
  styleUrl: './jugador.component.css'
})
export class JugadorComponent {

  @Input() name: any;
  @Input() posicio: any;
  @Input() ruta: any;
  @Input() puntuacio: any;
 
  constructor() {

  }
}
