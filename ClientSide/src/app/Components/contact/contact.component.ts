import { Component } from '@angular/core';
import {EmailServiceService} from '../../Services/email-service.service';

import { Subscription } from 'rxjs';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  name: string = '';
  email: string = '';
  phone: string = '';
  selectedCourse: string = '';
  isSuccess: boolean = false; // Track the success state

  constructor(private emailService: EmailServiceService) {}


  onSubmit() {
    this.emailService.sendEmail(this.name, this.email, this.phone, this.selectedCourse).subscribe(
      response => {
        if (response === 'Email sent successfully') { // Check for the exact text response
          this.isSuccess = true;
        } else {
          console.log('Unexpected response:', response);
        }
      },
      error => {
        console.log('Error sending email:', error);
      }
    );
  }

}
