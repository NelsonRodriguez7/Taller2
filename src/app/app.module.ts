import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';

import { CuentasComponent } from './pages/cuentas/cuentas.component';
import { BarraLateralComponent } from './components/barra-lateral/barra-lateral.component';
import { FormularioComponent } from './pages/formulario/formulario.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
   
    CuentasComponent,
        BarraLateralComponent,
        FormularioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
