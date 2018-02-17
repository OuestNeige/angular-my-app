import { Component } from '@angular/core';
import { Member } from './member';


@Component({
    selector: 'poll',
    templateUrl: './poll.component.html',
    styleUrls: ['./poll.component.css']
})
export class PollComponent {
    findByVoted(voted: number): Member[] {

        let foundMembers: Member[] = [];

        for (let member of Member.members) {

            if (member.voted == voted) {
                foundMembers.push(member);
            }
        }

        return foundMembers;
    }

    reportPoll(): Member[] {
        let sortedMembers = (Member.members.slice()).sort(
            (m1, m2) => m2.voted - m1.voted
        );

        let maxvote = (sortedMembers[0]).voted;

        let membersToReport: Member[] = [];
        for (let voted = maxvote; voted >= 0; voted--) {
            let groupmembers: Member[] = this.findByVoted(voted);
            if (groupmembers.length > 0) {
                membersToReport = membersToReport.concat(groupmembers);
            }
            if (membersToReport.length >= 4) { break; }
        }
        return membersToReport;
    }
}
    