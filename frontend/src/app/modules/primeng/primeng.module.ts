import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabMenuModule } from 'primeng/tabmenu';
import { MenubarModule } from 'primeng/menubar';
import {InputTextModule} from 'primeng/inputtext';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  exports: [
    TabMenuModule,
    MenubarModule,
    InputTextModule
  ]
})
export class PrimengModule { }
