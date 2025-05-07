import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-receta-detail',
  templateUrl: './receta-detail.component.html',
  styleUrls: ['./receta-detail.component.scss'],
})
export class RecetaDetailComponent  implements OnInit {
  idReceta: string = '';
  private activatedRoute = inject(ActivatedRoute);
  constructor() { }

  ngOnInit() {
    debugger;
    this.idReceta = this.activatedRoute.snapshot.paramMap.get('id') as string;
    console.log('recetaid', this.idReceta);
  }

  getRecetaById(id: number) {

  }

}
