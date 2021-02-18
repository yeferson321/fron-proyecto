import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MensajeexitoComponent } from './mensajeexito/mensajeexito.component';
import { RegistroComponent } from './registro/registro.component'

const routes: Routes = [
  { path: '', component:RegistroComponent },
  { path: 'mensajeexito', component:MensajeexitoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
