import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MOCK_MEMBERS } from './member-directory/member-directory.data';

@Component({
  selector: 'app-committee-platform-settings',
  templateUrl: './committee-platform-settings.component.html',
  styleUrls: ['./committee-platform-settings.component.scss'],
  standalone: false
})
export class CommitteePlatformSettingsComponent {
  selectedMenu: string = 'dashboard';
  pageTitle: string = 'Dashboard';
  pageSubtitle: string = 'Welcome to the Committee Console Admin Panel';

  // Admin management properties
  searchQuery: string = '';
  foundAdmin: boolean = false;
  searchPerformed: boolean = false;
  editMode: boolean = false;
  adminForm: FormGroup;
  memberCount = MOCK_MEMBERS.length;

  constructor(
    public router: Router,
    private fb: FormBuilder
  ) {
    this.adminForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', Validators.required],
      address: ['', Validators.required],
      newPassword: [''],
      confirmPassword: ['']
    });
  }

  selectMenu(menu: string) {
    this.selectedMenu = menu;
    this.updatePageTitle(menu);
    this.resetAdminSearch();
  }

  updatePageTitle(menu: string) {
    const titles: { [key: string]: { title: string; subtitle: string } } = {
      dashboard: { title: 'Dashboard', subtitle: 'Welcome to the Committee Console Admin Panel' },
      members: { title: 'Total Members', subtitle: 'View and manage all committee members' },
      committees: { title: 'Active Committees', subtitle: 'View and manage all committees' },
      requests: { title: 'Pending Requests', subtitle: 'Review and manage pending requests' },
      meetings: { title: 'Upcoming Meetings', subtitle: 'View scheduled meetings' },
      // onboardAdmin: { title: 'Onboard Committee Admin', subtitle: 'Register a new committee administrator' },
      createCommittee: { title: 'Create Committee', subtitle: 'Create a new committee' },
      manageAdmin: { title: 'Manage Admin', subtitle: 'Search and manage administrator profiles' },
      analytics: { title: 'Analytics', subtitle: 'View platform analytics and reports' }
    };

    this.pageTitle = titles[menu]?.title || 'Dashboard';
    this.pageSubtitle = titles[menu]?.subtitle || '';
  }

  resetAdminSearch() {
    this.searchQuery = '';
    this.foundAdmin = false;
    this.searchPerformed = false;
    this.editMode = false;
    this.adminForm.reset();
  }

  searchAdmin() {
    this.searchPerformed = true;
    // TODO: Implement actual API call to search admin
    // For now, simulating a found admin
    if (this.searchQuery) {
      this.foundAdmin = true;
      this.adminForm.patchValue({
        fullName: 'John Doe',
        email: 'john.doe@example.com',
        mobile: '1234567890',
        address: '123 Main St, City'
      });
    } else {
      this.foundAdmin = false;
    }
  }

  updateAdmin() {
    if (this.adminForm.valid) {
      const formValue = this.adminForm.value;
      
      // Check if password change is requested
      if (formValue.newPassword || formValue.confirmPassword) {
        if (formValue.newPassword !== formValue.confirmPassword) {
          alert('Passwords do not match!');
          return;
        }
      }

      // TODO: Implement actual API call to update admin
      console.log('Updating admin:', formValue);
      alert('Admin profile updated successfully!');
      this.editMode = false;
      this.adminForm.patchValue({
        newPassword: '',
        confirmPassword: ''
      });
    }
  }

  onUserCreated(user: any) {
    alert('User created successfully!');
    console.log('User created:', user);
    this.selectMenu('dashboard');
  }

  onCommitteeCreated(committee: any) {
    alert('Committee created successfully!');
    console.log('Committee created:', committee);
    this.selectMenu('dashboard');
  }

  logout() {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userEmail');
    this.router.navigate(['/login']);
  }
}
