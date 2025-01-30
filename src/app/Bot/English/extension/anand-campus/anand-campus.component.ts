import { Component, inject } from '@angular/core';
import { AnandCampusService } from '../../../../Service/English/ExtensonEducation/AnandCampus/anand-campus.service';

@Component({
  selector: 'app-anand-campus',
  standalone: true,
  imports: [],
  templateUrl: './anand-campus.component.html',
  styleUrl: './anand-campus.component.css'
})
export class AnandCampusComponent {
showAnandCampusService = inject(AnandCampusService);

constructor(){
  this.showAnandCampusService.loadExtensionAnandCampus();
}
}
