import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/Game';
import { GamesService } from 'src/app/services/games.service';

@Component({
  selector: 'app-cardgame',
  templateUrl: './cardgame.component.html',
  styleUrls: ['./cardgame.component.css']
})
export class CardgameComponent implements OnInit {
  games: Game[] = [];

  constructor(private gamesService: GamesService) {}
  
  ngOnInit(): void { 
    this.gamesService.GetAll().subscribe(result => {
      this.games = result;
      console.log(this.games);
    });
    

  }

}
