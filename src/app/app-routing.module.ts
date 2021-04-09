import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './components/product/product.component';

const routes: Routes = [
  {path:"",pathMatch:"full",component:ProductComponent}, // anasayfa için
  {path:"products",component:ProductComponent},
  {path:"products/category/:categoryId", component:ProductComponent} 
];

// :categoryId, activatedRoute daki params parametlerindendir


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
