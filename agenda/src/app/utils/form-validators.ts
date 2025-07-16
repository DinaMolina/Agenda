import { FormGroup } from '@angular/forms';

export class FormValidators {
  static namePattern = '([a-zA-Z]+) ([a-zA-Z]+)';
  static emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';
  static notOnlySpaces = '^[a-zA-Z0-9]+$';
  static telefonePattern = '^[0-9]{13}$'
  static isValidField(form: FormGroup, fieldName: string): boolean | null {
    return form.controls[fieldName].errors && form.controls[fieldName].touched
  }
  static getFieldError(form: FormGroup, fieldName: string): string | null {
    let message = null
    if (form.controls[fieldName]) {
      const errors = form.controls[fieldName].errors ?? {}

      Object.keys(errors).forEach(element => {
        switch (element) {
          case 'required':
            message = 'Este campo es requerido'
            break
          case 'minlength':
            message = `Este campo tiene un mínimo de ${errors['minlength'].requiredLength} caracteres`
            break
             case 'maxlength':
            message = `Este campo sobrepasa los ${errors['maxlength'].requiredLength} caracteres`
            break
          case 'pattern':
          if (errors['pattern'].requiredPattern === FormValidators.emailPattern) {
            message = 'El valor no tiene la estructura de un correo electrónico'
          }
           if (errors['pattern'].requiredPattern === FormValidators.telefonePattern) {
            message = 'El teléfono debe ser 13 números'
          }
        }
      });
    }
    return message
  }
}
