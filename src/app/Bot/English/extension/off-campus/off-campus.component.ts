import { Component, inject } from '@angular/core';
import { OffCampusService } from '../../../../Service/English/ExtensonEducation/OffCapus/off-campus.service';

@Component({
  selector: 'app-off-campus',
  standalone: true,
  imports: [],
  templateUrl: './off-campus.component.html',
  styleUrl: './off-campus.component.css'
})
export class OffCampusComponent {
showOffCampusService = inject(OffCampusService);

constructor(){
  this.showOffCampusService.loadExtensionOffCampus();
}
}
