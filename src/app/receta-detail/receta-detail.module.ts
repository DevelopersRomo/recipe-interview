import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { RecetaDetailRoutingModule } from './receta-detail-routing.module';
import { RecetaDetailComponent } from './receta-detail.component';

@NgModule({
  declarations: [RecetaDetailComponent],
  imports: [
    CommonModule,
    IonicModule,
    RecetaDetailRoutingModule
  ]
})
export class RecetaDetailModule {}
