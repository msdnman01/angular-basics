import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'donut-form',
  templateUrl: 'donut-form.component.html',
  styleUrls: ['donut-form.component.scss']
})
export class DonutFormComponent {

  icons: string[] = [
    'caramel-swirl',
    'glazed-fudge',
    'just-chocolate',
    'sour-supreme',
    'strawberry-glaze',
    'vanilla-sundae',
    'zesty-lemon'
  ];

  constructor() { }

  handleSubmit(form: NgForm) {
    console.log(form.value);
  }
}
