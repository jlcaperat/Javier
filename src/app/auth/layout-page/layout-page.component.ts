import { Component } from '@angular/core';
import { LoginPageComponent } from "../login-page/login-page.component";
import { RouterModule, RouterOutlet } from '@angular/router';
import { RegisterPageComponent } from '../register-page/register-page.component';
import { NavbarComponent } from "../../share/navbar/navbar.component";
import { FooterComponent } from "../../share/footer/footer.component";

@Component({
  selector: 'app-layout-page',
  standalone: true,
  imports: [RouterModule, RouterOutlet],
  templateUrl: './layout-page.component.html',
  styleUrl: './layout-page.component.css'
})
export class LayoutPageComponent {

}
