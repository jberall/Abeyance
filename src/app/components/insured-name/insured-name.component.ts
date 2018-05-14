import { FormGroup } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-insured-name',
  template: `
  <mat-form-field [formGroup]="formGroup">
  <input matInput placeholder="Insured Name" formControlName="insured_name">
    <mat-hint>Mandatory Field</mat-hint>
  </mat-form-field>
  `,
  styles: []
})
export class InsuredNameComponent implements OnInit {
  @Input() formGroup: FormGroup;
  constructor() {}

  ngOnInit() {}
}
