import { Component } from '@angular/core';
import { MOCK_COMMITTEES, MOCK_MEMBERS } from './member-directory.data';
import type { DirectoryMember } from './member-directory.data';

@Component({
  selector: 'app-member-directory',
  templateUrl: './member-directory.component.html',
  styleUrls: ['./member-directory.component.scss'],
  standalone: false
})
export class MemberDirectoryComponent {
  readonly committees = MOCK_COMMITTEES;
  readonly members = MOCK_MEMBERS;
  selectedCommitteeId: number | null = null;

  get filteredMembers(): DirectoryMember[] {
    return this.selectedCommitteeId === null
      ? this.members
      : this.members.filter(member => member.committeeId === this.selectedCommitteeId);
  }

  getCommitteeName(committeeId: number): string {
    return this.committees.find(committee => committee.committeeId === committeeId)?.committeeName || 'Unknown committee';
  }
}