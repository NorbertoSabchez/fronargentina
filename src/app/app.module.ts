import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { AcercaDeComponent } from './acerca-de/acerca-de.component';
import { ExperienciasComponent } from './experiencias/experiencias.component';
import { EducacionComponent } from './educacion/educacion.component';
import { HardskillComponent } from './hardskill/hardskill.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import {HttpClientModule} from '@angular/common/http';
import { PortfolioComponent } from './portfolio/portfolio/portfolio.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login/login.component';
import { RegistroComponent } from './registro/registro/registro.component';
import { interceptorProvider } from './interceptors/prod-interceptors.service';






@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    AcercaDeComponent,
    ExperienciasComponent,
    EducacionComponent,
    HardskillComponent,
    FooterComponent,
    NavComponent,
    PortfolioComponent,
    LoginComponent,
    RegistroComponent
  
    
  
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule, 

  
  ],
  providers: [interceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
