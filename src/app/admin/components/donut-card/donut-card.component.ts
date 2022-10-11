import { CurrencyPipe, NgClass, NgSwitch, NgSwitchCase } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Donut } from '../../models/donut.model';

@Component({
  standalone: true,
  imports: [RouterModule, NgClass, NgSwitch, NgSwitchCase, CurrencyPipe],
  selector: 'donut-card',
  templateUrl: 'donut-card.component.html',
  styleUrls: ['donut-card.component.scss'],
})
export class DonutCardComponent {
  @Input() donut!: Donut;

  constructor() {}
}
