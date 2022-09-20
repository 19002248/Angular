import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SumaComponent } from './Calculos/suma/suma.component';
import { RestaComponent } from './Calculos/resta/resta.component';

import { FormsModule } from '@angular/forms';
import { OperacionComponent } from './calculos/operacion/operacion.component';

@NgModule({
  declarations: [
    AppComponent,
    SumaComponent,
    RestaComponent,
    OperacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
