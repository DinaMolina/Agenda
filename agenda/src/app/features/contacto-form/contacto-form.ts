import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contacto-form',
  imports: [ReactiveFormsModule],
  templateUrl: './contacto-form.html',
})
export class ContactoForm {

 private fb = inject(FormBuilder)

 formContacto: FormGroup = this.fb.group({
  nombre: ['', [Validators.required, Validators.minLength(3)]],
  email: ['', [Validators.required]],
  telefono: [''],
  mensaje: ['', [Validators.required, Validators.minLength(50)]],
  terminos: [false, Validators.required]
 })

 isValidField(fieldName: string): boolean | null {
  return !!this.formContacto.controls[fieldName].errors
 }

 saveContacto(){
  if (this.formContacto.invalid) {
    this.formContacto.markAllAsTouched()
    return;
  }
 }
}
