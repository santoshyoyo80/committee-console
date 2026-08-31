import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-committee-admin',
  templateUrl: './committee-admin.component.html',
  styleUrls: ['./committee-admin.component.scss'],
  standalone: false
})
export class CommitteeAdminComponent {
  selectedMenu: string = 'dashboard';
  pageTitle: string = 'Dashboard';
  pageSubtitle: string = 'Welcome to your Committee Console';
  
  // Dashboard stats
  memberCount: number = 0;
  meetingCount: number = 0;
  requestCount: number = 0;
  reportCount: number = 0;
  
  // Admin profile info
  adminName: string = 'Admin Name';
  adminEmail: string = 'admin@example.com';
  adminMobile: string = '1234567890';

  constructor(private router: Router) {}

  selectMenu(menu: string): void {
    this.selectedMenu = menu;
    this.updatePageTitle(menu);
  }

  updatePageTitle(menu: string): void {
    const titles: { [key: string]: { title: string; subtitle: string } } = {
      dashboard: { title: 'Dashboard', subtitle: 'Welcome to your Committee Console' },
      manageMembers: { title: 'Select Committee', subtitle: 'View and manage committee members' },
      createMeeting: { title: 'Create Meeting', subtitle: 'Schedule a new committee meeting' },
      meetings: { title: 'Upcoming Meetings', subtitle: 'View your scheduled meetings' },
      reports: { title: 'Submit Reports', subtitle: 'Submit committee reports' },
      requests: { title: 'Member Requests', subtitle: 'Review pending member requests' },
      profile: { title: 'My Profile', subtitle: 'View and edit your profile' }
    };
    
    this.pageTitle = titles[menu]?.title || 'Dashboard';
    this.pageSubtitle = titles[menu]?.subtitle || '';
  }

  logout(): void {
    this.router.navigate(['/login']);
  }

  editProfile(): void {
    // TODO: Implement edit profile functionality
    console.log('Edit profile clicked');
  }
}
