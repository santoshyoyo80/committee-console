import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'committee-create',
  templateUrl: './create-committee.component.html',
  styleUrls: ['./create-committee.component.scss'],
  standalone: false,
})
export class CreateCommitteeComponent implements OnInit {
  committeeForm!: FormGroup;
  @Output() committeeCreated = new EventEmitter<any>();

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.committeeForm = this.fb.group({
      committee_name: ['', Validators.required],
      start_date: ['', Validators.required],
      committee_tenure: [12, [Validators.required, Validators.min(1)]],
      cycle_frequency: ['monthly']
    });
  }

  onSubmit() {
    if (this.committeeForm.valid) {
      this.committeeCreated.emit(this.committeeForm.value);
      this.committeeForm.reset({
        cycle_frequency: 'monthly',
        committee_tenure: 12,
      });
    }
  }

  onCancel() {
    this.committeeForm.reset({
      cycle_frequency: 'monthly',
      committee_tenure: 12,
    });
  }
}
