import { Component, Input, OnInit } from '@angular/core';
import { Donut } from '../../models/donut.model';

@Component({
  selector: 'donut-card',
  template: `
    <div class="donut.card">
      <img
        src="/assets/img/{{ donut.icon }}.svg"
        alt="{{ donut.name }}"
        class="donut-card-icon"
      />
      <div class="donut-card-name">
        {{ donut.name }}
      </div>
      <div class="donut-card-price">
        {{ donut.price }}
      </div>
    </div>
  `,
  styles: [],
})
export class DonutCardComponent {
	@Input() donut!: Donut;

  constructor() {}
}
