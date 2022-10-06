import { Injectable } from '@angular/core';
import { Donut } from '../models/donut.model';
@Injectable({
  providedIn: 'root'
})
export class DonutService {
	private donuts: Donut[] = [
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

  constructor() { }

  read() {
    return this.donuts;
  }

  readOne(id: string) {
    const donut = this.read().find(
      (donut: Donut) => donut.id == id );

    if (donut) {
      return donut;
    }

    return { name: '', icon: '', price: 0, description: ''};
  }

  create(payload: Donut) {
    this.donuts = [...this.donuts, payload];
    console.log(this.donuts);
  }

  update(payload: Donut) {
    this.donuts = this.donuts.map((donut: Donut) => {
      if (donut.id === payload.id) {
        return payload;
      }

      return donut;
    });
    console.log(this.donuts);
  }
}
