import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { App } from './app';
import { ParentComponent } from './parent/parent.component';

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
