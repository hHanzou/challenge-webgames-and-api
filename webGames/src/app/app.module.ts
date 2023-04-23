import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from "ngx-bootstrap/modal"
import { GamesService } from './services/games.service';

import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/pages/home/home.component';
import { AddGamesComponent } from './components/pages/add-games/add-games.component';
import { AddCategoriesComponent } from './components/pages/add-categories/add-categories.component';
import { GameformsComponent } from './components/gameforms/gameforms.component';
import { CategoryformsComponent } from './components/categoryforms/categoryforms.component';
import { ListcategoriesComponent } from './components/listcategories/listcategories.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AddGamesComponent,
    AddCategoriesComponent,
    GameformsComponent,
    CategoryformsComponent,
    ListcategoriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule,
    ModalModule.forRoot()
  ],
  providers: [HttpClientModule, GamesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
