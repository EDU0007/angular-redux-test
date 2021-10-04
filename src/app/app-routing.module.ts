import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { FormGroupComponent } from './components/form-group/form-group.component';
import { ProductComponent } from './components/product/product.component';
import { HomeComponent } from './views/home/home.component';
const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "form",
    component:  FormGroupComponent 

  },
  {
    path: "about",
    component:  AboutComponent 

  },
  {
    path: "products",
    component: ProductComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
