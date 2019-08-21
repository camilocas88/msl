import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestimoniosRoutingModule } from './testimonios-routing.module';
import { TestimoniosComponent } from './testimonios.component';


@NgModule({
  declarations: [TestimoniosComponent],
  imports: [
    CommonModule,
    TestimoniosRoutingModule
  ]
})
export class TestimoniosModule { }
