import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginManagerComponent } from './login-manager/login-manager.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  // {path:'',component:AppComponent},
  {path:'LoginManager',component:LoginManagerComponent},
  {path:'login',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
