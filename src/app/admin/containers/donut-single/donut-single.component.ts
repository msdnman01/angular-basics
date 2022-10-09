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
    this.donutService
      .readOne('9dkg8a')
      .subscribe((donut: Donut) => (this.donut = donut));
  }

  onCreate(donut: Donut) {
    this.donutService
      .create(donut)
      .subscribe(() => console.log('Created successsfully!'));
  }

  onUpdate(donut: Donut) {
    this.donutService
      .update(donut)
      .subscribe(() => console.log('Updated successfully!'));
  }

  onDelete(donut: Donut) {
    this.donutService.delete(donut);
  }
}
