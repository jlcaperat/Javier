import { Component } from '@angular/core';
import { Usuario } from '../interfaces/usuario';
import { Paises } from '../interfaces/Paises';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'register-page',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css'
})
export class RegisterPageComponent {

  constructor(
    private router: Router) {

  }
  ListaPaises: String[] = Paises;
  private usuario?: Usuario;


  public myForm: FormGroup = new FormGroup({

    nombre: new FormControl('', [Validators.minLength(4), Validators.required], []),
    apellido: new FormControl('', [Validators.minLength(4), Validators.required], []),
    correo: new FormControl('', [Validators.minLength(20), Validators.required], []),
    pais: new FormControl('', [Validators.required], []),
    usuario: new FormControl('', [Validators.minLength(4), Validators.required], []),
    password: new FormControl('', [Validators.minLength(4), Validators.required], [])
  })

  registrar() {
   console.log(this.myForm.value)
    this.router.navigateByUrl('/')
  }


}
