import { Injectable } from '@angular/core';
import { AppServiceService } from '../../../app-service.service';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class AllService {

  constructor(
    private appServices: AppServiceService,
    private sanitizer: DomSanitizer
  ) {}

  loadExtensionAll() {
    this.appServices.messages.push(
      this.sanitizer.bypassSecurityTrustHtml(
        `<h3 class="m-1">All Extenson Education Center</h3>
         <button id="button-1" class="bg-green-500 text-white px-3 m-1 py-1 rounded">Transfer of Technology Centre, Arnej</button>
          <button id="button-2" class="bg-green-500 text-white px-3 m-1 py-1 rounded">Krishi Vigyan Kendra, Devataj(Sojitra)</button>
          <button id="button-3" class="bg-green-500 text-white px-3 m-1 py-1 rounded">Krishi Vigyan Kendra, Arnej</button>
          <button id="button-4" class="bg-green-500 text-white px-3 m-1 py-1 rounded">Krishi Vigyan Kendra, Dahod</button>
          <button id="button-5" class="bg-green-500 text-white px-3 m-1 py-1 rounded">Tribal Training, Dahod</button>
          <button id="button-6" class="bg-green-500 text-white px-3 m-1 py-1 rounded">FARM TECHNOLOGY TRAINING CENTRE, NENPUR</button>
          <button id="button-7" class="bg-green-500 text-white px-3 m-1 py-1 rounded">PASHU VIGYAN KENDRA, Limkheda</button>
          <button id="button-8" class="bg-green-500 text-white px-3 m-1 py-1 rounded">Directorate of Extension Education</button>
          <button id="button-9" class="bg-green-500 text-white px-3 m-1 py-1 rounded">Sardar Smruti Kendra, Anand</button>
          <button id="button-10" class="bg-green-500 text-white px-3 m-1 py-1 rounded">Sardar Patel Agricultural Educational Museum, Anand</button>
          <button id="button-11" class="bg-green-500 text-white px-3 m-1 py-1 rounded">Agriculture Technology Information Center, Anand</button>
          <button id="button-12" class="bg-green-500 text-white px-3 m-1 py-1 rounded">Training & Visit Scheme</button>
          <button id="button-13" class="bg-green-500 text-white px-3 m-1 py-1 rounded">Extension Education Institute, Anand</button>
          <button id="button-14" class="bg-green-500 text-white px-3 m-1 py-1 rounded">Poultry Training Centre, Anand</button>
          <button id="button-15" class="bg-green-500 text-white px-3 m-1 py-1 rounded">School of Baking, Anand</button>
          <button id="button-16" class="bg-green-500 text-white px-3 m-1 py-1 rounded">Mali Training Centre, AAU</button>
          <button id="button-17" class="bg-green-500 text-white px-3 m-1 py-1 rounded">Tribal Research cum Training Centre, Devagadhbaria</button>
        `
      )
    );
  }

}
