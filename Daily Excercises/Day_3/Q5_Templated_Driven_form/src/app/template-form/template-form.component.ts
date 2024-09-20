import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrl: './template-form.component.css'
})
export class TemplateFormComponent {
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  gender: string = '';
  terms: boolean = false;
  jsonData: string = '';

  onSubmit(form: NgForm) {
    if (form.valid) {
      const formData = {
        email: this.email,
        password: this.password,
        gender: this.gender,
        terms: this.terms,
      };
      this.jsonData = JSON.stringify(formData, null, 2);
    }
  }

}
