import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DownloadPDFService {
  downloadPdf() {
    const pdfUrl = '../../assets/files/Little-Engineer-Profile.pdf'; // Adjust the path to your PDF file
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'Little-Engineer-Profile'; // You can set the desired file name
    link.target = '_blank';
    link.click();
  }
  constructor() { }
}
