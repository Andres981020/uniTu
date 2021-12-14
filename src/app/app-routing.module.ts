import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursosComponent } from './components/cursos/cursos.component';
import { GruposComponent } from './components/grupos/grupos.component';
import { LoginComponent } from './components/login/login.component';
import { MembresiasComponent } from './components/membresias/membresias.component';
import { PageComponent } from './components/page/page.component';
import { RolesComponent } from './components/roles/roles.component';
import { SedesComponent } from './components/sedes/sedes.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { MapComponent } from './map/map.component';

const routes: Routes = [
  {path:'usuarios', component:UsuariosComponent},
  {path: 'pages', component: PageComponent},
  {path: 'roles', component: RolesComponent},
  {path: 'sedes', component: SedesComponent},
  {path:'login', component: LoginComponent},
  {path:'cursos', component: CursosComponent},
  {path:'grupos', component: GruposComponent},
  {path:'membresias', component: MembresiasComponent},
  {path:'map', component: MapComponent},
  {path:'**', redirectTo:'map', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
