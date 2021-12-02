import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  disableContent = false;
  constructor(private router: Router) {}

  disableNav(isOpen: boolean) {
    setTimeout(() => {
      this.disableContent = isOpen;
    }, 400);
  }

  ngOnInit(): void {
    this.router.navigate(['planets/2/earth']);
  }
}
