import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RecuperarCorreoComponent } from "../recuperar-correo/recuperar-correo.component";
import { RegisterPageComponent } from "../register-page/register-page.component";
@Component({
  selector: 'login-page',
  standalone: true,
  imports: [RouterModule, FormsModule, ReactiveFormsModule, RecuperarCorreoComponent, RegisterPageComponent],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {

  constructor(private router: Router) {

  }

  public myForm: FormGroup = new FormGroup({
    correo: new FormControl('', [Validators.minLength(20), Validators.required, Validators.email], []),
    password: new FormControl('', [Validators.minLength(4), Validators.required], [])
  })


  login() {
    console.log(this.myForm.value)
    this.router.navigate(['/']);
  }

}
