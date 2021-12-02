import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  planets = [
    { name: 'Mercury', color: '#DEF4FC' },
    { name: 'Venus', color: '#F7CC7F' },
    { name: 'Earth', color: '#545BFE' },
    { name: 'Mars', color: '#FF6A45' },
    { name: 'Jupiter', color: '#ECAD7A' },
    { name: 'Saturn', color: '#FCCB6B' },
    { name: 'Uranus', color: '#65F0D5' },
    { name: 'Neptune', color: '#497EFA' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
