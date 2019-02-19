import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { HomeComponent } from './home/home.component';
import { PrincipalComponent } from './principal/principal.component';
import { EstudianteService } from '../commons/estudiante-service';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { UserService } from '../commons/session/user';

import urljoin from 'url-join';
import { NuevoEstudianteComponent } from './nuevo-estudiante/nuevo-estudiante.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'inicio', component: HomeComponent},
  {path: 'inicioSesion/:tipoUsuario', component: InicioSesionComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    InicioSesionComponent,
    HomeComponent,
    PrincipalComponent,
    NuevoEstudianteComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    UserService,
    EstudianteService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
