import { Component } from '@angular/core';
import { Member } from './member';


@Component({
    selector: 'membertable'
    templateUrl: `<h2>被選挙人名簿</h2>
    <ul>
        <li *ngFor="let member of members">
          <b>{{member.name}}</b>:&nbsp;{{member.prof}}
        </li>
    </ul>`,
})
export class MembertableComponent {
   
    members = Member.members;
}
