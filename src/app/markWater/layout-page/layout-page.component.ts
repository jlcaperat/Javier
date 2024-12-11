import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-layout-page',
  standalone: true,
  imports: [RouterModule, FormsModule, ReactiveFormsModule],
  templateUrl: './layout-page.component.html',
  styleUrl: './layout-page.component.css'
})
export class LayoutPageComponent {

  constructor(private router: Router){

  }
  public myForm: FormGroup = new FormGroup({
    correo: new FormControl('', [Validators.minLength(20), Validators.required, Validators.email], [])
  })

  crear() {
    if (this.myForm.invalid) {
      return
    }

    console.log(this.myForm.value)
    this.router.navigateByUrl('/')
  }
}
