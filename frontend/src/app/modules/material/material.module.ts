import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule,MatCardModule,MatIconModule, MatMenuModule, MatButtonModule, MatCheckboxModule } from '@angular/material';


@NgModule({
  imports: [
    CommonModule,
    MatMenuModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatCardModule,
    MatToolbarModule
  ],
  exports: [
    MatMenuModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatCardModule,
    MatToolbarModule
  ],
  declarations: []
})
export class MaterialModule { }
