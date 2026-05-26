import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.scss'],
  standalone: false
})
export class AnalyticsComponent implements OnInit {
  totalCommittees: number = 0;
  totalMembers: number = 0;
  activeCommittees: number = 0;
  upcomingMeetings: number = 0;
  pendingRequests: number = 0;
  completedMeetings: number = 0;

  constructor() {}

  ngOnInit() {
    // TODO: Fetch actual data from API
    this.loadAnalyticsData();
  }

  loadAnalyticsData() {
    // Mock data for now - replace with actual API calls
    this.totalCommittees = 12;
    this.totalMembers = 45;
    this.activeCommittees = 8;
    this.upcomingMeetings = 5;
    this.pendingRequests = 3;
    this.completedMeetings = 24;
  }
}
