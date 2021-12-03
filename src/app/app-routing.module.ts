import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlanetComponent } from './planet/planet.component';

const routes: Routes = [
  {
    path: 'planets/:id',
    component: PlanetComponent,
    children: [{ path: ':name', component: PlanetComponent }],
  },
  { path: '**', redirectTo: 'planets/2/earth' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
