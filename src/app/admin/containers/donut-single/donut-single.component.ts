import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Donut } from '../../models/donut.model';
import { DonutService } from '../../services/donut.service';

@Component({
  selector: 'donut-single',
  templateUrl: 'donut-single.component.html',
  styleUrls: ['donut-single.component.scss'],
})
export class DonutSingleComponent implements OnInit {
  donut!: Donut;
  constructor(
    private route: ActivatedRoute,
    private donutService: DonutService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    this.donutService
      .readOne(id)
      .subscribe((donut: Donut) => (this.donut = donut));
  }

  onCreate(donut: Donut) {
    this.donutService
      .create(donut)
      .subscribe(() => console.log('Created successsfully!'));
  }

  onUpdate(donut: Donut) {
    this.donutService.update(donut).subscribe({
      next: () => console.log('Updated successfully!'),
      error: (err) => console.log('onUpdate error:', err),
    });
  }

  onDelete(donut: Donut) {
    this.donutService
      .delete(donut)
      .subscribe(() => console.log('Deleted successfully!'));
  }
}
