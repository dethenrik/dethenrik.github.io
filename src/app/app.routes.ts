import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        loadComponent: () =>
            import('./landing-page/landing-page').then(
                (component) => component.LandingPage
            )
    },
    {
        path: '**',
        redirectTo: ''
    }
];