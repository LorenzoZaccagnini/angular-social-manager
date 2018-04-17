import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../util/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public authService: AuthService, private router:Router) { }

  ngOnInit() {
  }

  user = {
  name: null,
  password: null
};

login() {
  this.authService.loginWithEmail(this.user.name, this.user.password)
  .then((data)=>{
    this.router.navigate(['topbar/leftmenu/addasset']);
  })
  .catch((e)=>{
    console.log('error: ', e)
  })
}

}
