import { Component, OnInit } from '@angular/core';
import { Donut } from '../../models/donut.model';

@Component({
  selector: 'donut-list',
  templateUrl: 'donut-list.component.html',
  styles: [],
})
export class DonutListComponent implements OnInit {
  donuts!: Donut[];

  constructor() {}

  ngOnInit(): void {
    this.donuts = [
      {
        id: '9snur5',
        name: 'Just Chocolate',
        icon: 'just-chocolate',
        price: 199,
				promo: 'limited',
        description: 'For the pure chocoholic',
      },
      {
        id: 'mcj87s',
        name: 'Glazed Fudge',
        icon: 'glazed-fudge',
        price: 125,
				promo: 'new',
        description: 'Sticky Perfection',
      },
      {
        id: 'k3ifg7',
        name: 'Caramel Swirl',
        icon: 'caramel-swirl',
        price: 125,
        description: 'Chocolate drizzled with caramel',
      },
      {
        id: '9dkg8a',
        name: 'Sour Supreme',
        icon: 'sour-supreme',
        price: 139,
        description: 'For the sour advocate',
      },
      {
        id: '00sjiu',
        name: 'Zesty Lemon',
        icon: 'zesty-lemon',
        price: 169,
        description: 'For the lemon heads',
      },
    ];
  }

  trackById(index: number, value: Donut) {
    return value.id;
  }
}
