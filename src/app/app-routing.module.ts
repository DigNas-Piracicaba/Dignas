import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioUrbanoComponent } from './formulario-urbano/formulario-urbano.component';
import { FormularioComponent } from './formulario/formulario.component';
import { HomeComponent } from './home/home.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

const routes: Routes = [

  {path: '', redirectTo: 'home', pathMatch: 'full'},
  
  {path: 'home', component:HomeComponent},
  {path: 'landing-page', component:LandingPageComponent},
  {path: 'formulario', component:FormularioComponent},
  {path: 'formulario-urbano', component:FormularioUrbanoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
