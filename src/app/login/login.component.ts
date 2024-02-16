import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'huntersteffner'
  password = ''
  errorMessage = 'Invalid Credentials'
  invalidLogin = false

  constructor(
    private router: Router
  ) {}

  ngOnInit(): void {
      
  }

  handleLogin(): void {
    // console.log(this.username)
    if(this.username === 'huntersteffner' && this.password === 'dummy') {
      // Redirect to welcome page
      this.router.navigate(['welcome', this.username])
      this.invalidLogin = false
    } else {
      this.invalidLogin = true
    }
  }

}
