import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlanetsComponent } from './planets/planets.component';

import { SubNavComponent } from './sub-nav/sub-nav.component';

const routes: Routes = [
  {
    path: 'planets',
    component: SubNavComponent,
    children: [{ path: ':name', component: PlanetsComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
