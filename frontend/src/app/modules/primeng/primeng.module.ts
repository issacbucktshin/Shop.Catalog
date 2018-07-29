import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlideMenuModule } from 'primeng/slidemenu';

@NgModule({
  imports: [
    CommonModule,
    SlideMenuModule
  ],
  declarations: [],
  exports: [SlideMenuModule]
})
export class PrimengModule { }
