import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
      GameName: new FormControl(null, Validators.required),
      GameRelease: new FormControl(null, Validators.required),
      GameDetails: new FormControl(null, Validators.required),
      GameDevs: new FormControl(null, Validators.required)
    });
    
  }

  SendForm(): void{
    const game = this.form.value;
    game.GameRelease = game.GameRelease.toString()

    this.gamesService.SaveGame(game).subscribe(
      (result) => {
      alert("Game inserted successfully.");
      });
  }

}
