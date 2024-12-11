import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-recuperar-correo',
  standalone: true,
  imports: [RouterModule, FormsModule, ReactiveFormsModule],
  templateUrl: './recuperar-correo.component.html',
  styleUrl: './recuperar-correo.component.css'
})
export class RecuperarCorreoComponent {

  constructor(private router: Router){

  }

  public myForm: FormGroup = new FormGroup({
    correo: new FormControl('', [Validators.minLength(20), Validators.required, Validators.email], [])
  })

  recordar() {
    if (this.myForm.invalid) {
      return
    }

    console.log(this.myForm.value)
    this.router.navigateByUrl('/')
  }

}
