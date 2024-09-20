import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  myForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      username: ['', [Validators.required, this.usernameValidator]],
      email: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required],
      password: ['', [Validators.required, this.passwordValidator]],
      birthday: ['', Validators.required],
      country: ['', Validators.required],
      gender: ['', Validators.required],
      terms: [false, Validators.requiredTrue] // Checkbox for terms
    });
  }

  ngOnInit() {}

  usernameValidator(control: any) {
    const value = control.value;
    const valid = /^[a-zA-Z0-9]{4,16}$/.test(value);
    return valid ? null : { invalidUsername: true };
  }

  passwordValidator(control: any) {
    const value = control.value;
    if (value && !/(?=.*[A-Za-z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/.test(value)) {
      return { passwordComplexity: true };
    }
    return null;
  }

  onSubmit() {
    if (this.myForm.valid) {
      console.log('Form Submitted!', this.myForm.value);
    }
  }
}