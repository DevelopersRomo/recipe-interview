import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-receta-detail',
  templateUrl: './receta-detail.component.html',
  styleUrls: ['./receta-detail.component.scss'],
  imports: [CommonModule, IonicModule],
})
export class RecetaDetailComponent {
  constructor(private route: ActivatedRoute) {}
}
