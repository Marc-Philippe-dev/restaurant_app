import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/user/auth.service';
import { IUser } from 'src/app/core/user/model/user.model';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [

  ]
})
export class LoginComponent {
  mouseoverLogin: boolean;
  email: string;
  password: string;

  constructor(private authService: AuthService, private router: Router) { }

  login(formValues: IUser) {
    
    this.authService.login(formValues).subscribe(
      resp => {
        if (resp) {
          console.log(resp);
          
          this.router.navigate(['/add-edit']);
        }
        else {
          alert("Check your credentials")
        }
      }
    )

  }
}
