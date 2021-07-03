import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../login-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {
  constructor(private login: LoginServiceService, private router: Router) {}

  ngOnInit() {}

  loginAdmin(empid, pwd) {
    console.log(empid + 'ssssssssssssss' + pwd);
    let loggedIn = this.login.loginAdmin(empid, pwd);
    console.log(loggedIn);
    this.router.navigate(['/home']);
  }
}
