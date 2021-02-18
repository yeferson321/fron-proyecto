import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MensajeexitoComponent } from './mensajeexito/mensajeexito.component';
import { RegistroComponent } from './registro/registro.component'
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component:LoginComponent },
  { path: 'mensajeexito', component: MensajeexitoComponent },
  { path: 'registro', component: RegistroComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
