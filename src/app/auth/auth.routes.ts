import { Route, Routes } from "@angular/router";
import { LayoutPageComponent } from "./layout-page/layout-page.component";

export const routes: Routes = [
    {
        path: '',
        component: LayoutPageComponent,
        children: [
            {
                path: 'login',
                loadComponent: () => import('./login-page/login-page.component').then((m) => m.LoginPageComponent),
            },
            {
                path: 'register',
                loadComponent: () => import('./register-page/register-page.component').then((m) => m.RegisterPageComponent)
            },
            {
                path: 'recuperar',
                loadComponent: () => import('./recuperar-correo/recuperar-correo.component').then((m) => m.RecuperarCorreoComponent)
            },
            {
                path: '**',
                redirectTo: 'login'
            }
        ]
    }
] as Routes