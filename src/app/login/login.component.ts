import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string = "";
  password: string = "";

  constructor(private authService: AuthService) { }

  signUp() {
    this.authService.signUp(this.email, this.password)
      .then(user => console.log(user))
      .catch(error => console.error(error));
  }

  signIn() {
    this.authService.signIn(this.email, this.password)
     .then(user => console.log(user))
     .catch(error => console.error(error));
  }

  signOut() {
    this.authService.signOut();
  }
}
