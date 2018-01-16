import { Component } from '@angular/core';
import { Member } from './member';


@Component({
    selector: 'membertable',
    templateUrl: './membertable.component.html' 
})
export class MembertableComponent {
   
    members = Member.members;
}
