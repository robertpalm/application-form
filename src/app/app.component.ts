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
  //TODO: 1 https://angular.io/guide/form-validation
  //TODO: 2 Work experience custom validator to check, that it's a number & 1 number after comma.
  //DONE: 3 If form input invalid, there should appear an error text under it.
  //TODO: 4 Invalid "SUBMIT" message
  //DONE: 5 "RESET" clear all fields & errors
  //TODO: 6 "RESET" success message
  //TODO: 7 Message as a reusable component that takes input props (text, type, color)
  //TODO: 8 Invalid input error text should appear/disappear on blur
}
