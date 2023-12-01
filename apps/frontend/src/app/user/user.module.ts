import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { userRoutes } from './user.routes';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '../shared/shared.module';
import { RegisterComponent } from './register/register.component';
 



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    
  ],
  imports: [
    RouterModule.forChild(userRoutes),
    SharedModule
  ]
})
export class UserModule { }
