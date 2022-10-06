import { Component, OnInit } from '@angular/core';
import { Donut } from '../../models/donut.model';

@Component({
  selector: 'donut-single',
  templateUrl: 'donut-single.component.html',
  styleUrls: ['donut-single.component.scss']
})
export class DonutSingleComponent implements OnInit {
  donut!: Donut;
  constructor() { }

  ngOnInit(): void {
    this.donut = {
        id: '9snur5',
        name: 'Just Chocolate',
        icon: 'just-chocolate',
        price: 199,
				promo: 'limited',
        description: 'For the pure chocoholic',
      };
  }

  onCreate(donut: Donut) {
    console.log('onCreate', donut);
  }

}
