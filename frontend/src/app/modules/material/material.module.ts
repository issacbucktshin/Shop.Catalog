import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule, MatToolbarModule,MatCardModule,MatIconModule, MatMenuModule, MatButtonModule, MatCheckboxModule } from '@angular/material';


@NgModule({
  imports: [
    CommonModule,
    MatMenuModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatCardModule,
    MatToolbarModule,
    MatListModule
  ],
  exports: [
    MatMenuModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatCardModule,
    MatToolbarModule,
    MatListModule
  ],
  declarations: []
})
export class MaterialModule { }
