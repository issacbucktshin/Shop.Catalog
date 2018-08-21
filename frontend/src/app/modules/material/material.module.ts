import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  MatProgressSpinnerModule,
  MatFormFieldModule,
  MatSliderModule,
  MatListModule, 
  MatToolbarModule,
  MatCardModule,
  MatIconModule, 
  MatMenuModule,
  MatButtonModule,
  MatCheckboxModule, 
  MatInputModule,
  MatSidenavModule
} from '@angular/material';


@NgModule({
  imports: [
    MatProgressSpinnerModule,
    MatSidenavModule,
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
    MatProgressSpinnerModule,
    MatSidenavModule,
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
