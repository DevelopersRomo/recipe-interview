import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecetaDetailComponent } from './receta-detail.component';


const routes = [
  {
    path: 'receta/:id',
    component: RecetaDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class RecetaDetailRoutingModule {}
