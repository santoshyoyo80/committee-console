import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../Auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  standalone: false,
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {

  // inject the formBuilderService
  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  private selectedFile: File | null = null;

  onFileChange(event: any) {
    const file = this.selectedFile = event.target.files[0]
    if(file) {
      this.selectedFile = file;
      this.registrationForm.patchValue({ file: file }); 
      this.registrationForm.get('file')?.updateValueAndValidity();
    }
  }

  registrationForm =   
    this.fb.group({
    firstName: ['', Validators.required],
    lastName : ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password : ['', Validators.required],
    file : ['', Validators.required]
    });

  onSubmit() {
    if(this.registrationForm.valid) {

      const formData = new FormData();  
      formData.append('firstName', this.registrationForm.get('firstName')?.value ?? '');
      formData.append('lastName', this.registrationForm.get('lastName')?.value ?? '');
      formData.append('email', this.registrationForm.get('email')?.value ?? '');
      formData.append('password', this.registrationForm.get('password')?.value ?? '');

      if(this.selectedFile) {
        console.log("RegistrationComponent :: selected file ", this.selectedFile);  
        formData.append('file', this.selectedFile);
      }
    
      // now subscribe it
      this.authService.register(formData).subscribe({
        next: (response)=>{
            console.log("Success Server Says: ", response);
        },

        error : (err)=> {
            console.log("Upload Failed", err);
        }
      });

    }else {
      console.log("form is invalid...")
    }
  }
}
