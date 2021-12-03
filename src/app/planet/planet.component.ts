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
  currentTab = '';
  currentPlanetId = 0;

  constructor(
    private planetService: PlanetService,
    private activeRoute: ActivatedRoute
  ) {
    this.activeRoute.params.subscribe((params: Params) => {
      this.planet = this.planetService.getPlanet(+params['id']);
      this.currentTab = this.planetService.currentTab;
    });
  }

  ngOnInit(): void {}
}
