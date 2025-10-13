import { Routes } from '@angular/router';

import { UserContentComponent } from './user-content/user-content.component';
import { DashboardContentComponent } from './dashboard-content/dashboard-content.component';


export const routes: Routes = [
    { path: '', component:DashboardContentComponent },
    { path: 'dashboard', component: DashboardContentComponent },
    { path: 'user', component: UserContentComponent }
];
