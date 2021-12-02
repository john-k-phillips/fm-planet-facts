import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SubNavComponent } from './sub-nav/sub-nav.component';
import { PlanetsComponent } from './planets/planets.component';
import { PlanetDetailsComponent } from './planets/planet-details/planet-details.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, SubNavComponent, PlanetsComponent, PlanetDetailsComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
