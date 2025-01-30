import { Injectable } from '@angular/core';
import { AppServiceService } from '../../app-service.service';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class ExtensionEducationService {

  constructor(
    private appServices: AppServiceService,
    private sanitizer: DomSanitizer
  ) {}

  loadExtensionData() {
    this.appServices.messages.push(
      this.sanitizer.bypassSecurityTrustHtml(
        `<h3 class="m-1">Extension Education</h3>
         <button id="ShowAll" class="bg-blue-500 text-white px-3 m-1 mt-2 py-1 rounded">ALL</button>
         <button id="ShowAnandCampus" class="bg-green-500 text-white px-3 m-1 py-1 rounded">ANAND CAMPUS</button>
         <button id="ShowOffCampus" class="bg-yellow-500 text-white px-3 m-1 py-1 rounded">OFF CAMPUS</button>
        `
      )
    );
  }

}
