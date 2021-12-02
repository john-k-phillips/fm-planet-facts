import { Component, OnInit } from '@angular/core';
import { PlanetService } from './planet.service';

@Component({
  selector: 'app-planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.scss'],
  providers: [PlanetService],
})
export class PlanetComponent implements OnInit {
  planet: any;

  constructor(private planetService: PlanetService) {
    this.planet = this.planetService.getPlanet(0);
  }

  ngOnInit(): void {}
}
