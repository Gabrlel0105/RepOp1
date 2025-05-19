import { Routes } from '@angular/router';
import {HomeComponent} from './public/pages/home/home.component';

const PageNotFoundComponent =
  () => import('./public/pages/page-not-found/page-not-found.component')
    .then(m => m.PageNotFoundComponent);

const BundlesCardComponent =
  () => import('./store/components/bundles-card/bundles-card.component')
    .then(m => m.BundlesCardComponent);

const BundlesComponent =
  () => import('./store/page/bundles/bundles.component')
    .then(m => m.BundlesComponent);

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {path: 'store/bundles', loadComponent: BundlesComponent  },
  {path: '', redirectTo: 'home',pathMatch: 'full'},
  { path: '**',loadComponent:  PageNotFoundComponent }

];

