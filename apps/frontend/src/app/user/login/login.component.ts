import { Component } from '@angular/core';
import { Router } from '@angular/router';
 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  
  ]
})
export class LoginComponent {
  mouseoverLogin: boolean ;
  email: string;
  password: string;

  constructor(  private router: Router) { }

  login(formValues : any) {
    // this.authService.loginUser(formValues.username, formValues.password);
    // this.router.navigate(["/events"])

    console.log(formValues);

  }
}
