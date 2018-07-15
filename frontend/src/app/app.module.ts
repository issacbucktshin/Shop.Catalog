import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RoutingModule } from './modules/routing/routing.module'
import { MaterialModule} from '../app/modules/material/material.module'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ProductsComponent } from './shared/components/product/products/products.component';
import { AppbarComponent } from './shared/components/appbar/appbar.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { CarouselComponent } from './shared/components/carousel/carousel.component';
import { CatalogComponent } from './pages/catalog/catalog.component';
import { FilterComponent } from './shared/components/filter/filter.component';
import { ProductComponent } from './shared/components/product/product.component';
import { ProductModalComponent } from './shared/components/product/product-modal/product-modal.component';
import { FilterPipe } from './shared/pipes/filters/filter.pipe';
import { CategoryFilterPipe } from './shared/pipes/product/category-filter.pipe';
import { SliderComponent } from './shared/components/slider/slider.component';
import { PriceFilterPipe } from './shared/pipes/product/price-filter.pipe';
import { ContactusComponent } from './pages/contactus/contactus.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    AppbarComponent,
    FooterComponent,
    HomeComponent,
    CarouselComponent,
    CatalogComponent,
    FilterComponent,
    ProductComponent,
    ProductModalComponent,
    FilterPipe,
    CategoryFilterPipe,
    SliderComponent,
    PriceFilterPipe,
    ContactusComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    RoutingModule,
    HttpClientModule,
    NgbModule.forRoot(),
    FormsModule
  ], 
  entryComponents: [
    ProductModalComponent,
  ],
  exports:[MaterialModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
