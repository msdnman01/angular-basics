import { Component, OnInit } from '@angular/core';
import { Donut } from '../../models/donut.model';

@Component({
  selector: 'donut-list',
  template: `
    <div>
			<donut-card [donut]="donuts[0]"></donut-card>
    </div>
  `,
  styles: [],
})
export class DonutListComponent implements OnInit {
  donuts!: Donut[];

  constructor() {}

  ngOnInit(): void {
    this.donuts = [
      {
        id: 'adf*$',
        name: 'Just Chocolate',
        icon: 'just-chocolate',
        price: 199,
        description: 'For the pure chocoholic',
      },
      {
        id: 'sdf$%',
        name: 'Glazed Fudge',
        icon: 'glazed-fudge',
        price: 125,
        description: 'Sticky Perfection',
      },
      {
        id: 'kjsdf&',
        name: 'Caramel Swirl',
        icon: 'caramel-swirl',
        price: 125,
        description: 'Chocolate drizzled with caramel',
      },
    ];
  }
}
