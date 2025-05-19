import { Routes } from '@angular/router';
import {HomeComponent} from './public/pages/home/home.component';

const PageNotFoundComponent =
  () => import('./public/pages/page-not-found/page-not-found.component')
    .then(m => m.PageNotFoundComponent);

const BundlesCardComponent =
  () => import('./store/components/bundles-card/bundles-card.component')
    .then(m => m.BundlesCardComponent);

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {path: 'store/bundles', loadComponent: BundlesCardComponent },
  {path: '', redirectTo: 'home',pathMatch: 'full'},
  { path: '**',loadComponent:  PageNotFoundComponent }

];

