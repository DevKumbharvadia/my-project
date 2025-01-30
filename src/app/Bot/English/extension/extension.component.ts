import { ChangeDetectorRef, Component, inject, NgZone } from '@angular/core';
import { AppServiceService } from '../../../Service/app-service.service';
import { ExtensionEducationService } from '../../../Service/English/ExtensonEducation/extension-education.service';
import { AllComponent } from './all/all.component';
import { AnandCampusComponent } from './anand-campus/anand-campus.component';
import { OffCampusComponent } from './off-campus/off-campus.component';

@Component({
  selector: 'app-extension',
  standalone: true,
  imports: [
    AllComponent,
    AllComponent,
    AnandCampusComponent,
    OffCampusComponent,
  ],
  templateUrl: './extension.component.html',
  styleUrl: './extension.component.css',
})
export class ExtensionComponent {
  extensionEducationService = inject(ExtensionEducationService);
  appService = inject(AppServiceService);
  zone = inject(NgZone);
  cdRef = inject(ChangeDetectorRef);
  showAll = 0;
  showAnandCampus = 0;
  showOffCampus = 0;

  constructor() {
    this.extensionEducationService.loadExtensionData();
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
      case 'ShowAll':
        if(this.showAnandCampus || this.showOffCampus){
          this.appService.messages.pop();
        }
        this.showAll = 1;
        this.showOffCampus = 0;
        this.showAnandCampus = 0;
        break;
        case 'ShowAnandCampus':
          if(this.showAll || this.showOffCampus){
            this.appService.messages.pop();
          }
          this.showAll = 0;
          this.showOffCampus = 0;
          this.showAnandCampus = 1;
        break;
        case 'ShowOffCampus':
          if(this.showAnandCampus || this.showAll){
            this.appService.messages.pop();
          }
          this.showAll = 0;
          this.showOffCampus = 1;
          this.showAnandCampus = 0;
        break;
      default:
        console.log('Other button clicked');
        break;
    }
  }
}
