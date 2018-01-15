import { Component } from '@angular/core';
import { Member } from './member';

@Component({
    selector: 'app-root',
    template: `<h1>{{name}}年度役員選挙</h1>
  <h2>被選挙人名簿</h2>
  <ul>
      <li *ngFor="let member of members">
          <b>{{member.name}}</b>:&nbsp;{{member.prof}}
      </li>
  </ul>`,
})
export class AppComponent {
    name = '2017';
    members = Member.members;
}
