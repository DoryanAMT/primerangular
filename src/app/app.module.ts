import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PrimerComponent } from '../components/primercomponent/primer.component';
import { HooksAngular } from '../components/hooksangular/hooksangular.component';
import { DeportesComponent } from '../components/deportes/deportes.component';
import { FormsBindingComponent } from '../components/formsbinding/formsbinding.component';
import { SumarNumerosComponent } from '../components/sumanumeros/sumanumeros.component';
import { PruebaComponent } from './components/prueba/prueba.component';


@NgModule({
  declarations: [
    AppComponent,
    PrimerComponent,
    HooksAngular,
    DeportesComponent,
    FormsBindingComponent,
    SumarNumerosComponent,
    PruebaComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
