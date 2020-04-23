import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  
  newUserFirst = '';
  newUserLast = '';

  users = [
    { first: 'Dilip', last: 'Kumaar' },
    { first: 'Jane', last: 'Smith' }
  ];

  onAdd() {
    this.users.push({
      first: this.newUserFirst, last: this.newUserLast
    });
  }
}
