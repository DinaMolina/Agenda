import { Component, inject } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ContactoService } from '../../services/contactoService';

import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faUsersLine } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-lista-contactos',
  imports: [FontAwesomeModule],
  standalone: true,
  templateUrl: './lista-contactos.html',
})
export class ListaContactos {
  faUser = faUser
  faUsersLine = faUsersLine
  contactoService = inject(ContactoService)

}
