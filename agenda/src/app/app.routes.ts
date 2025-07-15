import { Routes } from '@angular/router';
import { ContactoForm } from './features/contacto-form/contacto-form';

export const routes: Routes = [
   {
    path: '',
    component: ContactoForm
  },
  {
    path: 'nuevo-contacto',
    component: ContactoForm
  }
];
