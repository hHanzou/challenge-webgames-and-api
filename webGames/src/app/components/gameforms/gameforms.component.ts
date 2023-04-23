import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Game } from 'src/app/Game';
import { GamesService } from 'src/app/services/games.service';

@Component({
  selector: 'app-gameforms',
  templateUrl: './gameforms.component.html',
  styleUrls: ['./gameforms.component.css']
})
export class GameformsComponent implements OnInit {

  form: any;
  formtittle: string = "";

  constructor(private gamesService : GamesService){}

  ngOnInit(): void {
    
    this.formtittle = "New Game";
    this.form = new FormGroup({
      GameName: new FormControl(null),
      GameRelease: new FormControl(null),
      GameDetails: new FormControl(null)

    })
  }

  SendForm(): void{
    const game : Game = this.form.value;

    this.gamesService.SaveGame(game).subscribe(
      (result) => {
      alert("Game inserted successfully.");
      });
  }

}
