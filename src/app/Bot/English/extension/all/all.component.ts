import { ChangeDetectorRef, Component, inject, NgZone } from '@angular/core';
import { AllService } from '../../../../Service/English/ExtensonEducation/All/all.service';
import { AppServiceService } from '../../../../Service/app-service.service';

@Component({
  selector: 'app-all',
  standalone: true,
  imports: [],
  templateUrl: './all.component.html',
  styleUrl: './all.component.css',
})
export class AllComponent {
  showAllService = inject(AllService);
  appService = inject(AppServiceService);
  zone = inject(NgZone);
  cdRef = inject(ChangeDetectorRef);

  showTcArnej = 0;
  showKvkSojitra = 0;
  showKvkArnej = 0;
  showKvkDahod = 0;
  showTribalDahod = 0;
  showFttcNenpur = 0;
  showPvkLimkheda = 0;
  showDee = 0;
  showSmrutiAnand = 0;
  showSpaemAnand = 0;
  showAticAnand = 0;
  showTvs = 0;
  showEeiAnand = 0;
  showPtcAnand = 0;
  showSbAnand = 0;
  showMtcAau = 0;
  showTribalDevagadhbaria = 0;

  constructor() {
    this.showAllService.loadExtensionAll();
  }

  ngAfterViewInit(): void {
    this.attachDelegatedClickListener();
  }

  attachDelegatedClickListener(): void {
    document.body.addEventListener('click', (event: Event) => {
      const target = event.target as HTMLElement;
      if (target && target.tagName === 'BUTTON') {
        this.zone.run(() => {
          // Ensures Angular detects the change
          this.handleButtonClick(target.id);
          this.cdRef.detectChanges(); // Manually trigger change detection
        });
      }
    });
  }

  handleButtonClick(buttonId: string): void {
    console.log(buttonId);

    switch (buttonId) {
      case 'button-tc-arnej':
        if (this.showTcArnej === 0) {
          this.showAllService.loadTransferOfTechnologyCentreArnej();
          this.showTcArnej = 1;
        }
        break;
      case 'button-kvk-sojitra':
        if (this.showKvkSojitra === 0) {
          this.showAllService.loadKrishiVigyanKendraSojitra();
          this.showKvkSojitra = 1;
        }
        break;
      case 'button-kvk-arnej':
        if (this.showKvkArnej === 0) {
          this.showAllService.loadKrishiVigyanKendraArnej();
          this.showKvkArnej = 1;
        }
        break;
      case 'button-kvk-dahod':
        if (this.showKvkDahod === 0) {
          this.showAllService.loadKrishiVigyanKendraDahod();
          this.showKvkDahod = 1;
        }
        break;
      case 'button-tribal-dahod':
        if (this.showTribalDahod === 0) {
          this.showAllService.loadTribalTrainingDahod();
          this.showTribalDahod = 1;
        }
        break;
      case 'button-fttc-nenpur':
        if (this.showFttcNenpur === 0) {
          this.showAllService.loadFarmTechnologyTrainingCentreNenpur();
          this.showFttcNenpur = 1;
        }
        break;
      case 'button-pvk-limkheda':
        if (this.showPvkLimkheda === 0) {
          this.showAllService.loadPashuVigyanKendraLimkheda();
          this.showPvkLimkheda = 1;
        }
        break;
      case 'button-dee':
        if (this.showDee === 0) {
          this.showAllService.loadDirectorateOfExtensionEducation();
          this.showDee = 1;
        }
        break;
      case 'button-smruti-anand':
        if (this.showSmrutiAnand === 0) {
          this.showAllService.loadSardarSmrutiKendraAnand();
          this.showSmrutiAnand = 1;
        }
        break;
      case 'button-spaem-anand':
        if (this.showSpaemAnand === 0) {
          this.showAllService.loadSardarPatelAgriculturalEducationalMuseumAnand();
          this.showSpaemAnand = 1;
        }
        break;
      case 'button-atic-anand':
        if (this.showAticAnand === 0) {
          this.showAllService.loadAgricultureTechnologyInformationCenterAnand();
          this.showAticAnand = 1;
        }
        break;
      case 'button-tvs':
        if (this.showTvs === 0) {
          this.showAllService.loadTrainingVisitScheme();
          this.showTvs = 1;
        }
        break;
      case 'button-eei-anand':
        if (this.showEeiAnand === 0) {
          this.showAllService.loadExtensionEducationInstituteAnand();
          this.showEeiAnand = 1;
        }
        break;
      case 'button-ptc-anand':
        if (this.showPtcAnand === 0) {
          this.showAllService.loadPoultryTrainingCentreAnand();
          this.showPtcAnand = 1;
        }
        break;
      case 'button-sb-anand':
        if (this.showSbAnand === 0) {
          this.showAllService.loadSchoolOfBakingAnand();
          this.showSbAnand = 1;
        }
        break;
      case 'button-mtc-aau':
        if (this.showMtcAau === 0) {
          this.showAllService.loadMaliTrainingCentreAAU();
          this.showMtcAau = 1;
        }
        break;
      case 'button-tribal-devagadhbaria':
        if (this.showTribalDevagadhbaria === 0) {
          this.showAllService.loadTribalResearchTrainingCentreDevagadhbaria();
          this.showTribalDevagadhbaria = 1;
        }
        break;
      default:
        console.log('Unknown button clicked');
        break;
    }
  }
}
