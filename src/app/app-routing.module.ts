import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OperacionComponent } from './calculos/operacion/operacion.component';
import { TablaComponent } from './calculos/tabla/tabla.component';
import { CinemaComponent } from './calculos/cinema/cinema.component';
import { ProductListComponent } from './product/product-list/product-list.component';

const routes: Routes = [
  {path:'', component: ProductListComponent},
  {path:'suma', component: OperacionComponent},
  {path:'tablaa', component: TablaComponent},
  {path:'cinepolis', component: CinemaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
