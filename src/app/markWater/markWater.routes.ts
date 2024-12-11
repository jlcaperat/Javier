import { Route, Routes } from "@angular/router";
import { LayoutPageComponent } from "./layout-page/layout-page.component";

export const routes: Routes = [
    {
        path: '',
        component: LayoutPageComponent,
        children: [
            {
                path: 'crear',
                loadComponent: () => import('./mark-water/mark-water.component').then((m) => m.MarkWaterComponent),
            },                   
            {
                path: '**',
                redirectTo: 'login'
            }
        ]
    }
] as Routes