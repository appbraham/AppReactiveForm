import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { cantBeStrider } from '../../shared/validators/validators';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
})
export class RegisterPageComponent {

  public myForm: FormGroup = this.fb.group({
    name: ['', [ Validators.required] ],
    email: ['', [ Validators.required, Validators.email ]],
    username: ['', [Validators.required, cantBeStrider] ],
    password: ['', [Validators.required, Validators.minLength(6)] ],
    password2: ['', [Validators.required, Validators.minLength(6)] ],
  });

  constructor( private fb: FormBuilder ){}

  isValidField(){
    // TODO: obtener validación desde un servicio.
  }

  onSubmit(){
    if( this.myForm.invalid){
      this.myForm.markAllAsTouched();
      return;
    }

    console.log(this.myForm.value);

  }
}
