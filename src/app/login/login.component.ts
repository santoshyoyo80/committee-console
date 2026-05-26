import { Component, inject } from '@angular/core';
import { AuthService } from '../Auth.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  standalone: false,
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  private fb = inject(FormBuilder);
  private router = inject(Router);

  public loginForm =  this.fb.group({
    email : ['', [Validators.required, Validators.email]],
    password : ['', [Validators.required]]
  });

  onSubmit() {
    if(this.loginForm.valid) {
      const { email, password } = this.loginForm.value;

      // Hardcoded credentials for now
      if (email === 'admin@committee.com' && password === 'admin123') {
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('userEmail', email);
        this.router.navigate(['/committee-platform-settings']);
      } else {
        alert('Invalid credentials. Please use admin@committee.com / admin123');
      }
    }
  }

}
