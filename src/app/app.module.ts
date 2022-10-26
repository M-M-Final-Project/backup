import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AuthServiceService } from './Services/auth-service.service';
import { LoginManagerComponent } from './login-manager/login-manager.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginManagerComponent
 ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AuthServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
