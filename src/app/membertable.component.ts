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
    selectedMembers:Member[];
    overflow:boolean;
    whoisselected:string;

    constructor() {
        this.selectedMembers = new Array();
        this.overflow = false;
        this.whoisselected = "";
    };

    isselected(themember: Member):number{
        for (let i = 0; i < this.selectedMembers.length; i++) {
            if (this.selectedMembers[i] == themember) {
                return i;
            }
        }
        return -1;
    }

    onSelect(member:Member){
        let selectedindex = this.isselected(member);
        if (selectedindex >=0) {
            this.selectedMembers.splice(selectedindex, 1);
            this.overflow = false;
        } else if (this.selectedMembers.length > 3) {
            this.overflow = true;
            //this.selectedMembers.push(member);
        } else {
            this.selectedMembers.push(member);
        }
        //this.selectedMember=member;
        //this.selectedMembers.push(member);
        this.whoisselected = this.showwhoisselected();
    }

    showwhoisselected():string{
        let whois = "";
        for(let member of this.selectedMembers){
           whois+=Member.name+"さん, "; 
        }
        return whois.substr(0, whois.length-2)+"が選択されました。";
    }
}


