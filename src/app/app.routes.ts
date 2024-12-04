import { Routes } from '@angular/router';
import { LayoutPageComponent } from './auth/layout-page/layout-page.component';
import { ShareComponent } from './componentes/share/share.component';
import { Error404Component } from './share/error404/error404.component';

export const routes: Routes = [

        {
            path: '',
            pathMatch: 'full',
            redirectTo: 'auth'
        },       
        {
            path: 'auth',
            loadChildren:()=>import('./auth/auth.routes').then((m)=>m.routes)
        },
        {
            path: '404',
            component: Error404Component,
          },
        {
            path: '**',
            redirectTo: '404',
          }
];
