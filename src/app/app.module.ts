import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SumaComponent } from './Calculos/suma/suma.component';
import { RestaComponent } from './Calculos/resta/resta.component';

import { FormsModule } from '@angular/forms';
import { OperacionComponent } from './calculos/operacion/operacion.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductoFilterPipe } from './product/producto-filter.pipe';
import { MenuComponent } from './menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule} from '@angular/material/button';
import { TablaComponent } from './calculos/tabla/tabla.component';
import { CinemaComponent } from './calculos/cinema/cinema.component';

@NgModule({
  declarations: [
    AppComponent,
    SumaComponent,
    RestaComponent,
    OperacionComponent,
    ProductListComponent,
    ProductoFilterPipe,
    MenuComponent,
    TablaComponent,
    CinemaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
