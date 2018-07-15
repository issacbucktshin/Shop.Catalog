import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  MatFormFieldModule,
  MatSliderModule,
  MatListModule, 
  MatToolbarModule,
  MatCardModule,
  MatIconModule, 
  MatMenuModule,
  MatButtonModule,
  MatCheckboxModule, 
  MatInputModule
} from '@angular/material';


@NgModule({
  imports: [
    MatInputModule,
    MatFormFieldModule,
    CommonModule,
    MatMenuModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatCardModule,
    MatToolbarModule,
    MatListModule,
    MatSliderModule
  ],
  exports: [
    MatInputModule,
    MatFormFieldModule,
    MatMenuModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatCardModule,
    MatToolbarModule,
    MatListModule,
    MatSliderModule
  ],
  declarations: []
})
export class MaterialModule { }
