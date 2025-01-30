import { Routes } from '@angular/router';
import { StudentDashboardComponent } from './Pages/Dashboard/student-dashboard/student-dashboard.component';
import { CouresDetailsComponent } from './Pages/Course/coures-details/coures-details.component';
import { LayoutComponent } from './Pages/Layout/layout/layout.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
  },
  {
    path: 'Home',
    component: LayoutComponent,
  },
  {
    path: 'Student-Dashboard',
    component: StudentDashboardComponent,
  },
  {
    path: 'Course-Details',
    component: CouresDetailsComponent,
  },
];
