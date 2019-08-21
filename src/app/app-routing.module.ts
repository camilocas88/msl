import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path:'home',
    loadChildren:'./pages/home/home.module#HomeModule'
  },
  {
    path:'contacto',
    loadChildren:'./pages/contacto/contacto.module#ContactoModule'
  },
  {
    path:'sobre-nosotros',
    loadChildren: './pages/about/about.module#AboutModule'
  },
  {
    path:'servicios',
    loadChildren: './pages/servicios/servicios.module#ServiciosModule'
  },
  {
    path:'casos-de-interes',
    loadChildren:'./pages/testimonios/testimonios.module#TestimoniosModule'
  },
  {
    path:'',
    redirectTo:'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
