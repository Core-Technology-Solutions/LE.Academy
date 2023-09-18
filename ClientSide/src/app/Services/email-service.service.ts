import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailServiceService {

  private emailUrl = 'http://localhost:8080/send-email'; // Update with your server URL

  constructor(private http: HttpClient) {}

  sendEmail(name: string, email: string, phone: string, selectedCourse: string): Observable<string> {
    const body = { name, email, phone, selectedCourse };

    return this.http.post(this.emailUrl, body, { responseType: 'text' }); // Set responseType to 'text'
  }
}
