import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";
import { Router } from "@angular/router";
import { Login } from "src/app/models/login.model";
import { LoginService } from "src/app/services/login.service";
import { Subscription } from 'rxjs';
@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"],
})
export class NavbarComponent implements OnInit {
  loginUser: Login;
  nameUser: string;

  constructor(
    public auth: AuthService,
    private router: Router,
    public currentEmail: LoginService
  ) {}

  ngOnInit() {
    console.log(JSON.stringify(this.currentEmail.getMessage()));
  }
  isLoggedIn() {
    return this.auth.isLoggedIn();
  }

  getCurrent(){
    console.log(this.auth.currentSession)
  }
  onLogout() {
    this.auth.onLogout();
    this.router.navigate(["login"]);
  }
}
