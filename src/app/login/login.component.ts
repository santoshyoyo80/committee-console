import { Component, inject } from '@angular/core';
import { AuthService } from '../Auth.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  standalone: false,
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  private fb = inject(FormBuilder);

  public loginForm =  this.fb.group({
    email : ['', Validators.email],
    password : ['', [Validators.required]]
  });

  onSubmit() {
    alert("onsubmit get called here")
    // console.log("user instance = ", this.user)
    if(this.loginForm.valid) {
      console.log("LoginFormValue= ", this.loginForm.value)
    }
  }

}
