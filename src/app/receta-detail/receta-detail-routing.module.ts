import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {RecetaDetailComponent} from './receta-detail.component';

const routes: Routes = [
  {
    path: '',
    component: RecetaDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecetaDetailRoutingModule {}
