import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { App } from './app';
import { ParentComponent } from './parent/parent.component';
import { CommitteePlatformSettingsComponent } from './committee-platform-settings/committee-platform-settings.component';
import { CommitteeAdminComponent } from './committee-admin/committee-admin.component';
import { UserCreateComponent } from './admin-management/user-create/user-create.component';
import { CommitteeCreateComponent } from './admin-management/committee-create/committee-create.component';
import { AnalyticsComponent } from './admin-management/analytics/analytics.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
      path: "parent",
      component: ParentComponent
  },
  {
      path: "login",
      component: LoginComponent
  },
  {
    path: "register",
    component: RegistrationComponent
  },
  {
    path: "committee-platform-settings",
    component: CommitteePlatformSettingsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "committee-admin",
    component: CommitteeAdminComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "user-create",
    component: UserCreateComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "committee-create",
    component: CommitteeCreateComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "analytics",
    component: AnalyticsComponent,
    canActivate: [AuthGuard]
  },

  {
     path: "",
     redirectTo : "login",
     pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
