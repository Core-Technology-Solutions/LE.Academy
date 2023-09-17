import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmailServiceService {

  private emailUrl = 'http://localhost:8080/send-email'; // Replace with your backend URL

  constructor(private http: HttpClient) { }

  sendEmail(name: string, email: string, phone: string) {
    const data = {
      name: name,
      email: email,
      phone: phone
    };
    return this.http.post(this.emailUrl, data);
  }
}
