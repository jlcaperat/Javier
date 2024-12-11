import { Component } from '@angular/core';
import { RegisterPageComponent } from "../../auth/register-page/register-page.component";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RegisterPageComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}
