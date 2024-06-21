import { Routes } from '@angular/router';
import { LoginComponent } from './domains/auth/pages/login/login.component';
import { LayoutComponent } from './domains/shared/components/layout/layout.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  /* {
    path: 'main',
    loadChildren: () => import('./domains/results/results.routes').then(m => m.RESULTS_ROUTES)
  }, */
  {
    path: 'main',
    component: LayoutComponent,
    children: [
      { path: '', loadChildren: () => import('./domains/results/results.routes').then(m => m.RESULTS_ROUTES) }
    ]
  },
  { path: '**', redirectTo: '' }
];
