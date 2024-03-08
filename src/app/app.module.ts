import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';

import { CuentasComponent } from './pages/cuentas/cuentas.component';
import { BarraLateralComponent } from './components/barra-lateral/barra-lateral.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
   
    CuentasComponent,
        BarraLateralComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
