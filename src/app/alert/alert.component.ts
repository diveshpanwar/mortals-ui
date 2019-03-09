import {
  Component,
  Inject,
  ChangeDetectorRef
} from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-alert',
  templateUrl: 'alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent {
  inpForm: FormGroup;
  constructor(
    public dialogRef: MatDialogRef<AlertComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.inpForm = this.fb.group({
      inpDateTo: ['', Validators.required, null],
      inpTimeTo: ['', Validators.required, null],
      inpDateFrom: ['', Validators.required, null],
      inpTimeFrom: ['', Validators.required, null],
    });
  }
  onNoClick(): void {
    console.log('I am clicked');
    this.dialogRef.close();
  }
}
