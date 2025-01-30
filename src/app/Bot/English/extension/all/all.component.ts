import { Component, inject } from '@angular/core';
import { AllService } from '../../../../Service/English/ExtensonEducation/All/all.service';

@Component({
  selector: 'app-all',
  standalone: true,
  imports: [],
  templateUrl: './all.component.html',
  styleUrl: './all.component.css'
})
export class AllComponent {
showAllService = inject(AllService);

constructor(){
  this.showAllService.loadExtensionAll();
}
}
