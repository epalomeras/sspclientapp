import { Component, OnInit } from '@angular/core';
import { AuthService } from './core/auth-service.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent implements OnInit {
  isLoggedIn = false;
  //currentUser: User;

  constructor(private _authService: AuthService) {
    this._authService.loginChanged.subscribe(loggedIn => {
      this.isLoggedIn = loggedIn;
    })

  //  this._authService.miUser.subscribe(user => {
  //    this.User = user;
  //  })
  }

  ngOnInit() {

    this._authService.isLoggedIn().then(loggedIn => {
      this.isLoggedIn = loggedIn;
    })

  }

  login() {
    this._authService.login();
  }

  logout() {
    this._authService.logout();
  }

  isAdmin() {
    return this._authService.authContext && this._authService.authContext.isAdmin;
  }
}
