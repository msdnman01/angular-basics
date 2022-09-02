import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="app">
      <h1>{{ message }}</h1>
      <h1 [innerText]="message"></h1>
      <input value="message" />
      <input [value]="message" />
    </div>
  `,
  styles: [
    `
      .app {
        margin-top: 50px;
        font-size: 22px;
        color: #fff;
        text-align: center;
      }
    `,
  ],
})
export class AppComponent implements OnInit {
  message!: string;

	constructor() {}
	
  ngOnInit() {
    this.message = 'Hello World!';

    console.log('Hello World!');
  }
}
