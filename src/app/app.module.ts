import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { PlanetComponent } from './planet/planet.component';
import { SubNavComponent } from './planet/sub-nav/sub-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PlanetComponent,
    SubNavComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
