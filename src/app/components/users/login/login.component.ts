import { Component, OnInit } from "@angular/core";
import { snapshotChanges } from "@angular/fire/database";
import { Login } from "src/app/models/login.model";
import { NgForm } from "@angular/forms";
import { LoginService } from "src/app/services/login.service";
import { UserService } from "src/app/services/user.service";
import { User } from "src/app/models/user.model";
import { element } from "protractor";
import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from "@angular/router";
import { AuthService } from "src/app/services/auth.service";
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  pageAccess: boolean;
  logged: Login;
  userList: User[];
  listofUsers = [];
  email: string = "";
  password: string = "";
  currentUser: string;
  message: string;
  constructor(
    public currentEmail: LoginService,
    public userService: UserService,
    public afAuth: AngularFireAuth,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit() {
  }

  onLogin() {
    console.log(JSON.stringify(this.email));
    this.currentEmail.sendMessage(JSON.stringify(this.email))
    console.log(JSON.stringify(this.currentEmail.getMessage()))
    this.authService
      .loginEmailUser(this.email, this.password)
      .then((res) => {
        this.router.navigate(["admin/user-list"]);
      })
      .catch((err) => console.log("err", err.message));
  }

  onLogout() {
    this.authService.onLogout();
  }

  getcurrentUser(UserEmail: string) {
    return UserEmail;
  }
  logging(loggingForm: NgForm) {
    this.logged = loggingForm.value;
    const findingEmail = this.userList.find(
      ({ userEmail }) => userEmail === this.logged.email
    );
    const findingPassword = this.userList.find(
      ({ password }) => password === this.logged.password
    );

    if (findingEmail != undefined && findingPassword != undefined) {
      console.log(JSON.stringify("found"));
      this.pageAccess = true;
    } else {
      console.log(JSON.stringify("not found"));
      this.pageAccess = false;
    }
    //console.log(JSON.stringify(this.userList))
    //console.log(JSON.stringify(this.logged.email))
  }
}
