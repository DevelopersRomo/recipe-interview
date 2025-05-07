import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
  standalone: false,
})
export class FolderPage implements OnInit {
  public router = inject(Router);
  public folder!: string;
  public recetas: any[] = [];
  private activatedRoute = inject(ActivatedRoute);
  constructor(router: Router) {
   
   
  }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.recetas = this.getRecetas();
  }


  goDetail(id: number) {
    console.log('Receta ID:', id);
    this.router.navigate(['receta', id]);
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

}
