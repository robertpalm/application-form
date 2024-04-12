import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from "@angular/forms";
import {NgIf} from "@angular/common";
import {MessageComponent} from "./shared/message.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgIf, FormsModule, MessageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  @ViewChild('form') form!: NgForm;
  title = 'application-form';
  firstName = '';
  lastName = '';
  email = '';
  experience = 0;
  message: {type: 'info' | 'error' | 'success', text: string} = {type: 'info', text: ''};


  constructor() {
  }
  clear() {
    if (this.form) {
      this.form.resetForm();
      this.message = {type: 'info', text: 'Form cleared successfully.'};
    }
  }

  submit() {
    if (this.form.valid) {
      this.message = {type: 'success', text: 'Form submitted successfully.'};
    } else {
      this.message = {type: 'error', text: 'Invalid form input.'};
    }
  }
}
