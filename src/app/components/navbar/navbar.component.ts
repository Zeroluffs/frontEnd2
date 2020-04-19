import { Component, OnInit } from '@angular/core'
import { AuthService } from 'src/app/services/auth.service'
import { Router } from '@angular/router'
import { Login } from 'src/app/models/login.model'
import { LoginService } from 'src/app/services/login.service'
import { Subscription } from 'rxjs'
import { LoginComponent } from '../users/login/login.component'
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  loginUser: Login
  nameUser: string
  email: string
  constructor(
    public auth: AuthService,
    private router: Router,
    public currentEmail: LoginService
  ) {}

  ngOnInit() {}
  isLoggedIn() {
    return this.auth.isLoggedIn()
  }

  getCurrent() {
    this.currentEmail.currentEmail$.subscribe(
      (currentEmail) => (this.email = currentEmail)
    )

    console.log(JSON.stringify(this.email), 'hihihi')
  }
  onLogout() {
    this.auth.onLogout()
    this.router.navigate(['login'])
  }
}
