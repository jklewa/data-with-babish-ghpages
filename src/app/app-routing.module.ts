import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EpisodeListComponent } from './episode-list/episode-list.component';
import { EpisodeDetailComponent } from './episode-detail/episode-detail.component';
import { IngredientListComponent } from './ingredient-list/ingredient-list.component';

const routes: Routes =  [
  { path: '', redirectTo: '/episodes', pathMatch: 'full' },
  { path: 'episodes', component: EpisodeListComponent },
  { path: 'episodes/:id', component: EpisodeDetailComponent },
  { path: 'ingredients', component: IngredientListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
