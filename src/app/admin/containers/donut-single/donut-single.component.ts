import { Component, OnInit } from '@angular/core';
import { Donut } from '../../models/donut.model';
import { DonutService } from '../../services/donut.service';

@Component({
  selector: 'donut-single',
  templateUrl: 'donut-single.component.html',
  styleUrls: ['donut-single.component.scss']
})
export class DonutSingleComponent implements OnInit {
  donut!: Donut;
  constructor(private donutService: DonutService) { }

  ngOnInit(): void {
    const id = 'mcj87s';
    this.donut = this.donutService.donuts.find(
      (donut: Donut) => donut.id == id ) ||
      { name: '', icon: '', price: 0, description: ''};
  }

  onCreate(donut: Donut) {
    console.log('onCreate', donut);
  }

}
