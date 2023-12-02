import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, debounceTime } from 'rxjs';
import { AuthService } from 'src/app/core/user/auth.service';
import { IUser } from 'src/app/core/user/model/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  mouseoverLogin: boolean;
  username: string;
  email: string;
  password: string;

  showError: boolean = false;
  private errorSubject = new Subject<void>();

  ngOnInit(): void {
    this.errorSubject.pipe(debounceTime(2000)).subscribe(() => {
      this.showError = true;
    });
  }
  constructor(private authService: AuthService, private router: Router) { }

  onInput(): void {
    this.errorSubject.next();
  }

  register(registrationData: IUser) {

    this.authService.register(registrationData).subscribe(resp => {
      if (resp) {
        this.router.navigate(['/user/login']);
      }
    });

  }
}
