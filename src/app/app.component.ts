import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterModule],
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  message!: string;
  newMessage!: string;

  constructor() {}

  ngOnInit() {
    this.message = 'Hello World!';
  }

  handleClick(event: Event) {
    console.log(event);
  }
}
