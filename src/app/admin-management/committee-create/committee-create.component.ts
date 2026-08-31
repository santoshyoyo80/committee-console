import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-committee-create',
  templateUrl: './committee-create.component.html',
  styleUrls: ['./committee-create.component.scss'],
  standalone: false
})
export class CommitteeCreateComponent implements OnInit {
  committeeForm: any;
  @Output() committeeCreated = new EventEmitter<any>();

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.committeeForm = this.fb.group({
      committee_name: ['', Validators.required],
      start_date: ['', Validators.required],
      end_date: ['', Validators.required],
      created_by: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.committeeForm.valid) {
      console.log('Committee form submitted:', this.committeeForm.value);
      this.committeeCreated.emit(this.committeeForm.value);
      this.committeeForm.reset();
    }
  }

  onCancel() {
    this.committeeForm.reset();
  }
}
