import { Component } from '@angular/core';
import { Member } from './member';


@Component({
    selector: 'membertable',
    templateUrl: './membertable.component.html',
    styleUrls: ['./membertable.component.css']
})
export class MembertableComponent {
   
    members = Member.members;

    selectedMember:Member;
    onSelect(member:Member){
        this.selectedMember=member;
    }
}
