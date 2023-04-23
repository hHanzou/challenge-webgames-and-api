import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { GamesService } from 'src/app/services/games.service';
import { Game } from 'src/app/Game';

@Component({
  selector: 'app-gamedetails',
  templateUrl: './gamedetails.component.html',
  styleUrls: ['./gamedetails.component.css']
})
export class GamedetailsComponent implements OnInit {
  game?: Game;
  
  constructor(private gameService: GamesService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    console.log(id)

    this.gameService
    .GetById(id)
    .subscribe(result => (this.game = result));    
  }

}
