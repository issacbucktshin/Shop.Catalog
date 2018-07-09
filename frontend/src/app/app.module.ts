import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MaterialModule} from '../app/modules/material/material.module'

import { AppComponent } from './app.component';

import { ProductsComponent } from './shared/components/product/products/products.component';
import { AppbarComponent } from './shared/components/appbar/appbar.component';
import { FooterComponent } from './shared/components/footer/footer.component'

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    AppbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  exports:[MaterialModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
