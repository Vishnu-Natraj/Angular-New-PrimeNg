import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [
    `
      :host ::ng-deep .p-password input {
        width: 15rem;
      }
    ` 
  ]
})
export class AppComponent {
  title = 'primeng_Password';

  value1: any;

  value2: any;

  value3: any;

  value4: any;
}
