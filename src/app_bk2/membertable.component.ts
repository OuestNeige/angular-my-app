import { Component } from '@angular/core';
import { Member } from './member';


@Component({
    selector: 'membertable',
    templateUrl: './membertable.component.html',
    styleUrls: ['./membertable.component.css']
})
export class MembertableComponent {
   
    members = Member.members;
}
