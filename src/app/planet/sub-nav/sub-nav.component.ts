import { Component, Input, OnInit } from '@angular/core';
import { PlanetService } from '../planet.service';

@Component({
  selector: 'app-sub-nav',
  templateUrl: './sub-nav.component.html',
  styleUrls: ['./sub-nav.component.scss'],
})
export class SubNavComponent implements OnInit {
  planetName = 'earth';
  id: number;

  constructor(private planetService: PlanetService) {
    this.id = this.planetService.currentId;
    this.planetName = this.planetService.currentPlanet;
  }

  ngOnInit(): void {}
}
