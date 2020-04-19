import { Injectable } from "@angular/core";
import { Login } from "../models/login.model";
import { BehaviorSubject, Subject, Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class LoginService {
  private subject = new Subject<any>();

  sendMessage(message: string) {
    this.subject.next({ text: message });
  }

  clearMessage() {
    this.subject.next();
  }

  getMessage(): Observable<any> {
    return this.subject.asObservable();
  }

  loggedUser: Login = new Login();
  constructor() {}
}
