import { Routes, RouterModule } from '@angular/router';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';


const pagesRoutes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            { path: 'dashboard', component: DashboardComponent },
            { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
            { path: 'account-settings', component: AccountSettingsComponent }
        ]
    },
];
// @NgModule({
//     imports: [RouterModule.forChild(pagesRoutes)],
//     exports: [RouterModule]
// })
export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes )
