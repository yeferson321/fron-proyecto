import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { InicioComponent } from './inicio/inicio.component';
import { AdopcionComponent } from './adopcion/adopcion.component';
import { MascotaComponent } from './mascota/mascota.component';
import { Nav2Component } from './nav2/nav2.component';
import { SobreComponent } from './sobre/sobre.component';
import { PaginaprincipalComponent } from './paginaprincipal/paginaprincipal.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    NavComponent,
    FooterComponent,
    InicioComponent,
    AdopcionComponent,
    MascotaComponent,
    Nav2Component,
    SobreComponent,
    PaginaprincipalComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
