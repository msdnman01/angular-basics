import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Donut } from '../../models/donut.model';

@Component({
  selector: 'donut-card',
	encapsulation: ViewEncapsulation.ShadowDom, //.Emulated
  templateUrl: 'donut-card.component.html',
  styleUrls: ['donut-card.component.scss'],
})
export class DonutCardComponent {
  @Input() donut!: Donut;

  constructor() {}
}
