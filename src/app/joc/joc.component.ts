import {Component, OnInit} from '@angular/core';
import {Joc} from "../../models/joc";
import {JugadorComponent} from "../jugador/jugador.component";
import {NgForOf, NgIf, NgStyle} from "@angular/common";

@Component({
  selector: 'app-joc',
  standalone: true,
  imports: [
    JugadorComponent,
    NgStyle,
    NgForOf,
    NgIf
  ],
  templateUrl: './joc.component.html',
  styleUrl: './joc.component.css'
})
export class JocComponent implements OnInit {
  pickCardAnimation = false;
  currentCard: string | undefined | any = '';
  game: Joc | undefined;
  jugador: number = 0
  puntuacioA: number = 0
  jugadors: string[] = ["Mono","Pingui","Josep"]

  constructor() {
    this.jugador
    this.puntuacioA = 0
  }

  ngOnInit(): void {
    this.newGame();
  }

  newGame() {
    this.game = new Joc();
    console.log(this.game)

  }

  takeCard() {
    if(!this.pickCardAnimation){
      this.currentCard = this.game?.stack.pop();
      this.pickCardAnimation = true;
      var puntuacio =   parseInt(this.currentCard.slice(this.currentCard.search("_")+1))
      var actual = this.puntuacioA
     this.puntuacioA = actual + puntuacio
      console.log(this.puntuacioA);
      // @ts-ignore
      if (this.jugador == 0){
        // @ts-ignore
        document.getElementById("Mono").innerText = this.puntuacioA
      }
      else if(this.jugador == 1){
        // @ts-ignore
        document.getElementById("Pingui").innerText = this.puntuacioA
      }
      else if (this.jugador == 2){
        // @ts-ignore
        document.getElementById("Josep").innerText = this.puntuacioA


      }


      setTimeout(()=> {
        this.game?.playedCards.push(this.currentCard);
        this.pickCardAnimation = false;
      }, 1000);
    }

  }

  pujar(){
    this.jugador++
    this.puntuacioA = 0
  }



}
