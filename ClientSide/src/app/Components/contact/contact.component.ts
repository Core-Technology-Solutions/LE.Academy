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
  isSubmitDisabled: boolean = false;

  constructor(private emailService: EmailServiceService) {}

  onSubmit() {
    // Disable the submit button
    this.isSubmitDisabled = true;

    this.emailService.sendEmail(this.name, this.email, this.phone, this.selectedCourse).subscribe(
      response => {
        if (response === 'Email sent successfully') {
          this.isSuccess = true;
        } else {
          console.log('Unexpected response:', response);
        }

        // Re-enable the submit button regardless of the response
        this.isSubmitDisabled = false;
      },
      error => {
        console.log('Error sending email:', error);

        // Re-enable the submit button in case of an error
        this.isSubmitDisabled = false;
      }
    );
  }
}
