import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AuthServiceService } from './Services/auth-service.service';
import { LoginManagerComponent } from './login-manager/login-manager.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UpdatedComponent } from './updated/updated.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginManagerComponent,
    SignUpComponent,
    UpdatedComponent
 ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AuthServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
