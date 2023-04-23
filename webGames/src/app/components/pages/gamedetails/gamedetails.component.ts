import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { GamesService } from 'src/app/services/games.service';
import { Game } from 'src/app/Game';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-gamedetails',
  templateUrl: './gamedetails.component.html',
  styleUrls: ['./gamedetails.component.css']
})
export class GamedetailsComponent implements OnInit {
  game?: Game;
  gameName?: string;
  gameId: number = 0;
  

  modalRef?: BsModalRef;  
  
  constructor(private gameService: GamesService, private route: ActivatedRoute, private modalService: BsModalService) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    console.log(id)

    this.gameService
    .GetById(id)
    .subscribe(result => (this.game = result));    
  }

  CloseModal():void{
    this.modalRef?.hide();
  }

  ShowDeleteConfirmation(gameId: number, gameName: string, modalContent: TemplateRef<any>): void{
    console.log(gameId);
    this.modalRef = this.modalService.show(modalContent)
    this.gameId = gameId;
    this.gameName = gameName;
  }

  DeleteGame(gameId: number){
    this.gameService.DeleteGame(gameId).subscribe(result => {
      this.CloseModal();
      alert("The game was deleted.")
    });
  }

}
