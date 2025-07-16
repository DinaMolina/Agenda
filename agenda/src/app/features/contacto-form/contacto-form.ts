import { Component, inject, signal } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { FormValidators } from '../../utils/form-validators';
import { Navbar } from "../../shared/navbar/navbar";
import { ListaContactos } from '../lista-contactos/lista-contactos';
import { ContactoService } from '../../services/contactoService';

@Component({
  selector: 'app-contacto-form',
  imports: [ReactiveFormsModule, Navbar, ListaContactos],
  templateUrl: './contacto-form.html',
  standalone: true,
})
export class ContactoForm {

 private fb = inject(FormBuilder)
 formValidators = FormValidators
 contactoService = inject(ContactoService)
 formContacto: FormGroup = this.fb.group({
  nombre: ['', [Validators.required, Validators.minLength(3)]],
  email: ['', [Validators.required, Validators.pattern(this.formValidators.emailPattern)], ],
  telefono: ['',  [Validators.maxLength(13), Validators.pattern(this.formValidators.telefonePattern)], ],
  mensaje: ['', [Validators.required, Validators.minLength(50)]],
  terminos: [false, Validators.requiredTrue]
 })
 alerta = signal<boolean>(false)


 saveContacto(){
  if (this.formContacto.invalid) {
    this.formContacto.markAllAsTouched()
    return;
  }

  this.contactoService.addContacto(this.formContacto.value)
  this.formContacto.reset()
  this.alerta.set(true)

 }
}
