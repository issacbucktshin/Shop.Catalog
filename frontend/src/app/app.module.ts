import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RoutingModule } from './modules/routing/routing.module'
import { MaterialModule} from '../app/modules/material/material.module'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http'; 

import { AppComponent } from './app.component';
import { ProductsComponent } from './shared/components/product/products/products.component';
import { AppbarComponent } from './shared/components/appbar/appbar.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { CarouselComponent } from './shared/components/carousel/carousel.component';
import { CatalogComponent } from './pages/catalog/catalog.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    AppbarComponent,
    FooterComponent,
    HomeComponent,
    CarouselComponent,
    CatalogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    RoutingModule,
    HttpClientModule,
    NgbModule.forRoot()
  ],
  exports:[MaterialModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
