import { Component } from '@angular/core';
import { Member } from './member';


@Component({
    selector: 'membertable',
    templateUrl: './membertable.component.html',
    styleUrls: ['./mmembertable.component.css']
})
export class MembertableComponent {
   
    members = Member.members;
}
