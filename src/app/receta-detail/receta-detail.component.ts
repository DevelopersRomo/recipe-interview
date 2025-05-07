import { Component, OnInit } from '@angular/core';
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
export class RecetaDetailComponent implements OnInit {
  
  receta: any;
  constructor(private route: ActivatedRoute) {}
  
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    debugger;
    if (id) {
       this.receta = this.getRecetaById(Number(id));
      if (this.receta) {
        console.log('Receta:', this.receta);
      } else {
        console.error('Receta not found');
      }
    } else {
      console.error('ID not found');
    }
    console.log('Receta:', this.receta);
    debugger;
  }

  getRecetaById(id: number) {
    const recetas = this.getRecetas();
    return recetas.find((receta) => receta.id === id);
  }

  getRecetas() {
    return [
      {
        id: 1,
        title: 'Eggs Rancheros',
        image: 'https://www.daisybrand.com/wp-content/uploads/2019/12/huevos-racheros-770x628_6509.jpg',
        description: 'A traditional Mexican breakfast dish consisting of fried eggs served on a tortilla topped with a tomato-chili sauce.',
      },
      {
        id: 2,
        title: 'Chilaquiles',
        image: 'https://patijinich.com/es/wp-content/uploads/sites/3/2017/07/207-chilaquiles-verdes.jpg',
        description: 'A traditional Mexican dish made with fried corn tortillas cut into small pieces and cooked in a green or red sauce.',
      },
      {
        id: 3,
        title: 'Tacos de Barbacoa',
        image: 'https://lh3.googleusercontent.com/p/AF1QipNNdX6JmPa65YHCDzsYz-vZNgGSp6IFouYu3zkW=s680-w680-h510-rw',
        description: 'A traditional Mexican dish made with slow-cooked beef, served in a corn tortilla with onions and cilantro.',
      }, 
      {
        id: 4,
        title: 'Tamales',
        image: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSe8INe5mwmUeMUN-S4gRN6VQG3vjVsxPkkQO-rui9-Nb3_lcrN9C_6fhDLeeb8ggHcDf9vjCxdrWAwd5iVJYhXZ1jcE-WNcDc_P3dhYA',
        description: 'A traditional Mexican dish made of masa (corn dough) filled with various ingredients, wrapped in corn husks and steamed.',
      }
    ]
  }

  goBack() {
    window.history.back();
  }
}
