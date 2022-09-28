import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'donut-form',
  templateUrl: 'donut-form.component.html',
  styleUrls: ['donut-form.component.scss']
})
export class DonutFormComponent implements OnInit {

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

  ngOnInit(): void {
  }

}
