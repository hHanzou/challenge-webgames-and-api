import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/Game';
import { GamesService } from 'src/app/services/games.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  games: Game[] = []
 
  constructor(private gamesService: GamesService) {}
  
  ngOnInit(): void {

    this.gamesService.GetAll().subscribe(result => {
      this.games = result;
      console.log(this.games);
    });

  }

}