import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @ViewChild('navContent') navContent: any;
  @ViewChild('navBtn') navButton: any;

  navIsOpen = false;
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

  onToggleClick() {
    this.navIsOpen = !this.navIsOpen;
    if (this.navIsOpen) {
      this.navContent.nativeElement.style.display = 'block';
      this.navContent.nativeElement.style.zIndex = '-1';
      setTimeout(() => {
        this.navContent.nativeElement.style.transform = 'translateY(0px)';
        this.navButton.nativeElement.ariaExpanded = 'true';
      }, 300);
    } else {
      this.navContent.nativeElement.style.transform = 'translateY(-110%)';
      this.navButton.nativeElement.ariaExpanded = 'false';
      setTimeout(() => {
        this.navContent.nativeElement.style.display = 'none';
        this.navContent.nativeElement.style.zIndex = '0';
      }, 600);
    }
  }
}
