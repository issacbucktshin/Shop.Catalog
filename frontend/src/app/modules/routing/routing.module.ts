import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';;
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../../pages/home/home.component'
import { CatalogComponent } from '../../pages/catalog/catalog.component';
import { ContactusComponent} from '../../pages/contactus/contactus.component'

const routes: Routes = [
  {
      path: '',
      component: HomeComponent,
  },
  {
      path: 'catalog',
      component: CatalogComponent,
  },
  {
      path: 'contactus',
      component: ContactusComponent,
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
      RouterModule
  ],
  declarations: []
})
export class RoutingModule { }
