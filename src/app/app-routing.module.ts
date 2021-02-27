import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistroComponent } from './registro/registro.component';
import { LoginComponent } from './login/login.component';
import { InicioComponent } from './inicio/inicio.component';
import { AdopcionComponent } from './adopcion/adopcion.component';
import { MascotaComponent } from './mascota/mascota.component';
import { PaginaprincipalComponent } from './paginaprincipal/paginaprincipal.component';
import { SobreComponent } from './sobre/sobre.component';

const routes: Routes = [
  { path: '', component:PaginaprincipalComponent },
  { path: '', component:SobreComponent},
  { path: 'inicio', component:InicioComponent},
  { path: 'login', component:LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'adopcion', component: AdopcionComponent },
  { path: 'mascota', component: MascotaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
