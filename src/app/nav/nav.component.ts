import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import firebase from 'firebase/compat/app';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  user: firebase.User | null = null;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.authService.user$.subscribe(user => {
      this.user = user;
    });
  }

  signOut() {
    this.authService.signOut().then(() => {
      this.router.navigate(['/login']);
    });
  }
}
