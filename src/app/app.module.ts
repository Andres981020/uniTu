import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { RolesComponent } from './components/roles/roles.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PageComponent } from './components/page/page.component';
import { LoginComponent } from './components/login/login.component';
import { MapComponent } from './map/map.component';
import { MarkerService } from './services/marker.service';
import { SedesComponent } from './components/sedes/sedes.component';
import { PopupService } from './services/popup.service';
import { CursosComponent } from './components/cursos/cursos.component';
import { MembresiasComponent } from './components/membresias/membresias.component';
import { GruposComponent } from './components/grupos/grupos.component';

@NgModule({
  declarations: [
    AppComponent,
    RolesComponent,
    UsuariosComponent,
    NavbarComponent,
    PageComponent,
    LoginComponent,
    MapComponent,
    SedesComponent,
    CursosComponent,
    MembresiasComponent,
    GruposComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    MarkerService,
    PopupService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
