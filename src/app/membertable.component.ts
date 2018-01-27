import { Component } from '@angular/core';
import { Member } from './member';


@Component({
    selector: 'membertable',
    templateUrl: './membertable.component.html',
    styleUrls: ['./membertable.component.css']
})
export class MembertableComponent {
   
    members = Member.members;

    //selectedMember:Member;
    selectedMember:Member[];
    constructor() {
        this.selectedMember = new Array();
    };

    isselected(themember: Member): number {
        for (let i = 0; i < this.selectedMember.length; i++) {
            if (this.selectedMember[i] == themember) {
                return i;
            }
        }
        return -1;
    }

    onSelect(member:Member){
    //this.selectedMember=member;
    this.selectedMember.push(member);
    }
}


