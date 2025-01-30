import { Injectable } from '@angular/core';
import { AppServiceService } from '../../../app-service.service';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class AnandCampusService {

  constructor(
    private appServices: AppServiceService,
    private sanitizer: DomSanitizer
  ) {}

  loadExtensionAnandCampus() {
    this.appServices.messages.push(
      this.sanitizer.bypassSecurityTrustHtml(
        `<h3 class="m-1">Anand Campus Extenson Education Center</h3>
         <button id="button-1" class="bg-green-500 text-white px-3 m-1 py-1 rounded">Directorate of Extension Education</button>
        <button id="button-2" class="bg-green-500 text-white px-3 m-1 py-1 rounded">Sardar Smruti Kendra, Anand</button>
        <button id="button-3" class="bg-green-500 text-white px-3 m-1 py-1 rounded">Sardar Patel Agricultural Educational Museum, Anand</button>
        <button id="button-4" class="bg-green-500 text-white px-3 m-1 py-1 rounded">Agriculture Technology Information Center, Anand</button>
        <button id="button-5" class="bg-green-500 text-white px-3 m-1 py-1 rounded">Training & Visit Scheme</button>
        <button id="button-6" class="bg-green-500 text-white px-3 m-1 py-1 rounded">Extension Education Institute, Anand</button>
        <button id="button-7" class="bg-green-500 text-white px-3 m-1 py-1 rounded">Poultry Training Centre, Anand</button>
        <button id="button-8" class="bg-green-500 text-white px-3 m-1 py-1 rounded">School of Baking, Anand</button>
        <button id="button-9" class="bg-green-500 text-white px-3 m-1 py-1 rounded">Mali Training Centre, AAU</button>
        `
      )
    );
  }

}
