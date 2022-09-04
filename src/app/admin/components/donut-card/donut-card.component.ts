import { Component, OnInit } from '@angular/core';

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
export class DonutCardComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
