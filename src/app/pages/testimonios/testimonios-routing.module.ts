import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestimoniosComponent } from './testimonios.component';


const routes: Routes = [
  {
    path: '',
    component:TestimoniosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestimoniosRoutingModule { }
