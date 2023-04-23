import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { AddGamesComponent } from './components/pages/add-games/add-games.component';
import { AddCategoriesComponent } from './components/pages/add-categories/add-categories.component';
import { GamedetailsComponent } from './components/pages/gamedetails/gamedetails.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'add-games', component: AddGamesComponent},
  {path: 'add-categories', component: AddCategoriesComponent},
  {path: 'gamedetails/id', component: GamedetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
