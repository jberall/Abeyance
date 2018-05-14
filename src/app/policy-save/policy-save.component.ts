import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
  FormArray
} from '@angular/forms';
import { Abeyance } from '../models/abeyance.model';

@Component({
  selector: 'app-policy-save',
  templateUrl: './policy-save.component.html',
  styleUrls: ['./policy-save.component.css']
})
export class PolicySaveComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.form = this.fb.group({
      // state: [3],
      status: [100, Validators.required],
      insured_name: ['Jonathan', Validators.required],
      vessel_name: [''],
      serial_no: [''],
      model_no: [''],
      abeyances: this.fb.array([])
    });
  }
  abeyanceFG(abeyance?: Abeyance): FormGroup {
    return this.fb.group({
      id: [],
      description: [abeyance.description, Validators.required],
      effective_to: [abeyance.effective_to, Validators.required],
      abeyance_reference: [abeyance.abeyance_reference, Validators.required],
      status: [abeyance.status, Validators.required],
      notes: this.fb.array([this.fb.group({ note: [] })])
    });
  }
  save() {
    console.log(this.form.value);
  }
  bind() {
    console.log(this.form);
  }

  updateAbeyance(ctlName: string, ctl: FormControl): void {
    // console.log(ctlName, ctl);
    if (+this.status.value !== 100) {
      return null;
    }
    ctl.setValue(ctl.value.trim());

    const abeyance: Abeyance = {
      id: null,
      description: '',
      effective_to: null,
      abeyance_reference: ctlName,
      status: null,
      notes: ['']
    };
    !ctl.value ? this.addAbeyance(abeyance) : this.removeAbeyance(abeyance);
  }

  removeAbeyance(abeyance: Abeyance): void {
    if (!this.abeyances.length) {
      return null;
    }
    abeyance.status = false;
    for (let i = 0; i < this.abeyances.length; i++) {
      const abeyanceInstance = <FormGroup>this.abeyances.at(i);
      if (
        abeyanceInstance.controls['abeyance_reference'].value ===
        abeyance.abeyance_reference
      ) {
        if (abeyanceInstance.controls['id'].value) {
          console.log(this.abeyances.at(i));
        } else {
          this.abeyances.removeAt(i);
        }
      }
    }
  }

  /**
   * 1.  No abeyances exist just add.
   * 2.  Check if this abeyance reference exist. if yes update.
   * 3.  None of the above just add.
   */
  addAbeyance(abeyance: Abeyance) {
    abeyance.status = true;
    const abeyanceFG = this.abeyanceFG(abeyance);

    if (!this.abeyances.length) {
      this.abeyances.push(abeyanceFG);
      return;
    }
    for (let i = 0; i < this.abeyances.length; i++) {
      const abeyanceInstance = <FormGroup>this.abeyances.at(i);
      if (
        abeyanceInstance.controls['abeyance_reference'].value ===
        abeyance.abeyance_reference
      ) {
        console.log('need to update', this.abeyances.at(i));
        return;
      }
    }

    this.abeyances.push(abeyanceFG);
    return;
  }
  get abeyances(): FormArray {
    return <FormArray>this.form.get('abeyances');
  }
  get status(): FormControl {
    return <FormControl>this.form.get('status');
  }
  get model_no(): FormControl {
    return <FormControl>this.form.get('model_no');
  }
}
