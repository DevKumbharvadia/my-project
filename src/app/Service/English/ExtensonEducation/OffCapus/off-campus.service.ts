import { Injectable } from '@angular/core';
import { AppServiceService } from '../../../app-service.service';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class OffCampusService {

  constructor(
    private appServices: AppServiceService,
    private sanitizer: DomSanitizer
  ) {}

  loadExtensionOffCampus() {
    this.appServices.messages.push(
      this.sanitizer.bypassSecurityTrustHtml(
        `<h3 class="m-1">Off Campus Extenson Education Center</h3>
         <button id="button-1" class="bg-green-500 text-white px-3 m-1 py-1 rounded">Transfer of Technology Centre, Arnej</button>
        <button id="button-2" class="bg-green-500 text-white px-3 m-1 py-1 rounded">Krishi Vigyan Kendra, Devataj(Sojitra)</button>
        <button id="button-3" class="bg-green-500 text-white px-3 m-1 py-1 rounded">Krishi Vigyan Kendra, Arnej</button>
        <button id="button-4" class="bg-green-500 text-white px-3 m-1 py-1 rounded">Krishi Vigyan Kendra, Dahod</button>
        <button id="button-5" class="bg-green-500 text-white px-3 m-1 py-1 rounded">Tribal Training, Dahod</button>
        <button id="button-6" class="bg-green-500 text-white px-3 m-1 py-1 rounded">FARM TECHNOLOGY TRAINING CENTRE, NENPUR</button>
        <button id="button-7" class="bg-green-500 text-white px-3 m-1 py-1 rounded">PASHU VIGYAN KENDRA, Limkheda</button>
        <button id="button-8" class="bg-green-500 text-white px-3 m-1 py-1 rounded">Tribal Research cum Training Centre, Devagadhbaria</button>
        `
      )
    );
  }
}
