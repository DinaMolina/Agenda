import { Routes } from '@angular/router';
import { ContactoForm } from './features/contacto-form/contacto-form';
import { Home } from './features/home/home';
import { Notfound } from './shared/notfound/notfound';

export const routes: Routes = [
   {
    path: '',
    component: Home
  },
  {
    path: 'contacto',
    component: ContactoForm
  },
  {
    path: 'not-found',
    component: Notfound
  },
  {
    path: '**',
    redirectTo: 'not-found'
  }
];
