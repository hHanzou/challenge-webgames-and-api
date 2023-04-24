import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { Game } from 'src/app/Game';
import { GamesService } from 'src/app/services/games.service';

@Component({
  selector: 'app-editgame',
  templateUrl: './editgame.component.html',
  styleUrls: ['./editgame.component.css']
})
export class EditgameComponent implements OnInit {
  games?: Game;
  form: any;
  formtittle: string = "";

  constructor(private gamesService: GamesService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    console.log(id)
    this.gamesService.GetById(id).subscribe(result => {     
      this.games = result
      console.log(this.games);
    });
    
    this.formtittle = "Edit Game";
    this.form = new FormGroup({
      GameName: new FormControl(this.games?.gameName),
      GameRelease: new FormControl(this.games?.gameRelease),
      GameDetails: new FormControl(this.games?.gameDetails),
      GameDevs: new FormControl(this.games?.gameDevs)  
    })

  }
  SendForm(): void{
    const gameform = this.form.value;
    console.log('deu')

    const game: Game = {
      gameId: gameform.GameId ?? this.games?.gameId,
      gameName: gameform.GameName ?? this.games?.gameName,
      gameRelease: gameform.GameRelease ?? this.games?.gameRelease,
      gameDetails: gameform.GameDetails ?? this.games?.gameDetails,
      gameDevs: gameform.GameDevs ?? this.games?.gameDevs
      }
      console.log(game, gameform)

    this.gamesService.UpdateGame(game).subscribe(result =>{
      alert('The game was updated!')})
      // this.gamesService.GetAll().subscribe(registers => {
      // this.games = registers;})
    
  }
}
