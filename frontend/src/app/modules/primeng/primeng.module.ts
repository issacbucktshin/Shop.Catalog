import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabMenuModule } from 'primeng/tabmenu';
import { MenubarModule } from 'primeng/menubar';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  exports: [
    TabMenuModule,
    MenubarModule
  ]
})
export class PrimengModule { }
