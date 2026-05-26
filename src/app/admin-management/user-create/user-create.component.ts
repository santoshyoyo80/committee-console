import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss'],
  standalone: false
})
export class UserCreateComponent implements OnInit {
  userForm: any;
  @Output() userCreated = new EventEmitter<any>();

  private readonly API_URL: string = "http://localhost:8081/api";

  constructor(
    private fb: FormBuilder,
    private httpClient: HttpClient
  ) { }

  ngOnInit() {
    this.userForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      address: [''],
      mobile_no: ['', [Validators.pattern('^[0-9]{10}$')]],
      gender: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.userForm.valid) {
      const formData = new FormData();
      formData.append('username', this.userForm.value.username);
      formData.append('email', this.userForm.value.email);
      formData.append('password', this.userForm.value.password);
      formData.append('address', this.userForm.value.address || '');
      formData.append('mobile_no', this.userForm.value.mobile_no || '');
      formData.append('gender', this.userForm.value.gender);

      this.httpClient.post(`${this.API_URL}/register`, formData).subscribe({
        next: (response) => {
          console.log('User created successfully:', response);
          this.userCreated.emit(response);
          this.userForm.reset();
        },
        error: (error) => {
          console.error('Error creating user:', error);
          alert('Error creating user. Please try again.');
        }
      });
    }
  }

  onCancel() {
    this.userForm.reset();
  }
}
