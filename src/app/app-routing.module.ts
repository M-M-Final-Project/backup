import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginManagerComponent } from './login-manager/login-manager.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UpdatedComponent } from './updated/updated.component';


const routes: Routes = [
  {path:'',component:AppComponent},
  {path:'LoginManager',component:LoginManagerComponent},
  {path:'Login',component:LoginComponent},
  {path:'SignUp',component:SignUpComponent},
  {path:'Updated', component:UpdatedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
