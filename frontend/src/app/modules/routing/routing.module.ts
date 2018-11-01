import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';;
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../../pages/home/home.component'
import { CatalogComponent } from '../../pages/catalog/catalog.component';
import { ContactusComponent} from '../../pages/contactus/contactus.component'
import { AboutusComponent } from '../../pages/aboutus/aboutus.component'

const routes: Routes = [
  {
      path:'',
      redirectTo: '/home',
      pathMatch: 'full'
  },
  {
      path: 'home',
      component: HomeComponent,
  },
  {
      path: 'catalog',
      component: CatalogComponent,
  },
  {
      path: 'about',
      component: AboutusComponent
  },
  {
      path: 'contact',
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
