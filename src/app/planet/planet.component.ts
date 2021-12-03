import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { PlanetService } from './planet.service';

@Component({
  selector: 'app-planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.scss'],
  providers: [PlanetService],
})
export class PlanetComponent implements OnInit {
  planet: any;
  constructor(
    private planetService: PlanetService,
    private activeRoute: ActivatedRoute
  ) {
    this.activeRoute.params.subscribe((params: Params) => {
      this.planet = this.planetService.getPlanet(+params['id']);
      console.log(this.planet.images.planet);
    });
  }

  ngOnInit(): void {}
}
