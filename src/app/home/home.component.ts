import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/auth-service.component'; // eduard

@Component({
    selector: 'app-home',
    templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit {


        User = "eduardo";

         constructor(private _authService: AuthService) {
 //eduard abans buit inclos parametres parentsis

//this._authService.miUser.subscribe(suser => {
      var test = sessionStorage.getItem("oidc.user:https://emeassp12.demo-broadcom.com/default/:0451487e-e166-42b2-8e63-fee338cd327f");
      var miUser = JSON.parse(test);
      this.User=miUser.profile.user_loginid;
//    })


         }


    ngOnInit() { }
    
}