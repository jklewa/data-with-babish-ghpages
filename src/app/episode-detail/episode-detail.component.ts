import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { EpisodeService, Episode } from '../episode.service';
import { isVeganIngredientList } from 'is-vegan';

@Component({
  selector: 'app-episode-detail',
  templateUrl: './episode-detail.component.html',
  styleUrls: ['./episode-detail.component.scss']
})
export class EpisodeDetailComponent implements OnInit {

  id: string;
  ep: Episode;

  constructor(
    private route: ActivatedRoute,
    private episodeService: EpisodeService,
  ) {
    this.ep = new Episode({});
  }

  ngOnInit() {
     this.id = this.route.snapshot.paramMap.get('id');
     this.episodeService.getEpisode(this.id)
       .subscribe(episode => this.ep = episode[0]);
  }

  isVegan(ingredient) {
    return isVeganIngredientList(ingredient.split(' '));
  }

}
