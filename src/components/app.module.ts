/* Modules */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from './shared/shared.module'
/* Components */
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
/* Routes */
import { RoutesApp } from './app.routing';
import { RegisterService } from './register/register.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    AppComponent
  ],
  imports: [
    SharedModule,
    RoutesApp,
    BrowserModule,
    HttpClientModule
  ],
  providers: [RegisterService],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
