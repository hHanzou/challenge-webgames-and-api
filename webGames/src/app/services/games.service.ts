import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Game } from '../Game';

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type" : "application/json"
  })
}

@Injectable({
  providedIn: 'root'
})
export class GamesService {
  url = 'http://localhost:5145/api/games';

  constructor(private http: HttpClient) {}

    GetAll(): Observable<Game[]> {
      return this.http.get<Game[]>(this.url);
    }

    GetById(GameId: number): Observable<Game>{
      const apiUrl = `${this.url}/${GameId}`;
      return this.http.get<Game>(apiUrl);
    }

    SaveGame(game: Game): Observable<any>{
      return this.http.post<Game>(this.url, game, httpOptions);
    }

    UpdateGame(game: Game): Observable<any>{
      return this.http.put<Game>(this.url, game, httpOptions);
    }

    DeleteGame(GameId: number): Observable<any>{
      const apiUrl = `${this.url}/${GameId}`;
      return this.http.delete<number>(apiUrl, httpOptions);
    }
}
