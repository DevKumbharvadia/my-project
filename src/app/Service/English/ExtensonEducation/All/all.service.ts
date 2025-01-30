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
          <button id="button-tc-arnej" class="bg-green-500 text-white px-3 m-1 py-1 rounded">Transfer of Technology Centre, Arnej</button>
          <button id="button-kvk-sojitra" class="bg-green-500 text-white px-3 m-1 py-1 rounded">Krishi Vigyan Kendra, Devataj(Sojitra)</button>
          <button id="button-kvk-arnej" class="bg-green-500 text-white px-3 m-1 py-1 rounded">Krishi Vigyan Kendra, Arnej</button>
          <button id="button-kvk-dahod" class="bg-green-500 text-white px-3 m-1 py-1 rounded">Krishi Vigyan Kendra, Dahod</button>
          <button id="button-tribal-dahod" class="bg-green-500 text-white px-3 m-1 py-1 rounded">Tribal Training, Dahod</button>
          <button id="button-fttc-nenpur" class="bg-green-500 text-white px-3 m-1 py-1 rounded">FARM TECHNOLOGY TRAINING CENTRE, NENPUR</button>
          <button id="button-pvk-limkheda" class="bg-green-500 text-white px-3 m-1 py-1 rounded">PASHU VIGYAN KENDRA, Limkheda</button>
          <button id="button-dee" class="bg-green-500 text-white px-3 m-1 py-1 rounded">Directorate of Extension Education</button>
          <button id="button-smruti-anand" class="bg-green-500 text-white px-3 m-1 py-1 rounded">Sardar Smruti Kendra, Anand</button>
          <button id="button-spaem-anand" class="bg-green-500 text-white px-3 m-1 py-1 rounded">Sardar Patel Agricultural Educational Museum, Anand</button>
          <button id="button-atic-anand" class="bg-green-500 text-white px-3 m-1 py-1 rounded">Agriculture Technology Information Center, Anand</button>
          <button id="button-tvs" class="bg-green-500 text-white px-3 m-1 py-1 rounded">Training & Visit Scheme</button>
          <button id="button-eei-anand" class="bg-green-500 text-white px-3 m-1 py-1 rounded">Extension Education Institute, Anand</button>
          <button id="button-ptc-anand" class="bg-green-500 text-white px-3 m-1 py-1 rounded">Poultry Training Centre, Anand</button>
          <button id="button-sb-anand" class="bg-green-500 text-white px-3 m-1 py-1 rounded">School of Baking, Anand</button>
          <button id="button-mtc-aau" class="bg-green-500 text-white px-3 m-1 py-1 rounded">Mali Training Centre, AAU</button>
          <button id="button-tribal-devagadhbaria" class="bg-green-500 text-white px-3 m-1 py-1 rounded">Tribal Research cum Training Centre, Devagadhbaria</button>
        `
      )
    );
  }


  loadTransferOfTechnologyCentreArnej() {
    this.appServices.messages.push(
      this.sanitizer.bypassSecurityTrustHtml(
        `<h3 class="m-1">Transfer of Technology Centre, Arnej</h3>`
      )
    );
  }

  loadKrishiVigyanKendraSojitra() {
    this.appServices.messages.push(
      this.sanitizer.bypassSecurityTrustHtml(
        `<h3 class="m-1">Krishi Vigyan Kendra, Devataj (Sojitra)</h3>`
      )
    );
  }

  loadKrishiVigyanKendraArnej() {
    this.appServices.messages.push(
      this.sanitizer.bypassSecurityTrustHtml(
        `<h3 class="m-1">Krishi Vigyan Kendra, Arnej</h3>`
      )
    );
  }

  loadKrishiVigyanKendraDahod() {
    this.appServices.messages.push(
      this.sanitizer.bypassSecurityTrustHtml(
        `<h3 class="m-1">Krishi Vigyan Kendra, Dahod</h3>`
      )
    );
  }

  loadTribalTrainingDahod() {
    this.appServices.messages.push(
      this.sanitizer.bypassSecurityTrustHtml(
        `<h3 class="m-1">Tribal Training, Dahod</h3>`
      )
    );
  }

  loadFarmTechnologyTrainingCentreNenpur() {
    this.appServices.messages.push(
      this.sanitizer.bypassSecurityTrustHtml(
        `<h3 class="m-1">FARM TECHNOLOGY TRAINING CENTRE, NENPUR</h3>`
      )
    );
  }

  loadPashuVigyanKendraLimkheda() {
    this.appServices.messages.push(
      this.sanitizer.bypassSecurityTrustHtml(
        `<h3 class="m-1">PASHU VIGYAN KENDRA, Limkheda</h3>`
      )
    );
  }

  loadDirectorateOfExtensionEducation() {
    this.appServices.messages.push(
      this.sanitizer.bypassSecurityTrustHtml(
        `<h3 class="m-1">Directorate of Extension Education</h3>`
      )
    );
  }

  loadSardarSmrutiKendraAnand() {
    this.appServices.messages.push(
      this.sanitizer.bypassSecurityTrustHtml(
        `<h3 class="m-1">Sardar Smruti Kendra, Anand</h3>`
      )
    );
  }

  loadSardarPatelAgriculturalEducationalMuseumAnand() {
    this.appServices.messages.push(
      this.sanitizer.bypassSecurityTrustHtml(
        `<h3 class="m-1">Sardar Patel Agricultural Educational Museum, Anand</h3>`
      )
    );
  }

  loadAgricultureTechnologyInformationCenterAnand() {
    this.appServices.messages.push(
      this.sanitizer.bypassSecurityTrustHtml(
        `<h3 class="m-1">Agriculture Technology Information Center, Anand</h3>`
      )
    );
  }

  loadTrainingVisitScheme() {
    this.appServices.messages.push(
      this.sanitizer.bypassSecurityTrustHtml(
        `<h3 class="m-1">Training & Visit Scheme</h3>`
      )
    );
  }

  loadExtensionEducationInstituteAnand() {
    this.appServices.messages.push(
      this.sanitizer.bypassSecurityTrustHtml(
        `<h3 class="m-1">Extension Education Institute, Anand</h3>`
      )
    );
  }

  loadPoultryTrainingCentreAnand() {
    this.appServices.messages.push(
      this.sanitizer.bypassSecurityTrustHtml(
        `<h3 class="m-1">Poultry Training Centre, Anand</h3>`
      )
    );
  }

  loadSchoolOfBakingAnand() {
    this.appServices.messages.push(
      this.sanitizer.bypassSecurityTrustHtml(
        `<h3 class="m-1">School of Baking, Anand</h3>`
      )
    );
  }

  loadMaliTrainingCentreAAU() {
    this.appServices.messages.push(
      this.sanitizer.bypassSecurityTrustHtml(
        `<h3 class="m-1">Mali Training Centre, AAU</h3>`
      )
    );
  }

  loadTribalResearchTrainingCentreDevagadhbaria() {
    this.appServices.messages.push(
      this.sanitizer.bypassSecurityTrustHtml(
        `<h3 class="m-1">Tribal Research cum Training Centre, Devagadhbaria</h3>`
      )
    );
  }

}
