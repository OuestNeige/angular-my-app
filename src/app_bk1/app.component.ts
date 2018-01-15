import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Yuki app';
  members=[
    { id: 1, name: "user1"},
    { id: 2, name: "user2"},
    { id: 3, name: "user3"},
    { id: 4, name: "user4"},
  ];
}
