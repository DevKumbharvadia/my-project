import { NgFor, NgIf, NgStyle } from '@angular/common';
import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  inject,
  NgZone,
  ViewChild,
} from '@angular/core';
import { AppServiceService } from '../../../Service/app-service.service';
import { EnglishMainComponent } from '../../English/english-main.component';

@Component({
  selector: 'app-bot-ui',
  standalone: true,
  imports: [NgIf, EnglishMainComponent],
  templateUrl: './bot-ui.component.html',
  styleUrl: './bot-ui.component.css',
})
export class BotUiComponent {
  isChatOpen = false;
  appServices = inject(AppServiceService);

  // Window dimensions
  windowWidth = 400;
  windowHeight = 400;

  // Track resizing direction
  resizing = false;
  currentEdge: string = ''; // Will store which edge is being dragged

  @ViewChild('chatWindow', { static: false }) chatWindow!: ElementRef;

  constructor(private cdRef: ChangeDetectorRef, private zone: NgZone) {
  }

  toggleChat() {
    this.isChatOpen = !this.isChatOpen;
    this.appServices.SelectedLanguage = 0;
  }

  ngAfterViewInit(): void {
    this.attachDelegatedClickListener(); // Attach the delegated click listener
  }

  // Attach event listener to the body for delegated clicks on buttons
  attachDelegatedClickListener(): void {
    document.body.addEventListener('click', (event: Event) => {
      const target = event.target as HTMLElement;
      if (target && target.tagName === 'BUTTON') {
        this.zone.run(() => {
          this.handleButtonClick(target.id);
          this.cdRef.detectChanges(); // Manually trigger change detection
        });
      }
    });
  }

  // Handle button clicks based on the button id
  handleButtonClick(buttonId: string): void {
    console.log(`Button clicked: ${buttonId}`);
    if (buttonId === 'LangEng') {
      this.appServices.SelectedLanguage = 1;
    } else if (buttonId === 'LangGuj') {
      this.appServices.SelectedLanguage = 2;
    }
  }

  // Dragging logic
  private offsetX = 0;
  private offsetY = 0;

  startDrag(event: MouseEvent): void {
    const chatWindow = event.target as HTMLElement;
    this.offsetX = event.clientX - chatWindow.getBoundingClientRect().left;
    this.offsetY = event.clientY - chatWindow.getBoundingClientRect().top;

    document.addEventListener('mousemove', this.onDrag);
    document.addEventListener('mouseup', this.stopDrag);
  }

  onDrag = (event: MouseEvent): void => {
    const chatWindow = document.getElementById('chatWindow')!;
    const left = event.clientX - this.offsetX;
    const top = event.clientY - this.offsetY;

    chatWindow.style.left = `${left}px`;
    chatWindow.style.top = `${top}px`;
  };

  stopDrag = (): void => {
    document.removeEventListener('mousemove', this.onDrag);
    document.removeEventListener('mouseup', this.stopDrag);
  };
}
