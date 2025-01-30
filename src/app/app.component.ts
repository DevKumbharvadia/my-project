import { Component } from '@angular/core';
import { LayoutComponent } from "./Pages/Layout/layout/layout.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-project';
}
