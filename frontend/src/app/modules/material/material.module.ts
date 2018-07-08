import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule, MatMenuModule, MatButtonModule, MatCheckboxModule } from '@angular/material';


@NgModule({
  imports: [
    CommonModule,
    MatMenuModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule
  ],
  exports: [
    MatMenuModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule
    
  ],
  declarations: []
})
export class MaterialModule { }
