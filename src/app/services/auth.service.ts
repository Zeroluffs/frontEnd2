import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { map } from "rxjs/operators";
import { auth } from "firebase/app";
import { resolve } from "dns";
import { rejects } from "assert";
import { userInfo } from "os";
import { promise } from "protractor";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private currentUser: firebase.User = null;
  authState: any = null;
  constructor(private afsAuth: AngularFireAuth) {
    this.afsAuth.authState.subscribe((authState) => {
      this.authState = authState;
    });
  }

  registerUser(email: string, password) {
    return new Promise((resolve, reject) => {
      this.afsAuth.createUserWithEmailAndPassword(email, password).then(
        (userInfo) => resolve(userInfo),
        (err) => reject(err)
      );
    });
  }

  loginEmailUser(email: string, password: string) {
    return new Promise((resolve, reject) => {
      this.afsAuth.signInWithEmailAndPassword(email, password).then(
        (userInfo) => resolve(userInfo),
        (err) => reject(err)
      );
    });
  }

  isAuth() {
    return this.afsAuth.authState.pipe(map((auth) => auth));
  }

  onLogout() {
    this.afsAuth.signOut();
  }



  isLoggedIn() {
    if (this.currentUser == null) {
      return false;
    }

    return true;
  }

  currentSession() {
    return this.afsAuth.currentUser;
  }
}
