import {  Injectable, signal } from '@angular/core';
import { Contacto } from '../interfaces/contacto';
@Injectable({
  providedIn: 'root'
})
export class ContactoService {
  contactos = signal<Contacto[]>([])
  addContacto(contacto: Contacto){
    this.contactos.update((item)=>[...item, contacto])
  }

}
